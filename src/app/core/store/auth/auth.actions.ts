import { Action } from '@ngrx/store';

export enum AuthActionTypes {
  AppInit = '[App] Init',
  AuthInit = '[Auth] Init',
  LoggedOnce = '[Auth] Logged Once',
  LoginAction = '[Auth] Login Action',
  LogoutAction = '[Auth] Logout Action',
  LoginRedirect = '[Auth] Login Redirect Action',
  SignupAction = '[Auth] Signup Action',
  ForgotPasswordAction = '[Auth] Forgot Password Action',
  ResetPasswordAction = '[Auth] Reset Password Action',
  ResetPasswordRequestAction = '[Auth] Reset Password Request Action',
  GoogleSign = '[Auth] Google Sign Action',
  FacebookSign = '[Auth] Facebook Sign Action',
  LinkedInSign = '[Auth] LinkedIn Sign Action',
  AuthFailure = '[Auth] Failure Action',
  AuthUserChange = '[Auth] User Change',
  AuthTokenPayload = '[Auth] Token Payload',
  NullToken = '[Auth] Null Token',
  TokenRestore = '[Auth] Token Restore',
  TokenRefresh = '[Auth] Token Refresh',
  TokenRefreshSuccess = '[Auth] Token Refresh Success'
}

export class AppInit implements Action {
  readonly type = AuthActionTypes.AppInit;
}

export class AuthInit implements Action {
  readonly type = AuthActionTypes.AuthInit;
}

export class LoggedOnce implements Action {
  readonly type = AuthActionTypes.LoggedOnce;
  constructor(readonly payload: boolean) { }
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.LoginAction;
  constructor(readonly payload: any) { }
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.LogoutAction;
}

export class ForgotPasswordAction implements Action {
  readonly type = AuthActionTypes.ForgotPasswordAction;
  constructor(readonly payload: any) { }
}


export class ResetPasswordAction implements Action {
  readonly type = AuthActionTypes.ResetPasswordAction;
  constructor(readonly payload: any) { }
}

export class ResetPasswordRequestAction implements Action {
  readonly type = AuthActionTypes.ResetPasswordRequestAction;
  constructor(readonly payload: any) { }
}

export class LoginRedirect implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
  constructor(readonly payload: any) { }
}

export class SignupAction implements Action {
  readonly type = AuthActionTypes.SignupAction;
  constructor(readonly payload: any) { }
}

export class GoogleSign implements Action {
  readonly type = AuthActionTypes.GoogleSign;
}

export class FacebookSign implements Action {
  readonly type = AuthActionTypes.FacebookSign;
}

export class LinkedInSign implements Action {
  readonly type = AuthActionTypes.LinkedInSign;
}

export class AuthFailure implements Action {
  readonly type = AuthActionTypes.AuthFailure;
  constructor(readonly payload: any) { }
}

export class AuthUserChange implements Action {
  readonly type = AuthActionTypes.AuthUserChange;
  // constructor(readonly payload: TokenResult) {}
  constructor(readonly payload: any) { }
}

export class AuthTokenPayload implements Action {
  readonly type = AuthActionTypes.AuthTokenPayload;
  // constructor(readonly payload: any) {
  //   this.payload = { uid: payload.user_id, ...payload };
  // }
  constructor(readonly payload: any) {
    this.payload = { uid: payload.user._id, ...payload };
  }
}

export class NullToken implements Action {
  readonly type = AuthActionTypes.NullToken;
}

export class TokenRestore implements Action {
  readonly type = AuthActionTypes.TokenRestore;
  constructor(readonly payload: any) {
    this.payload = { uid: payload.user._id, ...payload };
  }
}

export class TokenRefresh implements Action {
  readonly type = AuthActionTypes.TokenRefresh;
}

export class TokenRefreshSuccess implements Action {
  readonly type = AuthActionTypes.TokenRefreshSuccess;
  constructor(readonly payload: any) { }
}

export type AuthActions =
  | AppInit
  | AuthInit
  | LoggedOnce
  | LoginAction
  | LogoutAction
  | LoginRedirect
  | SignupAction
  | ForgotPasswordAction
  | ResetPasswordRequestAction
  | ResetPasswordAction
  | GoogleSign
  | FacebookSign
  | LinkedInSign
  | AuthFailure
  | AuthUserChange
  | AuthTokenPayload
  | NullToken
  | TokenRestore
  | TokenRefresh
  | TokenRefreshSuccess;
