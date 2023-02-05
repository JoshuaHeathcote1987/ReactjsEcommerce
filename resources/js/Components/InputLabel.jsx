export default function InputLabel({ forInput, value, className, children }) {
    
    return (
        <label htmlFor={forInput} className={`block font-medium text-sm text-gray-700 pb-3` + className}>
            {value ? value : children}
        </label>
    );
}
