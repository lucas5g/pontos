interface Props extends React.InputHTMLAttributes<HTMLInputElement>{

}
export function Input(...props: Props[]){
    // if (typeof window === 'undefined') return null
    return (
        <input className="rounded p-2 bg-gray-600 " {...props} />
    )
}