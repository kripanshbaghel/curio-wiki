import Link from 'next/link';
import { isSupabaseConfigured } from '@/lib/config/env';
import { ResetPasswordForm } from '@/components/auth/reset-password-form';
import { Container } from '@/components/ui/container';
import { EmptyState } from '@/components/ui/empty-state';

export const metadata = { title: 'Choose a new password' };

export default function ResetPasswordPage() {
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
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">
        Choose a new password
      </h1>
      <ResetPasswordForm />
      <p className="text-sm text-muted-foreground">
        <Link href="/signin" className="text-primary underline-offset-2 hover:underline">
          Back to sign in
        </Link>
      </p>
    </Container>
  );
}
