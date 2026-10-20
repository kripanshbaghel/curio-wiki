'use client';

import type { FormEvent } from 'react';
import { useEffect, useState } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';
import { AuthMessage } from '@/components/auth/auth-message';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ResetPasswordForm() {
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [pending, setPending] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const supabase = createBrowserClient();
    const code = new URLSearchParams(window.location.search).get('code');
    const exchange = code
      ? supabase.auth.exchangeCodeForSession(code)
      : supabase.auth.getSession();
    void exchange.finally(() => setReady(true));
  }, []);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setMessage(null);

    const supabase = createBrowserClient();
    const { error } = await supabase.auth.updateUser({ password });

    if (error) {
      setMessage({
        type: 'error',
        text:
          error.message.toLowerCase().includes('password') && error.message.length < 80
            ? error.message
            : 'Something went wrong. Please try again.',
      });
    } else {
      setMessage({ type: 'success', text: 'Password updated. You can sign in now.' });
    }
    setPending(false);
  }

  if (!ready) {
    return <p className="text-sm text-muted-foreground">Preparing reset form…</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
      <label htmlFor="password" className="text-sm font-medium text-foreground">
        New password
      </label>
      <Input
        id="password"
        type="password"
        required
        minLength={6}
        autoComplete="new-password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {message ? <AuthMessage type={message.type} text={message.text} /> : null}
      <Button type="submit" disabled={pending}>
        {pending ? 'Please wait…' : 'Update password'}
      </Button>
    </form>
  );
}
