// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class C extends APIResource {
  /**
   * This API endpoint enables a logged-in user to initiate a personalized one-on-one
   * chat interaction with another user.
   *
   * By providing correct `receiverId`, the API facilitates the creation of a private
   * chat environment where participants can engage in direct and focused
   * conversations.
   */
  create(receiverId: string, options?: Core.RequestOptions): Core.APIPromise<CCreateResponse> {
    return this._client.post(`/chat-app/chats/c/${receiverId}`, options);
  }
}

export interface CCreateResponse {
  data?: CCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CCreateResponse {
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

export declare namespace C {
  export { type CCreateResponse as CCreateResponse };
}
