// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as UserPostsAPI from './user-posts';

export class UserPosts extends APIResource {
  /**
   * The API endpoint allows users to fetch posts of other users by passing the
   * username as a path variable.
   *
   * When accessing this endpoint and providing a valid username as a parameter, you
   * will receive a response containing the posts associated with the specified
   * username.
   */
  list(
    username: string,
    query?: UserPostListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserPostListResponse>;
  list(username: string, options?: Core.RequestOptions): Core.APIPromise<UserPostListResponse>;
  list(
    username: string,
    query: UserPostListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserPostListResponse> {
    if (isRequestOptions(query)) {
      return this.list(username, {}, query);
    }
    return this._client.get(`/social-media/posts/get/u/${username}`, { query, ...options });
  }
}

export interface UserPostListResponse {
  data?: UserPostListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace UserPostListResponse {
  export interface Data {
    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: number;

    page?: number;

    posts?: Array<Data.Post>;

    prevPage?: unknown | null;

    serialNumberStartFrom?: number;

    totalPages?: number;

    totalPosts?: number;
  }

  export namespace Data {
    export interface Post {
      __v?: number;

      _id?: string;

      author?: Post.Author;

      comments?: number;

      content?: string;

      createdAt?: string;

      images?: Array<Post.Image>;

      isBookmarked?: boolean;

      isLiked?: boolean;

      likes?: number;

      tags?: Array<string>;

      updatedAt?: string;
    }

    export namespace Post {
      export interface Author {
        __v?: number;

        _id?: string;

        account?: Author.Account;

        bio?: string;

        countryCode?: string;

        coverImage?: Author.CoverImage;

        createdAt?: string;

        dob?: string;

        firstName?: string;

        lastName?: string;

        location?: string;

        owner?: string;

        phoneNumber?: string;

        updatedAt?: string;
      }

      export namespace Author {
        export interface Account {
          _id?: string;

          avatar?: Account.Avatar;

          email?: string;

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

      export interface Image {
        _id?: string;

        localPath?: string;

        url?: string;
      }
    }
  }
}

export interface UserPostListParams {
  limit?: string;

  page?: string;
}

export namespace UserPosts {
  export import UserPostListResponse = UserPostsAPI.UserPostListResponse;
  export import UserPostListParams = UserPostsAPI.UserPostListParams;
}
