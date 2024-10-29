// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MyAPI from './my';

export class My extends APIResource {
  /**
   * The API endpoint allows a logged-in user to fetch their own posts, which can be
   * displayed on the "My Profile" page of the frontend.
   *
   * When accessing this endpoint, the logged-in user's accessToken is used to
   * authenticate and retrieve their specific posts from the backend.
   */
  list(query?: MyListParams, options?: Core.RequestOptions): Core.APIPromise<MyListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MyListResponse>;
  list(
    query: MyListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MyListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/social-media/posts/get/my', { query, ...options });
  }
}

export interface MyListResponse {
  data?: MyListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace MyListResponse {
  export interface Data {
    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: unknown | null;

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

export interface MyListParams {
  limit?: string;

  page?: string;
}

export namespace My {
  export import MyListResponse = MyAPI.MyListResponse;
  export import MyListParams = MyAPI.MyListParams;
}
