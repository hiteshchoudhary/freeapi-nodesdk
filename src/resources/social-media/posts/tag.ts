// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Tag extends APIResource {
  /**
   * The API endpoint allows users to retrieve posts by passing a tag name as a path
   * variable.
   *
   * When accessing this endpoint and providing a valid tag name as part of the URL,
   * the API will return a response containing posts that are associated with the
   * specified tag.
   */
  list(tag: string, query?: TagListParams, options?: Core.RequestOptions): Core.APIPromise<TagListResponse>;
  list(tag: string, options?: Core.RequestOptions): Core.APIPromise<TagListResponse>;
  list(
    tag: string,
    query: TagListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TagListResponse> {
    if (isRequestOptions(query)) {
      return this.list(tag, {}, query);
    }
    return this._client.get(`/social-media/posts/get/t/${tag}`, { query, ...options });
  }
}

export interface TagListResponse {
  data?: TagListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace TagListResponse {
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

export interface TagListParams {
  limit?: string;

  page?: string;
}

export declare namespace Tag {
  export { type TagListResponse as TagListResponse, type TagListParams as TagListParams };
}
