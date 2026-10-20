export function AuthMessage({ type, text }: { type: 'error' | 'success'; text: string }) {
  return (
    <p
      role="alert"
      className={
        type === 'error'
          ? 'rounded-md bg-danger/10 px-3 py-2 text-sm text-danger'
          : 'rounded-md bg-success/10 px-3 py-2 text-sm text-success'
      }
    >
      {text}
    </p>
  );
}
