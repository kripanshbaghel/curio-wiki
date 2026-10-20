'use client';

import { useState } from 'react';
import { createBrowserClient } from '@/lib/supabase/client';
import { Button } from '@/components/ui/button';

export function OAuthButton() {
  const [pending, setPending] = useState(false);

  async function handleGoogle() {
    setPending(true);
    const supabase = createBrowserClient();
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    setPending(false);
  }

  return (
    <Button type="button" variant="outline" onClick={handleGoogle} disabled={pending}>
      {pending ? 'Redirecting…' : 'Continue with Google'}
    </Button>
  );
}
