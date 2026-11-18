import Link from 'next/link';
import { Container } from '@/components/ui/container';

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-border bg-surface">
      <Container className="flex flex-col gap-4 py-10 text-sm text-muted-foreground md:flex-row md:items-start md:justify-between">
        <div className="max-w-md space-y-2">
          <p className="font-semibold text-foreground">Curio Wiki</p>
          <p>
            Wikipedia content is used under the{' '}
            <a
              href="https://creativecommons.org/licenses/by-sa/4.0/"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground"
            >
              CC BY-SA 4.0
            </a>{' '}
            licence. Videos link to YouTube; web resources open external sites.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li>
              <Link href="/topics" className="hover:text-foreground">
                Topics
              </Link>
            </li>
            <li>
              <Link href="/experiments" className="hover:text-foreground">
                Experiments
              </Link>
            </li>
            <li>
              <Link href="/visualizers" className="hover:text-foreground">
                Visualizers
              </Link>
            </li>
            <li>
              <Link href="/videos" className="hover:text-foreground">
                Videos
              </Link>
            </li>
            <li>
              <Link href="/resources" className="hover:text-foreground">
                Resources
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </footer>
  );
}
