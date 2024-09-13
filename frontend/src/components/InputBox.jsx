const InputBox= ({label,placeholder,onChange})=>{
    return (
            <>
                <div className="text-sm font-medium text-left py-2" >
                <label htmlFor={label}>{label}</label>
                </div>
                <input onChange={onChange} id={label} placeholder={placeholder} className="w-full px-2 py-1 border rounded border-slate-300"  />
            </>
    )
}
export default InputBox;