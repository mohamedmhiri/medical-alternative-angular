import { ActionReducer, Action } from '@ngrx/store';

export const LOGGINGIN = 'LOGGINGIN';
export const LOGGINGOUT = 'LOGGINGOUT';
export const RESET = 'RESET';

export function authReducer(state: boolean = false, action: Action) {
	switch (action.type) {
		case LOGGINGIN:
			return state = false;

		case LOGGINGOUT:
			return state = true;

		case RESET:
			return state = false;

		default:
			return state;
	}
}