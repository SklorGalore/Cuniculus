/**
 * The drawing set. Every page is a sheet (brief section 2.2).
 * Bump `rev` and `date` when a sheet really changes, so the site reads
 * as a living drawing set.
 */
export interface Sheet {
  number: string;
  title: string;
  nav: string; // lowercase mono nav label
  href: string;
  rev: string;
  date: string; // YYYY-MM-DD
}

export const sheets: Sheet[] = [
  { number: '00', title: 'Index', nav: 'index', href: '/', rev: 'B', date: '2026-10-24' },
  { number: '01', title: 'Services', nav: 'services', href: '/services/', rev: 'B', date: '2026-10-24' },
  { number: '02', title: 'Work', nav: 'work', href: '/works/', rev: 'B', date: '2026-10-24' },
  { number: '03', title: 'Notes', nav: 'notes', href: '/notes/', rev: 'B', date: '2026-10-24' },
  { number: '04', title: 'About', nav: 'about', href: '/about/', rev: 'B', date: '2026-10-24' },
];

/** Highest sheet number, for "sheet 03 of 04". */
export const lastSheet = sheets[sheets.length - 1].number;

export function sheetFor(number: string): Sheet {
  const sheet = sheets.find((s) => s.number === number);
  if (!sheet) throw new Error(`No sheet numbered ${number}`);
  return sheet;
}
