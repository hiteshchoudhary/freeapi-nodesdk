// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Authentications extends APIResource {
  /**
   * The API endpoint allows you to retrieve the details of the currently logged-in
   * user based on their authentication token.
   *
   * When accessing this endpoint with a valid authentication token, you will receive
   * a response containing the information of the user who is currently authenticated
   * and logged in.
   */
  currentUser(options?: Core.RequestOptions): Core.APIPromise<AuthenticationCurrentUserResponse> {
    return this._client.get('/users/current-user', options);
  }

  /**
   * Github will send user details in JSON format once user successfully logs in.
   *
   * Backend will create an access and refresh token and will redirect user to the
   * appropreate frontend url with access token and refresh token in the query
   * parameter.
   */
  githubCallback(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/users/github/callback', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Redirect user to this url when user clicks on the **`Login with Github`**
   * button.
   *
   * This url will render the github concent screen where user can select the github
   * account with which he/she wants to login with.
   */
  githubRedirect(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/users/github', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  /**
   * Google will send user details in JSON format once user successfully logs in.
   *
   * Backend will create an access and refresh token and will redirect user to the
   * appropreate frontend url with access token and refresh token in the query
   * parameter.
   */
  googleCallback(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/users/google/callback', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Redirect user to this url when user clicks on the **`Login with Google`**
   * button.
   *
   * This url will render the google concent screen where user can select the google
   * account with which he/she wants to login with.
   */
  googleRedirect(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/users/google', { ...options, headers: { Accept: '*/*', ...options?.headers } });
  }

  /**
   * The API endpoint allows users to log into the application securely and also
   * returns an access token.
   *
   * When accessing this endpoint with valid login credentials, users will receive an
   * access token in the response.
   *
   * Additionally, the API endpoint securely sets the access token within the
   * browser/client httpOnly cookies for future authentication and authorization
   * purposes.
   *
   * This functionality ensures a secure and efficient login process for users,
   * providing them with an access token that can be used to authenticate subsequent
   * API requests.
   *
   * By securely storing the access token in browser cookies, the endpoint enables
   * automatic inclusion of the access token in future API requests, eliminating the
   * need for users to manually manage and provide the token with each request.
   */
  login(
    body?: AuthenticationLoginParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthenticationLoginResponse>;
  login(options?: Core.RequestOptions): Core.APIPromise<AuthenticationLoginResponse>;
  login(
    body: AuthenticationLoginParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthenticationLoginResponse> {
    if (isRequestOptions(body)) {
      return this.login({}, body);
    }
    return this._client.post('/users/login', { body, ...options });
  }

  /**
   * The API endpoint is responsible for logging out users from the application and
   * destroying the access token cookies stored on the client-side.
   *
   * When accessing this endpoint, it triggers the logout process, revoking the
   * user's authentication and terminating their active session.
   *
   * Additionally, it ensures that any access token cookies associated with the
   * user's session are removed from the client's browser, effectively logging them
   * out from the application.
   */
  logout(options?: Core.RequestOptions): Core.APIPromise<AuthenticationLogoutResponse> {
    return this._client.post('/users/logout', options);
  }

  /**
   * The API endpoint allows users to register or signup to create their accounts.
   */
  register(
    body?: AuthenticationRegisterParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthenticationRegisterResponse>;
  register(options?: Core.RequestOptions): Core.APIPromise<AuthenticationRegisterResponse>;
  register(
    body: AuthenticationRegisterParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthenticationRegisterResponse> {
    if (isRequestOptions(body)) {
      return this.register({}, body);
    }
    return this._client.post('/users/register', { body, ...options });
  }

  /**
   * The API endpoint is used to verify a user's email by accessing the verification
   * token (**verificationToken**) included in the path variable.
   *
   * When the user clicks on the email verification link provided to them, this API
   * is invoked to validate their email address.
   *
   * By including the verification token in the URL path, the endpoint confirms the
   * authenticity of the token and marks the user's email as verified.
   */
  verifyEmail(
    verificationToken: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AuthenticationVerifyEmailResponse> {
    return this._client.get(`/users/verify-email/${verificationToken}`, options);
  }
}

export interface AuthenticationCurrentUserResponse {
  data?: AuthenticationCurrentUserResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AuthenticationCurrentUserResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    avatar?: Data.Avatar;

    createdAt?: string;

    email?: string;

    isEmailVerified?: boolean;

    loginType?: string;

    role?: string;

    updatedAt?: string;

    username?: string;
  }

  export namespace Data {
    export interface Avatar {
      _id?: string;

      localPath?: string;

      url?: string;
    }
  }
}

export interface AuthenticationLoginResponse {
  data?: AuthenticationLoginResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AuthenticationLoginResponse {
  export interface Data {
    accessToken?: string;

    refreshToken?: string;

    user?: Data.User;
  }

  export namespace Data {
    export interface User {
      __v?: number;

      _id?: string;

      avatar?: User.Avatar;

      createdAt?: string;

      email?: string;

      isEmailVerified?: boolean;

      loginType?: string;

      role?: string;

      updatedAt?: string;

      username?: string;
    }

    export namespace User {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface AuthenticationLogoutResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export interface AuthenticationRegisterResponse {
  data?: AuthenticationRegisterResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AuthenticationRegisterResponse {
  export interface Data {
    user?: Data.User;
  }

  export namespace Data {
    export interface User {
      __v?: number;

      _id?: string;

      avatar?: User.Avatar;

      createdAt?: string;

      email?: string;

      isEmailVerified?: boolean;

      loginType?: string;

      role?: string;

      updatedAt?: string;

      username?: string;
    }

    export namespace User {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface AuthenticationVerifyEmailResponse {
  data?: AuthenticationVerifyEmailResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AuthenticationVerifyEmailResponse {
  export interface Data {
    isEmailVerified?: boolean;
  }
}

export interface AuthenticationLoginParams {
  password?: string;

  username?: string;
}

export interface AuthenticationRegisterParams {
  email?: string;

  password?: string;

  role?: string;

  username?: string;
}

export declare namespace Authentications {
  export {
    type AuthenticationCurrentUserResponse as AuthenticationCurrentUserResponse,
    type AuthenticationLoginResponse as AuthenticationLoginResponse,
    type AuthenticationLogoutResponse as AuthenticationLogoutResponse,
    type AuthenticationRegisterResponse as AuthenticationRegisterResponse,
    type AuthenticationVerifyEmailResponse as AuthenticationVerifyEmailResponse,
    type AuthenticationLoginParams as AuthenticationLoginParams,
    type AuthenticationRegisterParams as AuthenticationRegisterParams,
  };
}
