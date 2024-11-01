// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class CoverImage extends APIResource {
  /**
   * The API endpoint allows users to update their social media profile's cover
   * image.
   *
   * By accessing this endpoint, users can submit a new cover image file, which will
   * be applied as their updated profile cover on the social media platform.
   */
  update(
    body?: CoverImageUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CoverImageUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<CoverImageUpdateResponse>;
  update(
    body: CoverImageUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CoverImageUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.patch(
      '/social-media/profile/cover-image',
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }
}

export interface CoverImageUpdateResponse {
  data?: Array<CoverImageUpdateResponse.Data>;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CoverImageUpdateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    account?: Data.Account;

    bio?: string;

    countryCode?: string;

    coverImage?: Data.CoverImage;

    createdAt?: string;

    dob?: string;

    firstName?: string;

    lastName?: string;

    location?: string;

    owner?: string;

    phoneNumber?: string;

    updatedAt?: string;
  }

  export namespace Data {
    export interface Account {
      _id?: string;

      avatar?: Account.Avatar;

      email?: string;

      isEmailVerified?: boolean;

      loginType?: string;

      role?: string;

      username?: string;
    }

    export namespace Account {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }

    export interface CoverImage {
      _id?: string;

      localPath?: string;

      url?: string;
    }
  }
}

export interface CoverImageUpdateParams {
  /**
   * File
   */
  coverImage?: Core.Uploadable;
}

export declare namespace CoverImage {
  export {
    type CoverImageUpdateResponse as CoverImageUpdateResponse,
    type CoverImageUpdateParams as CoverImageUpdateParams,
  };
}
