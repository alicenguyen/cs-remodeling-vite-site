export function PhoneIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.5.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.5.1.4 0 .8-.3 1L6.6 10.8z" />
    </svg>
  );
}

const FLAG_STRIPE_H = 16 / 13;
const FLAG_RED_STRIPES = [0, 2, 4, 6, 8, 10, 12];
const FLAG_STAR_COLS = [2.4, 5.2, 8, 10.8];
const FLAG_STAR_ROWS = [2, 4.3, 6.6, 9];

export function VeteranIcon(props) {
  return (
    <svg viewBox="0 0 30 16" width="30" height="16" aria-hidden="true" {...props}>
      <rect width="30" height="16" fill="#fff" />
      {FLAG_RED_STRIPES.map((i) => (
        <rect key={i} x="0" y={i * FLAG_STRIPE_H} width="30" height={FLAG_STRIPE_H + 0.1} fill="#b22234" />
      ))}
      <rect x="0" y="0" width="13" height={FLAG_STRIPE_H * 7} fill="#3c3b6e" />
      {FLAG_STAR_ROWS.map((cy) =>
        FLAG_STAR_COLS.map((cx) => <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="0.55" fill="#fff" />),
      )}
    </svg>
  );
}

export function StarIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#d8a83a" aria-hidden="true" {...props}>
      <path d="M12 2.5l2.9 6.3 6.9.7-5.2 4.7 1.5 6.8L12 17.7 5.9 21l1.5-6.8-5.2-4.7 6.9-.7L12 2.5z" />
    </svg>
  );
}

export function HeartIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="#2e6a3e" aria-hidden="true" {...props}>
      <path d="M12 21s-7.5-4.9-10-9.5C.4 8.1 2 4.5 5.6 4A5.3 5.3 0 0112 7a5.3 5.3 0 016.4-3c3.6.5 5.2 4.1 3.6 7.5C19.5 16.1 12 21 12 21z" />
    </svg>
  );
}

export function PinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11" fill="#1d5866" />
      <path
        d="M12 6c-2.5 0-4.5 2-4.5 4.5 0 3.2 4.5 8 4.5 8s4.5-4.8 4.5-8C16.5 8 14.5 6 12 6zm0 6.2a1.8 1.8 0 110-3.6 1.8 1.8 0 010 3.6z"
        fill="#fff"
      />
    </svg>
  );
}

export function PeopleIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="#12294a" aria-hidden="true" {...props}>
      <circle cx="8" cy="8" r="2.6" />
      <circle cx="16" cy="8" r="2.6" />
      <path d="M2 19c0-3 2.7-5.2 6-5.2s6 2.2 6 5.2v1H2v-1z" />
      <path d="M10 19c0-2.1 1.1-3.9 2.8-4.8.4-.2 1-.4 1.2-.4 3.3 0 6 2.2 6 5.2v1h-10v-1z" opacity="0.75" />
    </svg>
  );
}

export function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="#2e6a3e" strokeWidth="2.5" aria-hidden="true" {...props}>
      <path d="M4 12.5l5 5L20 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3.5 6.5L12 13l8.5-6.5" />
    </svg>
  );
}
