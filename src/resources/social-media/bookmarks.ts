// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Bookmarks extends APIResource {
  /**
   * The API endpoint allows users to add or remove posts from their bookmarks.
   *
   * By accessing this endpoint, users can add a post to their bookmarks or remove a
   * post from their bookmarks.
   */
  create(postId: string, options?: Core.RequestOptions): Core.APIPromise<BookmarkCreateResponse> {
    return this._client.post(`/social-media/bookmarks/${postId}`, options);
  }

  /**
   * The API endpoint allows you to retrieve the bookmarked posts of the currently
   * logged-in user.
   *
   * Upon accessing this endpoint, you will receive a response containing the posts
   * that the user has bookmarked or saved.
   */
  retrieve(
    query?: BookmarkRetrieveParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkRetrieveResponse>;
  retrieve(options?: Core.RequestOptions): Core.APIPromise<BookmarkRetrieveResponse>;
  retrieve(
    query: BookmarkRetrieveParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BookmarkRetrieveResponse> {
    if (isRequestOptions(query)) {
      return this.retrieve({}, query);
    }
    return this._client.get('/social-media/bookmarks', { query, ...options });
  }
}

export interface BookmarkCreateResponse {
  data?: BookmarkCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace BookmarkCreateResponse {
  export interface Data {
    isBookmarked?: boolean;
  }
}

export interface BookmarkRetrieveResponse {
  data?: BookmarkRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace BookmarkRetrieveResponse {
  export interface Data {
    bookmarkedPosts?: Array<Data.BookmarkedPost>;

    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: unknown | null;

    page?: number;

    prevPage?: unknown | null;

    serialNumberStartFrom?: number;

    totalBookmarkedPosts?: number;

    totalPages?: number;
  }

  export namespace Data {
    export interface BookmarkedPost {
      __v?: number;

      _id?: string;

      author?: BookmarkedPost.Author;

      comments?: number;

      content?: string;

      createdAt?: string;

      images?: Array<BookmarkedPost.Image>;

      isBookmarked?: boolean;

      isLiked?: boolean;

      likes?: number;

      tags?: Array<string>;

      updatedAt?: string;
    }

    export namespace BookmarkedPost {
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

export interface BookmarkRetrieveParams {
  limit?: string;

  page?: string;
}

export declare namespace Bookmarks {
  export {
    type BookmarkCreateResponse as BookmarkCreateResponse,
    type BookmarkRetrieveResponse as BookmarkRetrieveResponse,
    type BookmarkRetrieveParams as BookmarkRetrieveParams,
  };
}
