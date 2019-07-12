/**
 * Interface `Description` to change the description, either with a full custom
 * description or with a small and simple customization.
 * Also, you could change margins, background style and so on.
 */
export interface Description {
    strategy: DescriptionStrategy;
    customFullDescription?: string;
    imageText?: string;
    numberSeparator?: string;
    beforeTextDescription?: string;
    style?: DescriptionStyle;
}
/**
 * Enum `DescriptionStrategy` with keys and their relative key codes.
 */
export declare enum DescriptionStrategy {
    ALWAYS_HIDDEN = 1,
    ALWAYS_VISIBLE = 2,
    HIDE_IF_EMPTY = 3,
}
/**
 * Interface to change css properties.
 */
export interface DescriptionStyle {
    bgColor?: string;
    textColor?: string;
    width?: string;
    height?: string;
    position?: string;
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
    marginTop?: string;
    marginBottom?: string;
    marginRight?: string;
    marginLeft?: string;
}
