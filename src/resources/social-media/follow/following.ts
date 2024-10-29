// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as FollowingAPI from './following';

export class Following extends APIResource {
  /**
   * The API endpoint allows you to retrieve the list of users which are being
   * followed by a specific user based on their username passed as a path variable.
   *
   * When accessing this endpoint, you will receive a response containing the users'
   * information followed by the specified user.
   */
  list(
    username: string,
    query?: FollowingListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FollowingListResponse>;
  list(username: string, options?: Core.RequestOptions): Core.APIPromise<FollowingListResponse>;
  list(
    username: string,
    query: FollowingListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FollowingListResponse> {
    if (isRequestOptions(query)) {
      return this.list(username, {}, query);
    }
    return this._client.get(`/social-media/follow/list/following/${username}`, { query, ...options });
  }
}

export interface FollowingListResponse {
  data?: FollowingListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace FollowingListResponse {
  export interface Data {
    following?: Array<Data.Following>;

    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: number;

    page?: number;

    prevPage?: unknown | null;

    serialNumberStartFrom?: number;

    totalFollowing?: number;

    totalPages?: number;

    user?: Data.User;
  }

  export namespace Data {
    export interface Following {
      _id?: string;

      avatar?: Following.Avatar;

      email?: string;

      isFollowing?: boolean;

      profile?: Following.Profile;

      username?: string;
    }

    export namespace Following {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }

      export interface Profile {
        __v?: number;

        _id?: string;

        bio?: string;

        countryCode?: string;

        coverImage?: Profile.CoverImage;

        createdAt?: string;

        dob?: string;

        firstName?: string;

        lastName?: string;

        location?: string;

        owner?: string;

        phoneNumber?: string;

        updatedAt?: string;
      }

      export namespace Profile {
        export interface CoverImage {
          _id?: string;

          localPath?: string;

          url?: string;
        }
      }
    }

    export interface User {
      _id?: string;

      avatar?: User.Avatar;

      email?: string;

      isEmailVerified?: boolean;

      profile?: User.Profile;

      username?: string;
    }

    export namespace User {
      export interface Avatar {
        _id?: string;

        localPath?: string;

        url?: string;
      }

      export interface Profile {
        _id?: string;

        bio?: string;

        countryCode?: string;

        coverImage?: Profile.CoverImage;

        firstName?: string;

        lastName?: string;

        location?: string;

        phoneNumber?: string;
      }

      export namespace Profile {
        export interface CoverImage {
          _id?: string;

          localPath?: string;

          url?: string;
        }
      }
    }
  }
}

export interface FollowingListParams {
  limit?: string;

  page?: string;
}

export namespace Following {
  export import FollowingListResponse = FollowingAPI.FollowingListResponse;
  export import FollowingListParams = FollowingAPI.FollowingListParams;
}
