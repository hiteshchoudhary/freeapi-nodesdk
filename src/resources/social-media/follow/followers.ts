// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as FollowersAPI from './followers';

export class Followers extends APIResource {
  /**
   * The API endpoint allows you to retrieve the list of followers for a specific
   * user based on their username passed as a path variable.
   *
   * When accessing this endpoint, you will receive a response containing the
   * followers' information for the specified user.
   */
  list(
    username: string,
    query?: FollowerListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<FollowerListResponse>;
  list(username: string, options?: Core.RequestOptions): Core.APIPromise<FollowerListResponse>;
  list(
    username: string,
    query: FollowerListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<FollowerListResponse> {
    if (isRequestOptions(query)) {
      return this.list(username, {}, query);
    }
    return this._client.get(`/social-media/follow/list/followers/${username}`, { query, ...options });
  }
}

export interface FollowerListResponse {
  data?: FollowerListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace FollowerListResponse {
  export interface Data {
    followers?: Array<Data.Follower>;

    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: number;

    page?: number;

    prevPage?: unknown | null;

    serialNumberStartFrom?: number;

    totalFollowers?: number;

    totalPages?: number;

    user?: Data.User;
  }

  export namespace Data {
    export interface Follower {
      _id?: string;

      avatar?: Follower.Avatar;

      email?: string;

      isFollowing?: boolean;

      profile?: Follower.Profile;

      username?: string;
    }

    export namespace Follower {
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

export interface FollowerListParams {
  limit?: string;

  page?: string;
}

export namespace Followers {
  export import FollowerListResponse = FollowersAPI.FollowerListResponse;
  export import FollowerListParams = FollowersAPI.FollowerListParams;
}
