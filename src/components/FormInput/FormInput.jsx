import clsx from "clsx"

const FormInput = ({ label, className, id, ...props }) => {
    return (
        <>
            {label && (
                <label
                    htmlFor={id}
                    className={clsx("text-xl", className ? className : "")}
                >
                    {label}
                </label>
            )}
            <input
                className="border w-full rounded-sm pl-2 pr-10 py-1 text-white h-12 mb-8 bg-transparent focus:outline-none text-base"
                {...props}
            />
        </>
    )
}

export default FormInput
