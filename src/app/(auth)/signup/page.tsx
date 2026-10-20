import Link from 'next/link';
import { isSupabaseConfigured } from '@/lib/config/env';
import { AuthForm } from '@/components/auth/auth-form';
import { Container } from '@/components/ui/container';
import { EmptyState } from '@/components/ui/empty-state';

export const metadata = { title: 'Create account' };

export default function SignUpPage() {
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
      <h1 className="text-2xl font-semibold tracking-tight text-foreground">Create account</h1>
      <AuthForm mode="signup" />
      <p className="text-sm text-muted-foreground">
        Already have an account?{' '}
        <Link href="/signin" className="text-primary underline-offset-2 hover:underline">
          Sign in
        </Link>
      </p>
    </Container>
  );
}
