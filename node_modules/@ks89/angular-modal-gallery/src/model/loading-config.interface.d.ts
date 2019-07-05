/**
 * Interface `LoadingConfig` to configure loading icon.
 */
export interface LoadingConfig {
    enable: boolean;
    type: LoadingType;
}
/**
 * Enum `LoadingType` with a list of possible types.
 */
export declare enum LoadingType {
    STANDARD = 1,
    CIRCULAR = 2,
    BARS = 3,
    DOTS = 4,
    CUBE_FLIPPING = 5,
    CIRCLES = 6,
    EXPLOSING_SQUARES = 7,
}
