export function Barcode({ className = "" }: { className?: string }) {
  const bars = [3, 1, 2, 1, 4, 1, 1, 2, 1, 3, 1, 2, 1, 1, 4, 1, 2, 1, 3];
  return (
    <div className={`flex items-end gap-[1px] ${className}`}>
      {bars.map((h, i) => (
        <div
          key={i}
          className="bg-current shrink-0"
          style={{ width: 1, height: h * 3 }}
        />
      ))}
    </div>
  );
}
