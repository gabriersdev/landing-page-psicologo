export default function Badge({text}: { text: string }) {
  return (
    <div
      className="inline-flex items-center gap-3 mb-3 px-2 py-1 before:h-px before:w-8 before:bg-gradient-to-r before:from-transparent before:to-emerald-400/50 after:h-px after:w-8 after:bg-gradient-to-l after:from-transparent after:to-emerald-400/50 bg-emerald-100 border-emerald-200 border rounded-4xl">
                <span
                  className="inline-flex bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent">
                  {text}
                </span>
    </div>
  )
}