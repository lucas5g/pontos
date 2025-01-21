
interface Props {
  children: React.ReactNode
}

export function Card({ children }: Props) {
  return (
    <div className="bg-gray-900 p-5 rounded border-gray-950">
      {children}
    </div>
  )
}