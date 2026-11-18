import { Search, User } from 'lucide-react';
import Link from 'next/link';
import { createSupabaseServerClient, isSupabaseConfigured } from '@/lib/supabase/server';
import { ThemeToggle } from '@/components/ui/theme-toggle';
import { Container } from '@/components/ui/container';
import { MobileNav } from '@/components/layout/mobile-nav';
import { cn } from '@/lib/cn';

const NAV_LINKS = [
  { href: '/topics', label: 'Topics' },
  { href: '/experiments', label: 'Experiments' },
  { href: '/visualizers', label: 'Visualizers' },
  { href: '/videos', label: 'Videos' },
  { href: '/resources', label: 'Resources' },
] as const;

async function AccountControl() {
  if (!isSupabaseConfigured()) {
    return (
      <Link
        href="/signin"
        className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-medium text-foreground hover:bg-surface-muted"
      >
        <User aria-hidden className="size-4" />
        Sign in
      </Link>
    );
  }

  try {
    const supabase = await createSupabaseServerClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (user) {
      return (
        <Link
          href="/account"
          className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-medium text-foreground hover:bg-surface-muted"
        >
          <User aria-hidden className="size-4" />
          Account
        </Link>
      );
    }
  } catch {
    // Session lookup failed — fall through to signed-out state.
  }

  return (
    <Link
      href="/signin"
      className="inline-flex h-8 items-center gap-1.5 rounded-md border border-border px-3 text-sm font-medium text-foreground hover:bg-surface-muted"
    >
      <User aria-hidden className="size-4" />
      Sign in
    </Link>
  );
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur supports-[backdrop-filter]:bg-surface/75">
      <Container className="relative flex h-14 items-center justify-between gap-4">
        <div className="flex items-center gap-6">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span aria-hidden className="flex size-7 items-center justify-center rounded-md bg-primary text-sm font-bold text-primary-foreground">
              C
            </span>
            Curio Wiki
          </Link>
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      'rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-surface-muted hover:text-foreground',
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="flex items-center gap-1">
          <Link
            href="/search"
            aria-label="Search"
            className="rounded-md p-2 text-foreground hover:bg-surface-muted"
          >
            <Search aria-hidden className="size-4" />
          </Link>
          <ThemeToggle />
          <div className="hidden md:block">
            <AccountControl />
          </div>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
