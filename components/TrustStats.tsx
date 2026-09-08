import { STATS } from '@/lib/constants'

/** Trust-stat strip — approved proof points only (see lib/constants.ts STATS). */
export function TrustStats({ className = '' }: { className?: string }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-3 gap-8 text-center ${className}`}>
      {STATS.map((s) => (
        <div key={s.label}>
          <p className="text-4xl sm:text-5xl font-black text-accent mb-1">{s.value}</p>
          <p className="brand-label text-secondary text-[11px]">{s.label}</p>
        </div>
      ))}
    </div>
  )
}
