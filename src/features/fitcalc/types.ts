export type UnitSystem = "metric" | "imperial";

export type CalculatorKey = "bmi" | "bmr" | "oneRepMax" | "targetWeight";

export type Sex = "male" | "female";

export type ActivityLevel =
    | "sedentary"
    | "light"
    | "moderate"
    | "very"
    | "extra";

export interface FitCalcState {
    activeCalculator: CalculatorKey;
    unitSystem: UnitSystem;
    bmi: {
        heightCm: number;
        weightKg: number;
    };
    bmr: {
        heightCm: number;
        weightKg: number;
        age: number;
        sex: Sex;
        activityLevel: ActivityLevel;
    };
    oneRepMax: {
        liftWeightKg: number;
        reps: number;
    };
    targetWeight: {
        currentWeightKg: number;
        currentBodyFat: number;
        targetBodyFat: number;
    };
}

export const defaultFitCalcState: FitCalcState = {
    activeCalculator: "bmi",
    unitSystem: "metric",
    bmi: {
        heightCm: 178,
        weightKg: 76,
    },
    bmr: {
        heightCm: 178,
        weightKg: 76,
        age: 32,
        sex: "male",
        activityLevel: "moderate",
    },
    oneRepMax: {
        liftWeightKg: 100,
        reps: 5,
    },
    targetWeight: {
        currentWeightKg: 76,
        currentBodyFat: 18,
        targetBodyFat: 12,
    },
};
