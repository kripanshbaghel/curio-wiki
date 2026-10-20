import Link from 'next/link';
import { isSupabaseConfigured } from '@/lib/config/env';
import { AuthForm } from '@/components/auth/auth-form';
import { OAuthButton } from '@/components/auth/oauth-button';
import { Container } from '@/components/ui/container';
import { EmptyState } from '@/components/ui/empty-state';

export const metadata = { title: 'Sign in' };

export default function SignInPage() {
  if (!isSupabaseConfigured()) {
    return (
      <Container className="py-16">
        <EmptyState
          title="Authentication is not configured"
          description="Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to enable accounts. See docs/setup.md."
        />
      </Container>
    );
  }

  return (
    <Container className="flex max-w-sm flex-col gap-6 py-16">
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Sign in</h1>
      <AuthForm mode="signin" />
      <OAuthButton />
      <div className="flex justify-between text-sm">
        <Link href="/forgot-password" className="text-primary underline-offset-2 hover:underline">
          Forgot password?
        </Link>
        <Link href="/signup" className="text-primary underline-offset-2 hover:underline">
          Create an account
        </Link>
      </div>
    </Container>
  );
}
