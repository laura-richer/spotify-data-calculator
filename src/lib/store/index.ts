import { writable } from 'svelte/store';

export const store = writable({
	calculatorType: '',
	audioQuality: 0,
	result: '',
	resultTitle: ''
});

export const setCalculatorType = (type: string): void => {
	store.update((storeValue) => ({ ...storeValue, calculatorType: type }));
};

export const setAudioQuality = (quality: number): void => {
	store.update((storeValue) => ({ ...storeValue, audioQuality: quality }));
};

export const setResult = (value: string): void => {
	store.update((storeValue) => ({ ...storeValue, result: value }));
};

export const setResultTitle = (value: string): void => {
	store.update((storeValue) => ({ ...storeValue, resultTitle: value }));
};

export const resetCalculator = (): void => {
	setCalculatorType('');
	setAudioQuality(0);
	setResult('');
	setResultTitle('');
};

export const resetResult = (): void => {
	setResult('');
	setResultTitle('');
};
