interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    value: string
}
export function Button({ value, ...props }: Props) {
    return (
        <button 
            className="px-4 py-2 rounded-lg bg-gray-600 hover:bg-gray-500 border w-28 disabled:cursor-not-allowed disabled:bg-gray-400"
            {...props}>
            {value}
        </button>
    )
}