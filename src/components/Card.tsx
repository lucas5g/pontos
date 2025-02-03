interface Props {
  children: React.ReactNode
}
export function Card({ children }: Readonly<Props>) {
  return (
    <div className="bg-gray-800 p-5 rounded-lg">
      {children}
    </div>
  )

}