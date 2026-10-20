'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';
import { AuthMessage } from '@/components/auth/auth-message';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function AuthForm({ mode }: { mode: 'signin' | 'signup' }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setMessage(null);

    const supabase = createBrowserClient();

    try {
      if (mode === 'signin') {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) {
          setMessage({ type: 'error', text: mapAuthError(error) });
        } else {
          setMessage({ type: 'success', text: 'Signed in — redirecting…' });
          window.location.href = '/account';
        }
      } else {
        const { data, error } = await supabase.auth.signUp({ email, password });
        if (error) {
          setMessage({ type: 'error', text: mapAuthError(error) });
        } else if (data.session) {
          setMessage({ type: 'success', text: 'Account created — redirecting…' });
          window.location.href = '/account';
        } else {
          setMessage({
            type: 'success',
            text: 'Check your email to confirm your account, then sign in.',
          });
        }
      }
    } catch (caught) {
      setMessage({ type: 'error', text: mapAuthError(caught) });
    }

    setPending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-foreground">
          Email
        </label>
        <Input
          id="email"
          type="email"
          required
          autoComplete="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-sm font-medium text-foreground">
          Password
        </label>
        <Input
          id="password"
          type="password"
          required
          minLength={6}
          autoComplete={mode === 'signin' ? 'current-password' : 'new-password'}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </div>
      {message ? <AuthMessage type={message.type} text={message.text} /> : null}
      <Button type="submit" disabled={pending}>
        {pending ? 'Please wait…' : mode === 'signin' ? 'Sign in' : 'Create account'}
      </Button>
    </form>
  );
}

function mapAuthError(error: unknown): string {
  const code =
    typeof error === 'object' && error !== null && 'code' in error
      ? String((error as { code?: unknown }).code)
      : '';
  const message =
    typeof error === 'object' && error !== null && 'message' in error
      ? String((error as { message?: unknown }).message)
      : '';

  if (code === 'invalid_credentials' || message.toLowerCase().includes('invalid login credentials')) {
    return "That email and password combination didn't work. Try again or reset your password.";
  }
  if (message.toLowerCase().includes('email not confirmed')) {
    return 'Please confirm your email address before signing in.';
  }
  if (message.toLowerCase().includes('already registered')) {
    return 'That email is already registered. Try signing in instead.';
  }
  return 'Something went wrong. Please try again.';
}
