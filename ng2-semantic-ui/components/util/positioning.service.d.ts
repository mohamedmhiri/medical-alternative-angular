/// <reference types="popper.js" />
import { ElementRef } from '@angular/core';
import Popper from "popper.js";
export declare type PositioningPlacement = "inherit" | "top-start" | "top" | "top-end" | "left-start" | "left" | "left-end" | "bottom-start" | "bottom" | "bottom-end" | "right-start" | "right" | "right-end";
export declare const PositioningPlacement: {
    Inherit: PositioningPlacement;
    TopLeft: PositioningPlacement;
    TopCenter: PositioningPlacement;
    TopRight: PositioningPlacement;
    LeftTop: PositioningPlacement;
    LeftCenter: PositioningPlacement;
    LeftBottom: PositioningPlacement;
    BottomLeft: PositioningPlacement;
    BottomCenter: PositioningPlacement;
    BottomRight: PositioningPlacement;
    RightTop: PositioningPlacement;
    RightCenter: PositioningPlacement;
    RightBottom: PositioningPlacement;
};
export interface IPositionBoundingBox {
    width: number;
    height: number;
    top: number;
    left: number;
    bottom: number;
    right: number;
}
export declare class PositioningService {
    readonly anchor: ElementRef;
    readonly subject: ElementRef;
    private _popper;
    private _popperState;
    placement: PositioningPlacement;
    readonly state: Popper.Data;
    constructor(anchor: ElementRef, subject: ElementRef, placement: PositioningPlacement, arrowSelector?: string);
    update(): void;
}
