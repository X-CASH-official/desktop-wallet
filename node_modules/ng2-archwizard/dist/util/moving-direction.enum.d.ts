/**
 * The direction in which a step transition was made
 *
 * @author Marc Arndt
 */
/**
 * This enum contains the different possible moving directions in which a wizard can be traversed
 *
 * @author Marc Arndt
 */
export declare enum MovingDirection {
    /**
     * A forward step transition
     */
    Forwards = 0,
    /**
     * A backward step transition
     */
    Backwards = 1,
    /**
     * No step transition was done
     */
    Stay = 2,
}
