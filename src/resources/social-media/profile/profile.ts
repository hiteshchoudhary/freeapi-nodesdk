// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as CoverImageAPI from './cover-image';
import {
  CoverImage as CoverImageAPICoverImage,
  CoverImageUpdateParams,
  CoverImageUpdateResponse,
} from './cover-image';

export class Profile extends APIResource {
  coverImage: CoverImageAPI.CoverImage = new CoverImageAPI.CoverImage(this._client);

  /**
   * The API endpoint allows users to fetch another user's social media profile based
   * on the username provided as a path variable.
   *
   * By accessing this endpoint and providing the username as a parameter, you will
   * receive a response containing the social media profile information of the
   * specified user.
   */
  retrieve(username: string, options?: Core.RequestOptions): Core.APIPromise<ProfileRetrieveResponse> {
    return this._client.get(`/social-media/profile/u/${username}`, options);
  }

  /**
   * The API endpoint allows users to update their social media profiles.
   *
   * By accessing this endpoint, users can make changes to their profile information
   * such as name, bio, contact details, dob, basic details or any other relevant
   * fields.
   *
   * _**NOTE:**_ _To update avatar or cover image we have separate endpoints._
   *
   * _**Update avatar:**_ _Apps > Authentication > Update avatar_
   *
   * _**Update cover image:**_ _Apps > Social Media > Update cover image_
   */
  update(body?: ProfileUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ProfileUpdateResponse>;
  update(options?: Core.RequestOptions): Core.APIPromise<ProfileUpdateResponse>;
  update(
    body: ProfileUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ProfileUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update({}, body);
    }
    return this._client.patch('/social-media/profile', { body, ...options });
  }
}

export interface ProfileRetrieveResponse {
  data?: ProfileRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ProfileRetrieveResponse {
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

    followersCount?: number;

    followingCount?: number;

    isFollowing?: boolean;

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

export interface ProfileUpdateResponse {
  data?: Array<ProfileUpdateResponse.Data>;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ProfileUpdateResponse {
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

export interface ProfileUpdateParams {
  bio?: string;

  countryCode?: string;

  dob?: string;

  firstName?: string;

  lastName?: string;

  location?: string;

  phoneNumber?: string;
}

Profile.CoverImage = CoverImageAPICoverImage;

export declare namespace Profile {
  export {
    type ProfileRetrieveResponse as ProfileRetrieveResponse,
    type ProfileUpdateResponse as ProfileUpdateResponse,
    type ProfileUpdateParams as ProfileUpdateParams,
  };

  export {
    CoverImageAPICoverImage as CoverImage,
    type CoverImageUpdateResponse as CoverImageUpdateResponse,
    type CoverImageUpdateParams as CoverImageUpdateParams,
  };
}
