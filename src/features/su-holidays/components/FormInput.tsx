import React from 'react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    required?: boolean
    error?: string
    hint?: React.ReactNode
    tooltip?: string
}

export const FormInput: React.FC<FormInputProps> = ({
    label, required = false, error, hint, tooltip, className, id, name, ...props
}) => {
    const inputId = id || name || label.toLowerCase().replace(/\s+/g, '-');
    return (
        <div className="form-control w-full pt-2">
            <label htmlFor={inputId} className="label pb-1">
                <span className="label-text text-base font-medium">
                    {label}
                    {required && <span className="text-error ml-1">*</span>}
                </span>
                {tooltip && (
                    <span className="label-text-alt">
                        <span className="tooltip tooltip-left cursor-help" data-tip={tooltip}>
                            <span className="text-base-content/50 hover:text-base-content transition-colors" aria-label={tooltip}>ⓘ</span>
                        </span>
                    </span>
                )}
            </label>
            <input
                id={inputId}
                name={name}
                {...props}
                className={`input input-bordered w-full ${error ? 'input-error' : ''} ${className || ''}`}
            />
            {(error || hint) && (
                <div className="label">
                    {error
                        ? <span className="label-text-alt text-error">{error}</span>
                        : <span className="label-text-alt text-base-content/60">{hint}</span>
                    }
                </div>
            )}
        </div>
    )
}
