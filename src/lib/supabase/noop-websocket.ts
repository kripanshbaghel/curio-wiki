/**
 * Minimal WebSocket stub for Node/Edge runtimes where realtime-js checks for a
 * WebSocket constructor at init time. We never open a realtime connection, so a
 * noop that reports CLOSED satisfies the constructor check without importing ws.
 */
export class NoopWebSocket {
  static readonly CONNECTING = 0;
  static readonly OPEN = 1;
  static readonly CLOSING = 2;
  static readonly CLOSED = 3;
  readyState = 3;
  url = '';
  protocol = '';
  close() {}
  send() {}
  addEventListener() {}
  removeEventListener() {}
  onopen: unknown = null;
  onmessage: unknown = null;
  onclose: unknown = null;
  onerror: unknown = null;
}
