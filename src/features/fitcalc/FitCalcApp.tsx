import { useMemo, type ReactNode } from "react";
import { useFitCalcState } from "./hooks/useFitCalcState";
import type { ActivityLevel, CalculatorKey, FitCalcState, Sex } from "./types";
import {
    activityLabels,
    activityMultiplier,
    bmiCategory,
    calculateBmi,
    calculateBmr,
    calculateOneRepMax,
    calculateTargetWeight,
    cmToFeetInches,
    feetAndInchesToCm,
    formatNumber,
    getDisplayWeight,
    kgToLbs,
    lbsToKg,
} from "./utils";

function toDisplayValue(value: number, decimals = 0) {
    return Number.isFinite(value) ? String(Number(value.toFixed(decimals))) : "";
}

function parseNumber(value: string) {
    if (value.trim() === "") {
        return null;
    }

    const parsed = Number(value);
    return Number.isFinite(parsed) ? parsed : null;
}

type NumberFieldProps = {
    label: string;
    value: string;
    onChange: (value: string) => void;
    suffix?: string;
    min?: number;
    max?: number;
    step?: number;
    helper?: string;
};

function NumberField({ label, value, onChange, suffix, min, max, step = 1, helper }: NumberFieldProps) {
    return (
        <label className="form-control gap-2">
            <div className="label px-0 py-0">
                <span className="label-text">{label}</span>
                {suffix ? <span className="label-text-alt">{suffix}</span> : null}
            </div>
            <input
                type="number"
                inputMode="decimal"
                className="input w-full"
                value={value}
                onChange={(event) => onChange(event.target.value)}
                min={min}
                max={max}
                step={step}
            />
            {helper ? <p className="text-sm opacity-70">{helper}</p> : null}
        </label>
    );
}

type SelectFieldProps<T extends string> = {
    label: string;
    value: T;
    onChange: (value: T) => void;
    options: Array<{ value: T; label: string }>;
};

function SelectField<T extends string>({ label, value, onChange, options }: SelectFieldProps<T>) {
    return (
        <label className="form-control gap-2">
            <div className="label px-0 py-0">
                <span className="label-text">{label}</span>
            </div>
            <select
                className="select w-full"
                value={value}
                onChange={(event) => onChange(event.target.value as T)}
            >
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </label>
    );
}

function CalculatorTabs({
    activeCalculator,
    onChange,
}: {
    activeCalculator: CalculatorKey;
    onChange: (nextCalculator: CalculatorKey) => void;
}) {
    const calculators: Array<{ key: CalculatorKey; label: string }> = [
        { key: "bmi", label: "BMI" },
        { key: "bmr", label: "BMR" },
        { key: "oneRepMax", label: "1RM" },
        { key: "targetWeight", label: "Target weight" },
    ];

    return (
        <div role="tablist" className="tabs tabs-box w-full">
            {calculators.map((calculator) => (
                <button
                    key={calculator.key}
                    role="tab"
                    type="button"
                    className={`tab flex-1 ${activeCalculator === calculator.key ? "tab-active" : ""}`}
                    onClick={() => onChange(calculator.key)}
                >
                    {calculator.label}
                </button>
            ))}
        </div>
    );
}

function LoadingState() {
    return (
        <div className="grid min-h-screen place-items-center p-4">
            <div className="space-y-3 text-center">
                <span className="loading loading-spinner loading-lg" />
                <p>Loading FitCalc</p>
                <p className="opacity-70">Restoring your saved values and unit preference.</p>
            </div>
        </div>
    );
}

export default function FitCalcApp() {
    const { state, setState, reset, isReady } = useFitCalcState();

    const bmiResult = useMemo(() => {
        const bmi = calculateBmi(state.bmi.weightKg, state.bmi.heightCm);

        if (!bmi) {
            return null;
        }

        return {
            bmi,
            category: bmiCategory(bmi),
        };
    }, [state.bmi.heightCm, state.bmi.weightKg]);

    const bmrResult = useMemo(() => {
        const basal = calculateBmr(state.bmr.weightKg, state.bmr.heightCm, state.bmr.age, state.bmr.sex);

        if (!basal) {
            return null;
        }

        return {
            basal,
            maintenance: basal * activityMultiplier(state.bmr.activityLevel),
        };
    }, [state.bmr.activityLevel, state.bmr.age, state.bmr.heightCm, state.bmr.sex, state.bmr.weightKg]);

    const oneRepMaxResult = useMemo(() => {
        const oneRepMax = calculateOneRepMax(state.oneRepMax.liftWeightKg, state.oneRepMax.reps);

        if (!oneRepMax) {
            return null;
        }

        return {
            oneRepMax,
            repTargets: [3, 5, 8, 10].map((reps) => ({
                reps,
                estimatedWeight: oneRepMax / (1 + reps / 30),
            })),
        };
    }, [state.oneRepMax.liftWeightKg, state.oneRepMax.reps]);

    const targetWeightResult = useMemo(() => {
        const targetWeight = calculateTargetWeight(
            state.targetWeight.currentWeightKg,
            state.targetWeight.currentBodyFat,
            state.targetWeight.targetBodyFat,
        );

        if (!targetWeight) {
            return null;
        }

        return {
            targetWeight,
            delta: targetWeight - state.targetWeight.currentWeightKg,
            leanMass: state.targetWeight.currentWeightKg * (1 - state.targetWeight.currentBodyFat / 100),
        };
    }, [state.targetWeight.currentBodyFat, state.targetWeight.currentWeightKg, state.targetWeight.targetBodyFat]);

    const bmiHeightFeetInches = cmToFeetInches(state.bmi.heightCm);
    const bmrHeightFeetInches = cmToFeetInches(state.bmr.heightCm);

    const updateMetricHeight = (calculator: "bmi" | "bmr") => (value: string) => {
        const nextHeightCm = parseNumber(value);

        if (nextHeightCm === null) {
            return;
        }

        setState((previous) => ({
            ...previous,
            [calculator]: {
                ...previous[calculator],
                heightCm: nextHeightCm,
            },
        }));
    };

    const updateImperialHeight = (calculator: "bmi" | "bmr", field: "feet" | "inches") => (value: string) => {
        const nextValue = parseNumber(value);

        if (nextValue === null) {
            return;
        }

        setState((previous) => {
            const converted = cmToFeetInches(previous[calculator].heightCm);
            const feet = field === "feet" ? nextValue : converted.feet;
            const inches = field === "inches" ? nextValue : converted.inches;

            return {
                ...previous,
                [calculator]: {
                    ...previous[calculator],
                    heightCm: feetAndInchesToCm(feet, inches),
                },
            };
        });
    };

    const updateWeightKg = (calculator: "bmi" | "bmr") => (value: string) => {
        const nextValue = parseNumber(value);

        if (nextValue === null) {
            return;
        }

        setState((previous) => ({
            ...previous,
            [calculator]: {
                ...previous[calculator],
                weightKg: previous.unitSystem === "metric" ? nextValue : lbsToKg(nextValue),
            },
        }));
    };

    const updateLiftWeightKg = (value: string) => {
        const nextValue = parseNumber(value);

        if (nextValue === null) {
            return;
        }

        setState((previous) => ({
            ...previous,
            oneRepMax: {
                ...previous.oneRepMax,
                liftWeightKg: previous.unitSystem === "metric" ? nextValue : lbsToKg(nextValue),
            },
        }));
    };

    const updateTargetWeightKg = (value: string) => {
        const nextValue = parseNumber(value);

        if (nextValue === null) {
            return;
        }

        setState((previous) => ({
            ...previous,
            targetWeight: {
                ...previous.targetWeight,
                currentWeightKg: previous.unitSystem === "metric" ? nextValue : lbsToKg(nextValue),
            },
        }));
    };

    const updateAge = (value: string) => {
        const nextValue = parseNumber(value);

        if (nextValue === null) {
            return;
        }

        setState((previous) => ({
            ...previous,
            bmr: {
                ...previous.bmr,
                age: nextValue,
            },
        }));
    };

    const updatePercentage = (field: "currentBodyFat" | "targetBodyFat") => (value: string) => {
        const nextValue = parseNumber(value);

        if (nextValue === null) {
            return;
        }

        setState((previous) => ({
            ...previous,
            targetWeight: {
                ...previous.targetWeight,
                [field]: nextValue,
            },
        }));
    };

    const activePanels: Record<CalculatorKey, ReactNode> = {
        bmi: (
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <section className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {state.unitSystem === "metric" ? (
                            <NumberField
                                label="Height"
                                value={toDisplayValue(state.bmi.heightCm, 1)}
                                onChange={updateMetricHeight("bmi")}
                                suffix="cm"
                                min={50}
                                max={260}
                                step={0.1}
                                helper="Measured without shoes."
                            />
                        ) : (
                            <div className="grid gap-4 sm:grid-cols-2 sm:col-span-2">
                                <NumberField
                                    label="Height"
                                    value={toDisplayValue(bmiHeightFeetInches.feet, 0)}
                                    onChange={updateImperialHeight("bmi", "feet")}
                                    suffix="ft"
                                    min={1}
                                    max={8}
                                />
                                <NumberField
                                    label="Inches"
                                    value={toDisplayValue(bmiHeightFeetInches.inches, 1)}
                                    onChange={updateImperialHeight("bmi", "inches")}
                                    suffix="in"
                                    min={0}
                                    max={11.9}
                                    step={0.1}
                                    helper="Use both height fields together."
                                />
                            </div>
                        )}

                        <NumberField
                            label="Weight"
                            value={toDisplayValue(getDisplayWeight(state.unitSystem, state.bmi.weightKg), 1)}
                            onChange={updateWeightKg("bmi")}
                            suffix={state.unitSystem === "metric" ? "kg" : "lb"}
                            min={20}
                            max={400}
                            step={0.1}
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="font-medium">What this shows</p>
                        <p className="text-sm opacity-70">
                            BMI is a quick screening tool. It does not distinguish between fat and muscle, so treat the number as a starting point rather than a diagnosis.
                        </p>
                    </div>
                </section>

                <section className="card card-border">
                    <div className="card-body gap-4">
                        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                            <p className="text-sm opacity-70">Result</p>
                            <h3 className="text-3xl font-semibold">{bmiResult ? formatNumber(bmiResult.bmi, 1) : "—"}</h3>
                            <p className="opacity-70">Body mass index</p>
                        </div>

                        <div className="stats stats-vertical lg:stats-horizontal">
                            <div className="stat">
                                <div className="stat-title">Category</div>
                                <div className="stat-value text-lg">{bmiResult ? bmiResult.category : "—"}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">Weight</div>
                                <div className="stat-value text-lg">
                                    {state.unitSystem === "metric"
                                        ? `${formatNumber(state.bmi.weightKg, 1)} kg`
                                        : `${formatNumber(kgToLbs(state.bmi.weightKg), 1)} lb`}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        ),
        bmr: (
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <section className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        {state.unitSystem === "metric" ? (
                            <NumberField
                                label="Height"
                                value={toDisplayValue(state.bmr.heightCm, 1)}
                                onChange={updateMetricHeight("bmr")}
                                suffix="cm"
                                min={50}
                                max={260}
                                step={0.1}
                            />
                        ) : (
                            <div className="grid gap-4 sm:grid-cols-2 sm:col-span-2">
                                <NumberField
                                    label="Height"
                                    value={toDisplayValue(bmrHeightFeetInches.feet, 0)}
                                    onChange={updateImperialHeight("bmr", "feet")}
                                    suffix="ft"
                                    min={1}
                                    max={8}
                                />
                                <NumberField
                                    label="Inches"
                                    value={toDisplayValue(bmrHeightFeetInches.inches, 1)}
                                    onChange={updateImperialHeight("bmr", "inches")}
                                    suffix="in"
                                    min={0}
                                    max={11.9}
                                    step={0.1}
                                />
                            </div>
                        )}

                        <NumberField
                            label="Weight"
                            value={toDisplayValue(getDisplayWeight(state.unitSystem, state.bmr.weightKg), 1)}
                            onChange={updateWeightKg("bmr")}
                            suffix={state.unitSystem === "metric" ? "kg" : "lb"}
                            min={20}
                            max={400}
                            step={0.1}
                        />
                        <NumberField
                            label="Age"
                            value={toDisplayValue(state.bmr.age, 0)}
                            onChange={updateAge}
                            suffix="years"
                            min={10}
                            max={120}
                        />
                        <SelectField<Sex>
                            label="Sex"
                            value={state.bmr.sex}
                            onChange={(value) => setState((previous) => ({ ...previous, bmr: { ...previous.bmr, sex: value } }))}
                            options={[
                                { value: "male", label: "Male" },
                                { value: "female", label: "Female" },
                            ]}
                        />
                    </div>

                    <SelectField<ActivityLevel>
                        label="Activity level"
                        value={state.bmr.activityLevel}
                        onChange={(value) => setState((previous) => ({ ...previous, bmr: { ...previous.bmr, activityLevel: value } }))}
                        options={Object.entries(activityLabels).map(([value, label]) => ({
                            value: value as ActivityLevel,
                            label,
                        }))}
                    />
                </section>

                <section className="card card-border">
                    <div className="card-body gap-4">
                        <div>
                            <p className="text-sm opacity-70">Result</p>
                            <h3 className="text-3xl font-semibold">{bmrResult ? `${formatNumber(bmrResult.basal, 0)} kcal` : "—"}</h3>
                            <p className="opacity-70">Basal metabolic rate</p>
                        </div>

                        <div className="stats stats-vertical lg:stats-horizontal">
                            <div className="stat">
                                <div className="stat-title">Maintenance</div>
                                <div className="stat-value text-lg">{bmrResult ? `${formatNumber(bmrResult.maintenance, 0)} kcal` : "—"}</div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">Multiplier</div>
                                <div className="stat-value text-lg">{formatNumber(activityMultiplier(state.bmr.activityLevel), 2)}x</div>
                            </div>
                        </div>

                        <div className="text-sm opacity-70">
                            Mifflin-St Jeor formula with an activity multiplier for a practical maintenance estimate.
                        </div>
                    </div>
                </section>
            </div>
        ),
        oneRepMax: (
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <section className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <NumberField
                            label="Weight lifted"
                            value={toDisplayValue(getDisplayWeight(state.unitSystem, state.oneRepMax.liftWeightKg), 1)}
                            onChange={updateLiftWeightKg}
                            suffix={state.unitSystem === "metric" ? "kg" : "lb"}
                            min={1}
                            max={1000}
                            step={0.1}
                        />
                        <NumberField
                            label="Reps completed"
                            value={toDisplayValue(state.oneRepMax.reps, 0)}
                            onChange={(value) => {
                                const nextValue = parseNumber(value);

                                if (nextValue === null) {
                                    return;
                                }

                                setState((previous) => ({
                                    ...previous,
                                    oneRepMax: {
                                        ...previous.oneRepMax,
                                        reps: nextValue,
                                    },
                                }));
                            }}
                            suffix="reps"
                            min={1}
                            max={20}
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="font-medium">How to use it</p>
                        <p className="text-sm opacity-70">
                            Use a set taken close to failure with clean form. The estimate works best for compound lifts and rep ranges roughly below 12.
                        </p>
                    </div>
                </section>

                <section className="card card-border">
                    <div className="card-body gap-4">
                        <div>
                            <p className="text-sm opacity-70">Result</p>
                            <h3 className="text-3xl font-semibold">
                                {oneRepMaxResult ? `${formatNumber(oneRepMaxResult.oneRepMax, 1)} ${state.unitSystem === "metric" ? "kg" : "lb"}` : "—"}
                            </h3>
                            <p className="opacity-70">Estimated one-rep max</p>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Reps</th>
                                        <th>Estimated working weight</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {(oneRepMaxResult?.repTargets ?? []).map((target) => (
                                        <tr key={target.reps}>
                                            <td>{target.reps}</td>
                                            <td>{formatNumber(target.estimatedWeight, 1)} {state.unitSystem === "metric" ? "kg" : "lb"}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </section>
            </div>
        ),
        targetWeight: (
            <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
                <section className="space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                        <NumberField
                            label="Current weight"
                            value={toDisplayValue(getDisplayWeight(state.unitSystem, state.targetWeight.currentWeightKg), 1)}
                            onChange={updateTargetWeightKg}
                            suffix={state.unitSystem === "metric" ? "kg" : "lb"}
                            min={20}
                            max={400}
                            step={0.1}
                        />
                        <NumberField
                            label="Current body fat"
                            value={toDisplayValue(state.targetWeight.currentBodyFat, 1)}
                            onChange={updatePercentage("currentBodyFat")}
                            suffix="%"
                            min={1}
                            max={60}
                            step={0.1}
                        />
                        <NumberField
                            label="Target body fat"
                            value={toDisplayValue(state.targetWeight.targetBodyFat, 1)}
                            onChange={updatePercentage("targetBodyFat")}
                            suffix="%"
                            min={1}
                            max={60}
                            step={0.1}
                        />
                    </div>

                    <div className="space-y-2">
                        <p className="font-medium">What this means</p>
                        <p className="text-sm opacity-70">
                            The calculator keeps lean mass constant and estimates the body weight needed to reach your target body fat percentage.
                        </p>
                    </div>
                </section>

                <section className="card card-border">
                    <div className="card-body gap-4">
                        <div>
                            <p className="text-sm opacity-70">Result</p>
                            <h3 className="text-3xl font-semibold">
                                {targetWeightResult ? `${formatNumber(targetWeightResult.targetWeight, 1)} ${state.unitSystem === "metric" ? "kg" : "lb"}` : "—"}
                            </h3>
                            <p className="opacity-70">Estimated target weight</p>
                        </div>

                        <div className="stats stats-vertical lg:stats-horizontal">
                            <div className="stat">
                                <div className="stat-title">Lean mass</div>
                                <div className="stat-value text-lg">
                                    {targetWeightResult ? `${formatNumber(targetWeightResult.leanMass, 1)} ${state.unitSystem === "metric" ? "kg" : "lb"}` : "—"}
                                </div>
                            </div>
                            <div className="stat">
                                <div className="stat-title">Delta</div>
                                <div className="stat-value text-lg">
                                    {targetWeightResult ? `${targetWeightResult.delta >= 0 ? "+" : ""}${formatNumber(targetWeightResult.delta, 1)} ${state.unitSystem === "metric" ? "kg" : "lb"}` : "—"}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        ),
    };

    const updateActiveCalculator = (activeCalculator: CalculatorKey) => {
        setState((previous) => ({
            ...previous,
            activeCalculator,
        }));
    };

    const updateUnitSystem = (unitSystem: "metric" | "imperial") => {
        setState((previous) => ({
            ...previous,
            unitSystem,
        }));
    };

    if (!isReady) {
        return <LoadingState />;
    }

    return (
        <main className="min-h-screen p-4 sm:p-6 lg:p-8">
            <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">

                <section className="space-y-4">
                    <CalculatorTabs activeCalculator={state.activeCalculator} onChange={updateActiveCalculator} />
                    <div className="card card-border">
                        <div className="card-body gap-6">
                            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                                <div>
                                    <p className="text-sm opacity-70">Calculator</p>
                                    <h2 className="text-2xl font-semibold">
                                        {state.activeCalculator === "bmi" ? "Body mass index" : state.activeCalculator === "bmr" ? "Basal metabolic rate" : state.activeCalculator === "oneRepMax" ? "One-rep max" : "Target weight planner"}
                                    </h2>
                                </div>

                                <div className="join join-horizontal self-start">
                                    <button
                                        type="button"
                                        className={`btn join-item ${state.unitSystem === "metric" ? "btn-primary" : "btn-ghost"}`}
                                        onClick={() => updateUnitSystem("metric")}
                                    >
                                        Metric
                                    </button>
                                    <button
                                        type="button"
                                        className={`btn join-item ${state.unitSystem === "imperial" ? "btn-primary" : "btn-ghost"}`}
                                        onClick={() => updateUnitSystem("imperial")}
                                    >
                                        Imperial
                                    </button>
                                </div>
                            </div>

                            {activePanels[state.activeCalculator]}
                        </div>
                    </div>
                </section>

                <section className="grid gap-4 md:grid-cols-4">
                    {[
                        {
                            title: "BMI",
                            value: bmiResult ? formatNumber(bmiResult.bmi, 1) : "—",
                            detail: bmiResult ? bmiResult.category : "Screening tool",
                        },
                        {
                            title: "BMR",
                            value: bmrResult ? `${formatNumber(bmrResult.basal, 0)} kcal` : "—",
                            detail: "Resting energy estimate",
                        },
                        {
                            title: "1RM",
                            value: oneRepMaxResult ? `${formatNumber(oneRepMaxResult.oneRepMax, 1)} ${state.unitSystem === "metric" ? "kg" : "lb"}` : "—",
                            detail: "Strength estimate",
                        },
                        {
                            title: "Target weight",
                            value: targetWeightResult ? `${formatNumber(targetWeightResult.targetWeight, 1)} ${state.unitSystem === "metric" ? "kg" : "lb"}` : "—",
                            detail: "Lean-mass based target",
                        },
                    ].map((item) => (
                        <div key={item.title} className="card card-border">
                            <div className="card-body gap-2 p-4">
                                <p className="text-sm opacity-70">{item.title}</p>
                                <p className="text-2xl font-semibold">{item.value}</p>
                                <p className="text-sm opacity-70">{item.detail}</p>
                            </div>
                        </div>
                    ))}
                </section>

                <footer className="pb-4 text-center text-sm opacity-70">
                    Stored locally with localforage. Numbers are estimates and not medical advice.
                </footer>
            </div>
        </main>
    );
}
