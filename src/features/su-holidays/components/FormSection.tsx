import React from 'react'

interface FormSectionProps {
    title: string
    children: React.ReactNode
    isValid?: boolean
}

export const FormSection: React.FC<FormSectionProps> = ({ title, children, isValid }) => {
    const titleClass =
        isValid === true ? 'text-success'
            : isValid === false ? 'text-error'
                : 'text-base-content'

    return (
        <section className={`shadow-sm rounded-lg p-4 ${isValid === false ? 'bg-error/10' : 'bg-base-100'}`}>
            <h2 className={`text-xl font-medium mb-2 ${titleClass}`}>{title}</h2>
            <div>{children}</div>
        </section>
    )
}
