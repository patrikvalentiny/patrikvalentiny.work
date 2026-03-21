import type { ActivityLevel, Sex, UnitSystem } from "./types";

export const KG_PER_POUND = 0.45359237;
export const CM_PER_INCH = 2.54;

export const activityLabels: Record<ActivityLevel, string> = {
    sedentary: "Sedentary · little or no exercise",
    light: "Light · 1-3 training days/week",
    moderate: "Moderate · 3-5 training days/week",
    very: "Very active · 6-7 training days/week",
    extra: "Extra active · physical job plus training",
};

export const sexLabels: Record<Sex, string> = {
    male: "Male",
    female: "Female",
};

export function round(value: number, decimals = 1) {
    const factor = 10 ** decimals;
    return Math.round(value * factor) / factor;
}

export function formatNumber(value: number, decimals = 1) {
    return new Intl.NumberFormat("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
    }).format(value);
}

export function kgToLbs(value: number) {
    return value / KG_PER_POUND;
}

export function lbsToKg(value: number) {
    return value * KG_PER_POUND;
}

export function cmToFeetInches(cm: number) {
    const totalInches = cm / CM_PER_INCH;
    const feet = Math.floor(totalInches / 12);
    const inches = totalInches - feet * 12;

    return {
        feet,
        inches,
    };
}

export function feetAndInchesToCm(feet: number, inches: number) {
    return ((feet * 12) + inches) * CM_PER_INCH;
}

export function bmiCategory(bmi: number) {
    if (bmi < 18.5) {
        return "Underweight";
    }

    if (bmi < 25) {
        return "Healthy";
    }

    if (bmi < 30) {
        return "Overweight";
    }

    return "Obese";
}

export function calculateBmi(weightKg: number, heightCm: number) {
    if (weightKg <= 0 || heightCm <= 0) {
        return null;
    }

    return weightKg / ((heightCm / 100) ** 2);
}

export function calculateBmr(weightKg: number, heightCm: number, age: number, sex: Sex) {
    if (weightKg <= 0 || heightCm <= 0 || age <= 0) {
        return null;
    }

    const base = 10 * weightKg + 6.25 * heightCm - 5 * age;

    return sex === "male" ? base + 5 : base - 161;
}

export function activityMultiplier(level: ActivityLevel) {
    return {
        sedentary: 1.2,
        light: 1.375,
        moderate: 1.55,
        very: 1.725,
        extra: 1.9,
    }[level];
}

export function calculateOneRepMax(weightKg: number, reps: number) {
    if (weightKg <= 0 || reps <= 0) {
        return null;
    }

    return weightKg * (1 + reps / 30);
}

export function calculateTargetWeight(currentWeightKg: number, currentBodyFat: number, targetBodyFat: number) {
    if (currentWeightKg <= 0 || currentBodyFat <= 0 || currentBodyFat >= 100 || targetBodyFat <= 0 || targetBodyFat >= 100) {
        return null;
    }

    const leanMass = currentWeightKg * (1 - currentBodyFat / 100);
    return leanMass / (1 - targetBodyFat / 100);
}

export function getDisplayWeight(unitSystem: UnitSystem, weightKg: number) {
    return unitSystem === "metric" ? weightKg : kgToLbs(weightKg);
}

export function getDisplayHeight(unitSystem: UnitSystem, heightCm: number) {
    return unitSystem === "metric" ? heightCm : cmToFeetInches(heightCm);
}
