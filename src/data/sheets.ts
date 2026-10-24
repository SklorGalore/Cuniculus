/**
 * The drawing set. Every page is a sheet (brief section 2.2).
 * Bump `rev` and `date` when a sheet really changes, so the site reads
 * as a living drawing set.
 */
export interface Sheet {
  number: string;
  title: string;
  href: string;
  rev: string;
  date: string; // YYYY-MM-DD
}

export const sheets: Sheet[] = [
  { number: '00', title: 'Index', href: '/', rev: 'A', date: '2026-10-24' },
  { number: '01', title: 'Services', href: '/services/', rev: 'A', date: '2026-10-24' },
  { number: '02', title: 'Works', href: '/works/', rev: 'A', date: '2026-10-24' },
  { number: '03', title: 'Notes', href: '/notes/', rev: 'A', date: '2026-10-24' },
  { number: '04', title: 'About', href: '/about/', rev: 'A', date: '2026-10-24' },
];

/** Highest sheet number, for "03 OF 04". */
export const lastSheet = sheets[sheets.length - 1].number;

export function sheetFor(number: string): Sheet {
  const sheet = sheets.find((s) => s.number === number);
  if (!sheet) throw new Error(`No sheet numbered ${number}`);
  return sheet;
}
