// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as UsersAPI from './users';

export class Users extends APIResource {
  /**
   * This API endpoint enables developers to retrieve a list of users who are
   * available for chat interactions.
   *
   * The endpoint facilitates the identification of potential chat partners or group
   * members for the logged-in user.
   *
   * It provides a seamless way to explore and initiate conversations, fostering a
   * dynamic and engaging chat environment within the application.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    return this._client.get('/chat-app/chats/users', options);
  }
}

export interface UserListResponse {
  data?: Array<UserListResponse.Data>;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace UserListResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    avatar?: Data.Avatar;

    createdAt?: string;

    email?: string;

    isEmailVerified?: boolean;

    loginType?: string;

    password?: string;

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

export namespace Users {
  export import UserListResponse = UsersAPI.UserListResponse;
}
