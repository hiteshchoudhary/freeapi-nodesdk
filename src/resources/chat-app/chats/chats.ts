// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ChatsAPI from './chats';
import * as CAPI from './c';
import * as UsersAPI from './users';

export class Chats extends APIResource {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
  c: CAPI.C = new CAPI.C(this._client);

  /**
   * Retrieve all chats associated with the logged-in user.
   *
   * This endpoint provides a comprehensive list of both individual and group chats,
   * offering a centralized view of the user's communication interactions.
   *
   * Developers can utilize this endpoint to seamlessly gather chat metadata,
   * facilitating efficient tracking and management of conversations within the
   * application.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ChatListResponse> {
    return this._client.get('/chat-app/chats', options);
  }
}

export interface ChatListResponse {
  data?: Array<ChatListResponse.Data>;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ChatListResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    admin?: string;

    createdAt?: string;

    isGroupChat?: boolean;

    name?: string;

    participants?: Array<Data.Participant>;

    updatedAt?: string;
  }

  export namespace Data {
    export interface Participant {
      __v?: number;

      _id?: string;

      avatar?: Participant.Avatar;

      createdAt?: string;

      email?: string;

      isEmailVerified?: boolean;

      loginType?: string;

      role?: string;

      updatedAt?: string;

      username?: string;
    }

    export namespace Participant {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export namespace Chats {
  export import ChatListResponse = ChatsAPI.ChatListResponse;
  export import Users = UsersAPI.Users;
  export import UserListResponse = UsersAPI.UserListResponse;
  export import C = CAPI.C;
  export import CCreateResponse = CAPI.CCreateResponse;
}
