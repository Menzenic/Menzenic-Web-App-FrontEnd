const FormInput = ({ label, className, id, ...props }) => {
    return (
        <>
            {label && (
                <label htmlFor={id} className={className ? className : ''}>
                    {label}:
                </label>
            )}
            <input className="border rounded px-2 py-1 text-black" {...props} />
        </>
    )
}

export default FormInput
