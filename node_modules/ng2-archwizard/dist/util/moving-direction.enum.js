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
export var MovingDirection;
(function (MovingDirection) {
    /**
     * A forward step transition
     */
    MovingDirection[MovingDirection["Forwards"] = 0] = "Forwards";
    /**
     * A backward step transition
     */
    MovingDirection[MovingDirection["Backwards"] = 1] = "Backwards";
    /**
     * No step transition was done
     */
    MovingDirection[MovingDirection["Stay"] = 2] = "Stay";
})(MovingDirection || (MovingDirection = {}));
//# sourceMappingURL=moving-direction.enum.js.map