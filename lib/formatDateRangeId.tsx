// lib/formatDateRangeID.ts
export function formatDateRangeID(start: Date, end: Date): string {
  const sameMonth =
    start.getMonth() === end.getMonth() &&
    start.getFullYear() === end.getFullYear();

  const startDay = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
  }).format(start);

  if (sameMonth) {
    // 11–17 Januari 2024
    const endFull = new Intl.DateTimeFormat("id-ID", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(end);

    return `${startDay}–${endFull}`;
  }

  // fallback jika beda bulan/tahun
  const fullStart = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(start);

  const fullEnd = new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(end);

  return `${fullStart} – ${fullEnd}`;
}
