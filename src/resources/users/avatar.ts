// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Avatar extends APIResource {
  /**
   * The API endpoint enables users to update their avatar or profile picture.
   *
   * By accessing this endpoint and providing the necessary parameters, users can
   * upload a new image file for their desired avatar.
   */
  update(body?: AvatarUpdateParams, options?: Core.RequestOptions): Core.APIPromise<AvatarUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<AvatarUpdateResponse>;
  update(
    body: AvatarUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AvatarUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.patch('/users/avatar', Core.multipartFormRequestOptions({ body, ...options }));
  }
}

export interface AvatarUpdateResponse {
  data?: AvatarUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace AvatarUpdateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    avatar?: Data.Avatar;

    createdAt?: string;

    email?: string;

    emailVerificationExpiry?: string;

    emailVerificationToken?: string;

    isEmailVerified?: boolean;

    loginType?: string;

    password?: string;

    refreshToken?: string;

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

export interface AvatarUpdateParams {
  /**
   * File
   */
  avatar?: Core.Uploadable;
}

export declare namespace Avatar {
  export { type AvatarUpdateResponse as AvatarUpdateResponse, type AvatarUpdateParams as AvatarUpdateParams };
}
