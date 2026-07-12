// Toggle segmentado reutilizable. `options` = [{ value, label }].
export default function SegmentedToggle({ options, value, onChange }) {
  return (
    <div className="flex overflow-hidden rounded-xl border border-forest-200">
      {options.map((o) => (
        <button
          key={o.value}
          type="button"
          onClick={() => onChange(o.value)}
          className={`px-4 py-2.5 text-sm font-medium transition-colors ${
            value === o.value
              ? 'bg-forest-600 text-white'
              : 'bg-white text-forest-500 hover:bg-forest-50'
          }`}
        >
          {o.label}
        </button>
      ))}
    </div>
  )
}
