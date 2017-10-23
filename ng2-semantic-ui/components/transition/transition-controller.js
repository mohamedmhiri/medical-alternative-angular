import { TransitionDirection } from './transition';
var TransitionController = (function () {
    /**
     * @param {?=} isInitiallyVisible
     * @param {?=} display
     */
    function TransitionController(isInitiallyVisible, display) {
        if (isInitiallyVisible === void 0) { isInitiallyVisible = true; }
        if (display === void 0) { display = "block"; }
        // isInitiallyVisible sets whether the element starts out visible.
        this._isVisible = isInitiallyVisible;
        this._isHidden = !this._isVisible;
        this._display = display;
        this._queue = [];
        this._isAnimating = false;
    }
    Object.defineProperty(TransitionController.prototype, "_isReady", {
        /**
         * @return {?}
         */
        get: function () {
            return this._renderer != null && this._element != null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "isAnimating", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isAnimating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "isVisible", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isVisible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "isHidden", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isHidden;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "_queueFirst", {
        /**
         * @return {?}
         */
        get: function () {
            return this._queue[0];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TransitionController.prototype, "_queueLast", {
        /**
         * @return {?}
         */
        get: function () {
            return this._queue[this._queue.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} renderer
     * @return {?}
     */
    TransitionController.prototype.registerRenderer = function (renderer) {
        this._renderer = renderer;
        this.performTransition();
    };
    /**
     * @param {?} element
     * @return {?}
     */
    TransitionController.prototype.registerElement = function (element) {
        this._element = element;
        this.performTransition();
    };
    /**
     * @param {?} changeDetector
     * @return {?}
     */
    TransitionController.prototype.registerChangeDetector = function (changeDetector) {
        this._changeDetector = changeDetector;
        this.performTransition();
    };
    /**
     * @param {?} transition
     * @return {?}
     */
    TransitionController.prototype.animate = function (transition) {
        // Test if transition is one of the list that doesn't change the visible state.
        // Should these eventually become classes?
        var /** @type {?} */ isDirectionless = ["jiggle", "flash", "shake", "pulse", "tada", "bounce"].indexOf(transition.type) != -1;
        if (isDirectionless) {
            transition.direction = TransitionDirection.Static;
        }
        else if (transition.direction == null || transition.direction == TransitionDirection.Either) {
            // Set the direction to the opposite of the current visible state automatically if not set, or set to either direction.
            transition.direction = this._isVisible ? TransitionDirection.Out : TransitionDirection.In;
            if (this._queueLast) {
                // If there is an transition in the queue already, set the direction to the opposite of the direction of that transition.
                transition.direction = this._queueLast.direction == TransitionDirection.In ? TransitionDirection.Out : TransitionDirection.In;
            }
        }
        // Store the transition in the queue before attempting to perform it.
        this._queue.push(transition);
        this.performTransition();
    };
    /**
     * @return {?}
     */
    TransitionController.prototype.performTransition = function () {
        var _this = this;
        if (!this._isReady || this._isAnimating || !this._queueFirst) {
            // Don't transition until we are ready, or if we are animating, or if there aren't any transitions in the queue.
            return;
        }
        this._isAnimating = true;
        var /** @type {?} */ transition = this._queueFirst;
        // Set the Semantic UI classes for transitioning.
        transition.classes.forEach(function (c) { return _this._renderer.setElementClass(_this._element, c, true); });
        this._renderer.setElementClass(this._element, "animating", true);
        this._renderer.setElementClass(this._element, transition.directionClass, true);
        // Set the Semantic UI styles for transitioning.
        this._renderer.setElementStyle(this._element, "animationDuration", transition.duration + "ms");
        this._renderer.setElementStyle(this._element, "display", this._display);
        if (transition.direction == TransitionDirection.In) {
            // Unset hidden if we are transitioning in.
            this._isHidden = false;
        }
        // Wait the length of the animation before calling the complete callback.
        this._animationTimeout = window.setTimeout(function () { return _this.finishTransition(transition); }, transition.duration);
    };
    /**
     * @param {?} transition
     * @return {?}
     */
    TransitionController.prototype.finishTransition = function (transition) {
        var _this = this;
        // Unset the Semantic UI classes & styles for transitioning.
        transition.classes.forEach(function (c) { return _this._renderer.setElementClass(_this._element, c, false); });
        this._renderer.setElementClass(this._element, "animating", false);
        this._renderer.setElementClass(this._element, transition.directionClass, false);
        this._renderer.setElementStyle(this._element, "animationDuration", null);
        this._renderer.setElementStyle(this._element, "display", null);
        if (transition.direction == TransitionDirection.In) {
            // If we have just animated in, we are now visible.
            this._isVisible = true;
        }
        else if (transition.direction == TransitionDirection.Out) {
            // If we have transitioned out, we should be invisible and hidden.
            this._isVisible = false;
            this._isHidden = true;
        }
        if (transition.onComplete) {
            // Call the user-defined transition callback.
            transition.onComplete();
        }
        // Delete the transition from the queue.
        this._queue.shift();
        this._isAnimating = false;
        this._changeDetector.markForCheck();
        // Immediately attempt to perform another transition.
        this.performTransition();
    };
    /**
     * @param {?=} transition
     * @return {?}
     */
    TransitionController.prototype.stop = function (transition) {
        if (transition === void 0) { transition = this._queueFirst; }
        if (!transition || !this._isAnimating) {
            return;
        }
        clearTimeout(this._animationTimeout);
        this.finishTransition(transition);
    };
    /**
     * @return {?}
     */
    TransitionController.prototype.stopAll = function () {
        this.clearQueue();
        this.stop();
    };
    /**
     * @return {?}
     */
    TransitionController.prototype.clearQueue = function () {
        if (this.isAnimating) {
            this._queue = [this._queueFirst];
            return;
        }
        this._queue = [];
    };
    return TransitionController;
}());
export { TransitionController };
function TransitionController_tsickle_Closure_declarations() {
    /** @type {?} */
    TransitionController.prototype._renderer;
    /** @type {?} */
    TransitionController.prototype._element;
    /** @type {?} */
    TransitionController.prototype._changeDetector;
    /** @type {?} */
    TransitionController.prototype._display;
    /** @type {?} */
    TransitionController.prototype._queue;
    /** @type {?} */
    TransitionController.prototype._isAnimating;
    /** @type {?} */
    TransitionController.prototype._isVisible;
    /** @type {?} */
    TransitionController.prototype._isHidden;
    /** @type {?} */
    TransitionController.prototype._animationTimeout;
}
//# sourceMappingURL=transition-controller.js.map