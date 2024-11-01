// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Comments extends APIResource {
  /**
   * The API endpoint allows users to add a comment to a specific post based on the
   * postId provided in the path variable.
   *
   * When accessing this endpoint and providing a valid postId as a parameter, users
   * can submit their comments to be associated with that particular post.
   */
  create(
    postId: string,
    body?: CommentCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommentCreateResponse>;
  create(postId: string, options?: Core.RequestOptions): Core.APIPromise<CommentCreateResponse>;
  create(
    postId: string,
    body: CommentCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommentCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create(postId, {}, body);
    }
    return this._client.post(`/social-media/comments/post/${postId}`, { body, ...options });
  }

  /**
   * The API endpoint allows users to update a comment associated with a post based
   * on the comment ID provided in the path variable.
   *
   * By accessing this endpoint and specifying the comment ID, users can modify the
   * content or other attributes of the comment associated with the post.
   */
  update(
    commentId: string,
    body?: CommentUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommentUpdateResponse>;
  update(commentId: string, options?: Core.RequestOptions): Core.APIPromise<CommentUpdateResponse>;
  update(
    commentId: string,
    body: CommentUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommentUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(commentId, {}, body);
    }
    return this._client.patch(`/social-media/comments/${commentId}`, { body, ...options });
  }

  /**
   * The API endpoint allows users to retrieve a list of comments associated with a
   * specific post, based on the post ID provided as a path variable.
   *
   * When accessing this endpoint and specifying a valid post ID, the response will
   * contain a collection of comments related to that particular post.
   */
  list(
    postId: string,
    query?: CommentListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommentListResponse>;
  list(postId: string, options?: Core.RequestOptions): Core.APIPromise<CommentListResponse>;
  list(
    postId: string,
    query: CommentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CommentListResponse> {
    if (isRequestOptions(query)) {
      return this.list(postId, {}, query);
    }
    return this._client.get(`/social-media/comments/post/${postId}`, { query, ...options });
  }

  /**
   * The API endpoint enables users to delete a specific comment on a post based on
   * the comment ID provided in the path variable.
   *
   * When accessing this endpoint and specifying the comment ID in the URL, the
   * corresponding comment will be removed from the post.
   */
  delete(commentId: string, options?: Core.RequestOptions): Core.APIPromise<CommentDeleteResponse> {
    return this._client.delete(`/social-media/comments/${commentId}`, options);
  }

  /**
   * The API endpoint enables users to like or unlike a social media comments.
   *
   * By accessing this endpoint, users can interact with the comment by either liking
   * or unliking it.
   */
  like(commentId: string, options?: Core.RequestOptions): Core.APIPromise<CommentLikeResponse> {
    return this._client.post(`/social-media/like/comment/${commentId}`, options);
  }
}

export interface CommentCreateResponse {
  data?: CommentCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CommentCreateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    author?: string;

    content?: string;

    createdAt?: string;

    postId?: string;

    updatedAt?: string;
  }
}

export interface CommentUpdateResponse {
  data?: CommentUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CommentUpdateResponse {
  export interface Data {
    deletedComment?: Data.DeletedComment;
  }

  export namespace Data {
    export interface DeletedComment {
      __v?: number;

      _id?: string;

      author?: string;

      content?: string;

      createdAt?: string;

      postId?: string;

      updatedAt?: string;
    }
  }
}

export interface CommentListResponse {
  data?: CommentListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CommentListResponse {
  export interface Data {
    comments?: Array<Data.Comment>;

    hasNextPage?: boolean;

    hasPrevPage?: boolean;

    limit?: number;

    nextPage?: number;

    page?: number;

    prevPage?: unknown | null;

    serialNumberStartFrom?: number;

    totalComments?: number;

    totalPages?: number;
  }

  export namespace Data {
    export interface Comment {
      __v?: number;

      _id?: string;

      author?: Comment.Author;

      content?: string;

      createdAt?: string;

      isLiked?: boolean;

      likes?: number;

      postId?: string;

      updatedAt?: string;
    }

    export namespace Comment {
      export interface Author {
        _id?: string;

        account?: Author.Account;

        firstName?: string;

        lastName?: string;
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
      }
    }
  }
}

export interface CommentDeleteResponse {
  data?: CommentDeleteResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CommentDeleteResponse {
  export interface Data {
    deletedComment?: Data.DeletedComment;
  }

  export namespace Data {
    export interface DeletedComment {
      __v?: number;

      _id?: string;

      author?: string;

      content?: string;

      createdAt?: string;

      postId?: string;

      updatedAt?: string;
    }
  }
}

export interface CommentLikeResponse {
  data?: CommentLikeResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CommentLikeResponse {
  export interface Data {
    isLiked?: boolean;
  }
}

export interface CommentCreateParams {
  content?: string;
}

export interface CommentUpdateParams {
  content?: string;
}

export interface CommentListParams {
  limit?: string;

  page?: string;
}

export declare namespace Comments {
  export {
    type CommentCreateResponse as CommentCreateResponse,
    type CommentUpdateResponse as CommentUpdateResponse,
    type CommentListResponse as CommentListResponse,
    type CommentDeleteResponse as CommentDeleteResponse,
    type CommentLikeResponse as CommentLikeResponse,
    type CommentCreateParams as CommentCreateParams,
    type CommentUpdateParams as CommentUpdateParams,
    type CommentListParams as CommentListParams,
  };
}
