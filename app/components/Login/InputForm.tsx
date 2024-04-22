export default function InputForm({ label, name, type, placeholder, plcolor = '', onChange = () => {}, onBlur=()=>{} }: { label: string, name: string, type: string, placeholder: string, plcolor?: string, onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void , onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void}) {
  return (
    <div>
      <label htmlFor={name} className={`${plcolor} font-semibold block text-sm leading-8`}>
        {label}
      </label>
      <div className="mt-2">
        <input
          id={name}
          name={name}
          type={type}
          autoComplete={name}
          onBlur={onBlur}
          required
          onChange={onChange}
          placeholder={placeholder}
          className={`block w-full indent-4 rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ${plcolor === '' ? 'placeholder:text-gray-400 text-gray-700' : `placeholder:${plcolor} ${plcolor}`} ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-gray-600 sm:text-sm sm:leading-6`}
        />
      </div>
    </div>
  );
}
