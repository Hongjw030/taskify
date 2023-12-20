interface EllipseIconProps {
  size: number
  color: string
}

export default function EllipseIcon({ size, color }: EllipseIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  )
}
