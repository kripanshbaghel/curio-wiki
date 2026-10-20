import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

const signInWithPassword = vi.fn();
const signUp = vi.fn();
const signInWithOAuth = vi.fn();
const resetPasswordForEmail = vi.fn();
const getUser = vi.fn();

vi.mock('@supabase/ssr', () => ({
  createBrowserClient: () => ({
    auth: { signInWithPassword, signUp, signInWithOAuth, resetPasswordForEmail },
  }),
  createServerClient: () => ({ auth: { getUser } }),
}));

vi.mock('server-only', () => ({}));

vi.mock('next/headers', () => ({
  cookies: () => ({ getAll: () => [], setAll: () => {} }),
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({ push: vi.fn(), refresh: vi.fn() }),
}));

import SignInPage from '@/app/(auth)/signin/page';
import { OAuthButton } from '@/components/auth/oauth-button';
import { requireUser } from '@/lib/supabase/server';

beforeEach(() => {
  vi.clearAllMocks();
  vi.stubEnv('NEXT_PUBLIC_SITE_URL', 'http://localhost:3000');
});

describe('sign-in page', () => {
  it('renders a not-configured state with no input fields when Supabase is unset', () => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', '');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', '');

    render(<SignInPage />);
    expect(screen.getByText(/authentication is not configured/i)).toBeInTheDocument();
    expect(document.querySelectorAll('input')).toHaveLength(0);
  });

  it('shows a mapped friendly error for invalid credentials', async () => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://example.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'anon-test');
    signInWithPassword.mockRejectedValue({ code: 'invalid_credentials', message: 'bad' });

    render(<SignInPage />);
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'a@b.com' } });
    fireEvent.change(screen.getByLabelText(/password/i), { target: { value: 'secret1' } });
    fireEvent.click(screen.getByRole('button', { name: /sign in/i }));

    await waitFor(() => {
      expect(screen.getByRole('alert')).toHaveTextContent(/didn't work/i);
    });
    expect(signInWithPassword).toHaveBeenCalledWith({ email: 'a@b.com', password: 'secret1' });
  });
});

describe('OAuthButton', () => {
  it('triggers Google OAuth with redirectTo ending in /auth/callback', async () => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://example.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'anon-test');
    signInWithOAuth.mockResolvedValue({ error: null });

    render(<OAuthButton />);
    fireEvent.click(screen.getByRole('button', { name: /google/i }));

    await waitFor(() => expect(signInWithOAuth).toHaveBeenCalledTimes(1));
    expect(signInWithOAuth).toHaveBeenCalledWith({
      provider: 'google',
      options: { redirectTo: 'http://localhost:3000/auth/callback' },
    });
  });
});

describe('requireUser', () => {
  it('redirects to /signin?next=/account when there is no session', async () => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://example.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'anon-test');
    getUser.mockResolvedValue({ data: { user: null }, error: null });

    const result = await requireUser('/account');
    expect(result).toEqual({ redirect: '/signin?next=%2Faccount' });
  });

  it('returns the user when a session exists', async () => {
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_URL', 'https://example.supabase.co');
    vi.stubEnv('NEXT_PUBLIC_SUPABASE_ANON_KEY', 'anon-test');
    const user = { id: 'user-1', email: 'a@b.com' };
    getUser.mockResolvedValue({ data: { user }, error: null });

    const result = await requireUser('/account');
    expect(result).toEqual({ user });
  });
});
