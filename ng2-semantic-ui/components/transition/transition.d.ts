import { Renderer, ElementRef, ChangeDetectorRef } from '@angular/core';
import { TransitionController } from './transition-controller';
export declare enum TransitionDirection {
    In = 0,
    Out = 1,
    Either = 2,
    Static = 3,
}
export declare class Transition {
    readonly type: string;
    readonly duration: number;
    direction: TransitionDirection;
    readonly directionClass: string;
    readonly classes: string[];
    onComplete: () => void;
    constructor(name: string, duration?: number, direction?: TransitionDirection, onComplete?: (() => void));
}
export declare class SuiTransition {
    private _renderer;
    private _element;
    private _changeDetector;
    private _controller;
    private suiTransition;
    transitionClass: boolean;
    readonly isVisible: boolean;
    readonly isHidden: boolean;
    constructor(_renderer: Renderer, _element: ElementRef, _changeDetector: ChangeDetectorRef);
    setTransitionController(transitionController: TransitionController): void;
}
