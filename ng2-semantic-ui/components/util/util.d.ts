export declare enum KeyCode {
    Left = 37,
    Up = 38,
    Right = 39,
    Down = 40,
    Escape = 27,
    Enter = 13,
    Space = 32,
    Backspace = 8,
}
export declare type TemplateRefContext<T> = {
    $implicit: T;
};
export declare function deepValue<T, U>(object: T, path: string): U;
export declare function readValue<T, U>(object: T, field: string): U;
export interface AugmentedElement extends Element {
    closest(selector: string): AugmentedElement;
}
export declare class HandledMouseEvent extends MouseEvent {
    eventHandled: boolean;
}
export declare class HandledKeyboardEvent extends KeyboardEvent {
    eventHandled: boolean;
}
