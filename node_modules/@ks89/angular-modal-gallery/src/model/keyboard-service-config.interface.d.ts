/**
 * Interface `KeyboardServiceConfig` to pass data to `KeyboardService`
 * adding shortcuts based on https://craig.is/killing/mice
 */
export interface KeyboardServiceConfig {
    shortcuts: Array<string> | string;
    disableSsrWorkaround?: boolean;
}
