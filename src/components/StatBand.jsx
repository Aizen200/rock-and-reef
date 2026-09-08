import { stats } from '../data/site'
import { useCountUp } from '../hooks'

/** Splits "25M+" into { number: 25, suffix: 'M+' } so only the digits animate. */
function parse(value) {
  const m = String(value).match(/^([\d.]+)(.*)$/)
  if (!m) return { number: null, suffix: value }
  return { number: parseFloat(m[1]), suffix: m[2], decimals: (m[1].split('.')[1] || '').length }
}

function Stat({ value, label }) {
  const { number, suffix, decimals } = parse(value)
  const [ref, current] = useCountUp(number ?? 0)
  return (
    <div className="stat" ref={ref}>
      <div className="v">
        {number === null ? value : current.toFixed(decimals)}
        <span className="s">{suffix}</span>
      </div>
      <div className="l">{label}</div>
    </div>
  )
}

export default function StatBand() {
  return (
    <section className="stat-band" aria-label="Company at a glance">
      <div className="wrap stat-band-inner">
        {stats.map((s) => (
          <Stat key={s.label} value={s.value} label={s.label} />
        ))}
      </div>
    </section>
  )
}
