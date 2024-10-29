// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as UsersAPI from './users';
import * as AvatarAPI from './avatar';

export class Users extends APIResource {
  avatar: AvatarAPI.Avatar = new AvatarAPI.Avatar(this._client);

  /**
   * The API endpoint allows administrators to change the roles of users within the
   * system.
   *
   * This functionality is restricted to users with the `ADMIN` role, ensuring that
   * only authorized personnel can modify user roles.
   *
   * It provides an essential tool for managing user permissions and ensuring proper
   * authorization levels within the system.
   */
  assignRole(
    userId: string,
    body?: UserAssignRoleParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserAssignRoleResponse>;
  assignRole(userId: string, options?: Core.RequestOptions): Core.APIPromise<UserAssignRoleResponse>;
  assignRole(
    userId: string,
    body: UserAssignRoleParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserAssignRoleResponse> {
    if (isRequestOptions(body)) {
      return this.assignRole(userId, {}, body);
    }
    return this._client.post(`/users/assign-role/${userId}`, { body, ...options });
  }

  /**
   * The Change Password API allows logged-in users to update their current password
   * by providing the old password as a verification step.
   *
   * This API provides a secure mechanism for users to change their passwords within
   * the application.
   *
   * By accessing this endpoint and providing the old password, users can initiate
   * the password change process and set a new password of their choice.
   */
  changePassword(
    body?: UserChangePasswordParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserChangePasswordResponse>;
  changePassword(options?: Core.RequestOptions): Core.APIPromise<UserChangePasswordResponse>;
  changePassword(
    body: UserChangePasswordParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserChangePasswordResponse> {
    if (isRequestOptions(body)) {
      return this.changePassword({}, body);
    }
    return this._client.post('/users/change-password', { body, ...options });
  }

  /**
   * The API endpoint allows you to send a forgot password email by providing the
   * user's email ID.
   *
   * When accessing this endpoint and providing the email ID as a parameter, the API
   * initiates the process of sending a password reset email to the specified email
   * address.
   *
   * This functionality is useful for implementing password recovery mechanisms
   * within your application, allowing users to reset their passwords securely.
   */
  forgotPassword(
    body?: UserForgotPasswordParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserForgotPasswordResponse>;
  forgotPassword(options?: Core.RequestOptions): Core.APIPromise<UserForgotPasswordResponse>;
  forgotPassword(
    body: UserForgotPasswordParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserForgotPasswordResponse> {
    if (isRequestOptions(body)) {
      return this.forgotPassword({}, body);
    }
    return this._client.post('/users/forgot-password', { body, ...options });
  }

  /**
   * The Refresh Access Token API is responsible for refreshing the access token when
   * it expires.
   *
   * It allows you to make a request to this endpoint with the refresh token, which
   * has a lengthy expiry time, to obtain a new access token.
   *
   * Simultaneously, the API sets the new access token in a cookie for future
   * authentication purposes while replacing the expired one.
   *
   * This functionality ensures continuous access to protected resources by
   * automatically renewing the access token **without requiring the user to
   * reauthenticate manually**.
   *
   * By utilizing the refresh token, the API securely refreshes the access token and
   * updates it in the cookie, ensuring seamless and uninterrupted access to
   * authorized endpoints.
   */
  refreshToken(options?: Core.RequestOptions): Core.APIPromise<UserRefreshTokenResponse> {
    return this._client.post('/users/refresh-token', options);
  }

  /**
   * The API endpoint allows the logged-in user to request a resend of the email
   * verification mail.
   *
   * By accessing this endpoint, the user can trigger the system to send another
   * email verification link to their registered email address.
   *
   * This functionality is useful in cases where the initial verification email may
   * have been missed, expired, or encountered delivery issues.
   */
  resendEmailVerification(
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserResendEmailVerificationResponse> {
    return this._client.post('/users/resend-email-verification', options);
  }

  /**
   * The API endpoint enables users to reset their password through the password
   * reset email.
   *
   * By providing the new password and the password reset token obtained from the
   * URL, users can securely reset their password and regain access to their account.
   *
   * This functionality ensures a secure and streamlined password reset process,
   * allowing users to update their password conveniently and protect their account
   * from unauthorized access.
   */
  resetPassword(
    resetToken: string,
    body?: UserResetPasswordParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserResetPasswordResponse>;
  resetPassword(
    resetToken: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserResetPasswordResponse>;
  resetPassword(
    resetToken: string,
    body: UserResetPasswordParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserResetPasswordResponse> {
    if (isRequestOptions(body)) {
      return this.resetPassword(resetToken, {}, body);
    }
    return this._client.post(`/users/reset-password/${resetToken}`, { body, ...options });
  }
}

export interface UserAssignRoleResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export interface UserChangePasswordResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export interface UserForgotPasswordResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export interface UserRefreshTokenResponse {
  data?: UserRefreshTokenResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace UserRefreshTokenResponse {
  export interface Data {
    accessToken?: string;

    refreshToken?: string;
  }
}

export interface UserResendEmailVerificationResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export interface UserResetPasswordResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export interface UserAssignRoleParams {
  role?: string;
}

export interface UserChangePasswordParams {
  newPassword?: string;

  oldPassword?: string;
}

export interface UserForgotPasswordParams {
  email?: string;
}

export interface UserResetPasswordParams {
  newPassword?: string;
}

export namespace Users {
  export import UserAssignRoleResponse = UsersAPI.UserAssignRoleResponse;
  export import UserChangePasswordResponse = UsersAPI.UserChangePasswordResponse;
  export import UserForgotPasswordResponse = UsersAPI.UserForgotPasswordResponse;
  export import UserRefreshTokenResponse = UsersAPI.UserRefreshTokenResponse;
  export import UserResendEmailVerificationResponse = UsersAPI.UserResendEmailVerificationResponse;
  export import UserResetPasswordResponse = UsersAPI.UserResetPasswordResponse;
  export import UserAssignRoleParams = UsersAPI.UserAssignRoleParams;
  export import UserChangePasswordParams = UsersAPI.UserChangePasswordParams;
  export import UserForgotPasswordParams = UsersAPI.UserForgotPasswordParams;
  export import UserResetPasswordParams = UsersAPI.UserResetPasswordParams;
  export import Avatar = AvatarAPI.Avatar;
  export import AvatarUpdateResponse = AvatarAPI.AvatarUpdateResponse;
  export import AvatarUpdateParams = AvatarAPI.AvatarUpdateParams;
}
