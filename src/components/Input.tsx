interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
}
export function Input({ label, ...props }: Props) {
    return (
        <label className="flex flex-col gap-1">
            {label}
            <input 
                className="p-2 rounded-lg"
                name={label.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')}                
                {...props}
                 />
        </label>
    )
}