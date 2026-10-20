import { isSupabaseConfigured } from '@/lib/config/env';
import { ForgotPasswordForm } from '@/components/auth/forgot-password-form';
import { Container } from '@/components/ui/container';
import { EmptyState } from '@/components/ui/empty-state';

export const metadata = { title: 'Reset password' };

export default function ForgotPasswordPage() {
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
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Reset password</h1>
      <p className="text-sm text-muted-foreground">
        Enter your email and we&apos;ll send you a reset link.
      </p>
      <ForgotPasswordForm />
    </Container>
  );
}
