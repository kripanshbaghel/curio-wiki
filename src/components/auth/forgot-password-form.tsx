'use client';

import type { FormEvent } from 'react';
import { useState } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';
import { AuthMessage } from '@/components/auth/auth-message';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ForgotPasswordForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setPending(true);
    setMessage(null);

    const supabase = createBrowserClient();
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    });

    if (error) {
      setMessage({ type: 'error', text: 'Something went wrong. Please try again.' });
    } else {
      setMessage({ type: 'success', text: 'Check your email for a password reset link.' });
    }
    setPending(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
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
      {message ? <AuthMessage type={message.type} text={message.text} /> : null}
      <Button type="submit" disabled={pending}>
        {pending ? 'Please wait…' : 'Send reset link'}
      </Button>
    </form>
  );
}
