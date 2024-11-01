// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Images extends APIResource {
  /**
   * The API endpoint allows users to remove an individual image from a social media
   * post.
   *
   * When accessing this endpoint and specifying the post ID and image ID, the image
   * associated with the post will be removed, reducing the total number of images in
   * the post by one.
   *
   * This functionality is particularly useful when users want to manage the images
   * included in their posts and provides them with the flexibility to delete
   * specific images from the post.
   */
  remove(
    postId: string,
    imageId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ImageRemoveResponse> {
    return this._client.patch(`/social-media/posts/remove/image/${postId}/${imageId}`, options);
  }
}

export interface ImageRemoveResponse {
  data?: ImageRemoveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ImageRemoveResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    author?: Data.Author;

    comments?: number;

    content?: string;

    createdAt?: string;

    images?: Array<Data.Image>;

    isBookmarked?: boolean;

    isLiked?: boolean;

    likes?: number;

    tags?: Array<string>;

    updatedAt?: string;
  }

  export namespace Data {
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

export declare namespace Images {
  export { type ImageRemoveResponse as ImageRemoveResponse };
}
