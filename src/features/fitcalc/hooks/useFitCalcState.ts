import localforage from "localforage";
import { useEffect, useState } from "react";
import { defaultFitCalcState, type FitCalcState } from "../types";

const storageKey = "fitcalc-state-v1";

function mergeState(savedState: Partial<FitCalcState> | null | undefined): FitCalcState {
    if (!savedState) {
        return defaultFitCalcState;
    }

    return {
        ...defaultFitCalcState,
        ...savedState,
        bmi: {
            ...defaultFitCalcState.bmi,
            ...savedState.bmi,
        },
        bmr: {
            ...defaultFitCalcState.bmr,
            ...savedState.bmr,
        },
        oneRepMax: {
            ...defaultFitCalcState.oneRepMax,
            ...savedState.oneRepMax,
        },
        targetWeight: {
            ...defaultFitCalcState.targetWeight,
            ...savedState.targetWeight,
        },
    };
}

export function useFitCalcState() {
    const [state, setState] = useState<FitCalcState>(defaultFitCalcState);
    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        let cancelled = false;

        void localforage.getItem<Partial<FitCalcState>>(storageKey)
            .then((savedState) => {
                if (cancelled) {
                    return;
                }

                setState(mergeState(savedState));
                setIsReady(true);
            })
            .catch(() => {
                if (!cancelled) {
                    setIsReady(true);
                }
            });

        return () => {
            cancelled = true;
        };
    }, []);

    useEffect(() => {
        if (!isReady) {
            return;
        }

        void localforage.setItem(storageKey, state);
    }, [isReady, state]);

    const reset = () => {
        setState(defaultFitCalcState);
        void localforage.removeItem(storageKey);
    };

    return {
        state,
        setState,
        reset,
        isReady,
    };
}
