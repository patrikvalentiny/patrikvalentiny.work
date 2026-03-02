import React, { useState } from 'react'

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string
    required?: boolean
    error?: string
    hint?: React.ReactNode
    tooltip?: string
}

export const FormInput: React.FC<FormInputProps> = ({
    label, required = false, error, hint, tooltip, className, id, name, value, defaultValue, onChange, ...props
}) => {
    const inputId = id || name || label.toLowerCase().replace(/\s+/g, '-');

    const [isFilled, setIsFilled] = useState(() => {
        const initial = value ?? defaultValue;
        return initial !== undefined && initial !== '';
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsFilled(e.target.value !== '');
        onChange?.(e);
    };

    const filled = value !== undefined ? value !== '' : isFilled;

    return (
        <div className="form-control w-full pt-2">
            <label htmlFor={inputId} className="label pb-1">
                <span className="label-text text-base font-medium flex items-center gap-2">
                    {label}
                    {required && !filled
                        ? <span className="badge badge-warning badge-sm text-xs font-normal">Required</span>
                        : !required && <span className="badge badge-ghost badge-sm text-xs font-normal opacity-60">Optional</span>
                    }
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
                value={value}
                defaultValue={defaultValue}
                onChange={handleChange}
                {...props}
                className={`input input-bordered w-full ${error ? 'input-error' : ''} ${className || ''}`}
            />
            {(error || hint) && (
                <div className="label">
                    {error
                        ? <span className="label-text-alt text-error text-pretty">{error}</span>
                        : <span className="label-text-alt text-base-content/60 text-pretty">{hint}</span>
                    }
                </div>
            )}
        </div>
    )
}
