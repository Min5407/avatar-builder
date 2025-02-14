export type ObjectValuesType<T extends Record<string, unknown>> = T[keyof T];
