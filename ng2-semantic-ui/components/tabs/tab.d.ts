import { SuiTabHeader } from './tab-header';
import { SuiTabContent } from './tab-content';
export declare class Tab {
    id: string;
    header: SuiTabHeader;
    content: SuiTabContent;
    index: number;
    constructor(header: SuiTabHeader, content: SuiTabContent);
    isActive: boolean;
    readonly isDisabled: boolean;
}
