import { HolidayRequestForm } from './components/HolidayRequestForm'
import { useHolidayRequestForm } from './hooks/useHolidayRequestForm'

export default function SuHolidaysApp() {
    const { formData, errors, handleChange, isFormValid } = useHolidayRequestForm()

    return (
        <div className="min-h-screen bg-base-200 font-sans">
            <main className="py-8 px-4 lg:px-8">
                <div className="max-w-3xl mx-auto space-y-8">
                    <div className="text-center space-y-2">
                        <h1 className="text-3xl font-bold">SU Holiday Request Form Generator</h1>
                        <p className="text-base-content/70">Fill out the form below to generate a professional PDF holiday request for your employer.</p>
                    </div>

                    <HolidayRequestForm
                        formData={formData}
                        errors={errors}
                        onFormChange={handleChange}
                        isFormValid={isFormValid}
                    />

                    {/* SEO Content */}
                    <section className="prose prose-sm max-w-none mt-12 text-base-content/80 bg-base-100 p-6 rounded-lg shadow-sm">
                        <h2 className="text-xl font-bold mb-4">About the SU Holiday Request Form Generator</h2>
                        <p className="mb-4">
                            Fill in your details, download the PDF, get your employer to sign it, then upload the signed form at{' '}
                            <a href="https://www.su.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SU.dk</a>{' '}
                            and register the holiday period.
                        </p>
                        <p className="mb-4">
                            This free tool helps employees in Denmark easily generate a professional holiday request form (ferie formular) as a PDF document.
                            Whether you are applying for your regular vacation days, SU holiday, or other types of leave, this generator ensures your employer
                            receives all the necessary information in a standardized format.
                        </p>

                        <h3 className="text-lg font-semibold mb-2">How it works</h3>
                        <ul className="list-disc pl-5 mb-4 space-y-1">
                            <li>Fill in your employee details including your CPR number.</li>
                            <li>Provide your company's information and CVR number.</li>
                            <li>Select your desired holiday dates and specify the number of working days.</li>
                            <li>Download the generated PDF and send it to your employer or HR department.</li>
                        </ul>

                        <h3 className="text-lg font-semibold mb-2 mt-6">How to apply for SU holidays?</h3>
                        <p className="mb-4">
                            If you have failed to work the required number of hours per month, you can use <strong>SU holiday</strong>. SU gives you the option to have <strong>6 weeks</strong> when the state does not check your working hours. However, before you can apply for a holiday you need to work for at least <strong>3 months in a row</strong>.
                        </p>
                        <p className="mb-4">
                            When that condition is met, you can divide these 6 weeks to your liking. You can also submit the SU holiday <strong>retrospectively</strong> for past periods, up to a few months prior.
                        </p>

                        <h3 className="text-lg font-semibold mb-2 mt-6">How to submit the form</h3>
                        <p className="mb-4">
                            Once you have generated and downloaded the PDF form using this tool, have your employer sign and stamp it. After the form is finalised, you must upload it through{' '}
                            <a href="https://www.su.dk" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">SU.dk</a>{' '}
                            and fill out the period you are taking your holiday.
                        </p>

                        <p>
                            <strong>Privacy first:</strong> All data entered into this form is processed locally in your web browser. We do not store or transmit your personal information to any servers.
                        </p>
                    </section>

                    {/* Footer */}
                    <footer className="footer footer-center p-4 text-base-content/50">
                        <aside>
                            <p>Your data is stored locally in your browser and is never sent to any server.</p>
                            <p>Made with 🧡 by @patrikvalentiny</p>
                            <p>All rights reserved @{new Date().getFullYear()}</p>
                        </aside>
                    </footer>
                </div>
            </main>
        </div>
    )
}
