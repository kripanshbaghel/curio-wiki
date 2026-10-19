export function WikiAttribution() {
  return (
    <p className="text-xs text-muted-foreground">
      Content from{' '}
      <a
        href="https://www.wikipedia.org/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-foreground"
      >
        Wikipedia
      </a>
      , available under the{' '}
      <a
        href="https://creativecommons.org/licenses/by-sa/4.0/"
        target="_blank"
        rel="noopener noreferrer"
        className="underline hover:text-foreground"
      >
        CC BY-SA 4.0
      </a>{' '}
      licence.
    </p>
  );
}
