import {
    ActionReducer,
    ActionReducerMap,
    createFeatureSelector,
    createSelector,
    MetaReducer,
    Action
} from '@ngrx/store';

import { environment } from '../../../environments/environment';

import * as auth from './auth';
import * as notify from './notify';
import * as profile from './profile';
import * as menu from './menu';

export interface AppState {
    auth: auth.AuthState;
    notify: notify.NotifyState;
    profile: profile.ProfileState;
    menu: menu.MenuState;
}

export const reducers: ActionReducerMap<AppState> = {
    auth: auth.authReducer,
    notify: notify.notifyReducer,
    profile: profile.profileReducer,
    menu: menu.menuReducer
};

// console.log all actions
export function logger(
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> {
    return function (state: AppState, action: any): AppState {
        if (
            // !action.silent &&
            environment.log.store
        ) {
            console.log('\nstate', state);
            console.log('+ action', action);

        }

        return reducer(state, action);
    };
}

export const metaReducers: MetaReducer<AppState>[] = !environment.production
    ? [logger]
    : [];

export const effects = [
    auth.AuthEffects,
    notify.NotifyEffects,
    profile.ProfileEffects,
    menu.MenuEffects
];

export const services = [notify.NotifyService];
