// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as PostsAPI from './posts';
import * as ImagesAPI from './images';
import * as MyAPI from './my';
import * as TagAPI from './tag';
import * as UserPostsAPI from './user-posts';

export class Posts extends APIResource {
  my: MyAPI.My = new MyAPI.My(this._client);
  userPosts: UserPostsAPI.UserPosts = new UserPostsAPI.UserPosts(this._client);
  tag: TagAPI.Tag = new TagAPI.Tag(this._client);
  images: ImagesAPI.Images = new ImagesAPI.Images(this._client);

  /**
   * The API allows a logged-in user to create a social media post by providing the
   * necessary details in the request body.
   *
   * The user can include the content of the post, relevant tags, and attach images
   * (upto 6) as part of the request.
   *
   * NOTE: As this api requires formData to be used, to send multiple tags client
   * must send them with the respective index.
   *
   * e.g. if you are passing 4 tags the keys in the, following is onw of the ways to
   * send them:
   *
   * ```javascript
   * const formData = new FromData()
   * // ... other form data appends
   * tags.forEach((tag, ind) => {
   *     formData.append(`tag[${ind}]`: tag)
   * })
   *
   * ```
   */
  create(body?: PostCreateParams, options?: Core.RequestOptions): Core.APIPromise<PostCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<PostCreateResponse>;
  create(
    body: PostCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/social-media/posts', Core.multipartFormRequestOptions({ body, ...options }));
  }

  /**
   * The API endpoint allows users to fetch a post by providing the post ID as a path
   * variable.
   *
   * By accessing this endpoint and providing a valid post ID, users will receive a
   * response containing the details of the post corresponding to the provided ID.
   */
  retrieve(postId: string, options?: Core.RequestOptions): Core.APIPromise<PostRetrieveResponse> {
    return this._client.get(`/social-media/posts/${postId}`, options);
  }

  /**
   * The API endpoint allows users to update a post by passing relevant data, along
   * with the post ID as a path variable.
   *
   * By accessing this endpoint and providing the necessary data and post ID, users
   * can modify and update the content of a specific post.
   *
   * **NOTE:** All the fields in the body and optional but must not be empty if
   * passed in the body.
   */
  update(
    postId: string,
    body?: PostUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostUpdateResponse>;
  update(postId: string, options?: Core.RequestOptions): Core.APIPromise<PostUpdateResponse>;
  update(
    postId: string,
    body: PostUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(postId, {}, body);
    }
    return this._client.patch(
      `/social-media/posts/${postId}`,
      Core.multipartFormRequestOptions({ body, ...options }),
    );
  }

  /**
   * The API endpoint allows users to fetch all posts posted by themselves or other
   * users within the social media application.
   *
   * By accessing this endpoint, users can retrieve a collection of posts containing
   * relevant information.
   */
  list(query?: PostListParams, options?: Core.RequestOptions): Core.APIPromise<PostListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PostListResponse>;
  list(
    query: PostListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PostListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/social-media/posts', { query, ...options });
  }

  /**
   * The API endpoint allows users to delete a post by passing the post ID as a path
   * variable.
   *
   * By accessing this endpoint and providing the specific post ID in the URL, users
   * can initiate the deletion of the corresponding post.
   */
  delete(postId: string, options?: Core.RequestOptions): Core.APIPromise<PostDeleteResponse> {
    return this._client.delete(`/social-media/posts/${postId}`, options);
  }

  /**
   * The API endpoint enables users to like or unlike a social media post.
   *
   * By accessing this endpoint, users can interact with the post by either liking or
   * unliking it.
   */
  like(postId: string, options?: Core.RequestOptions): Core.APIPromise<PostLikeResponse> {
    return this._client.post(`/social-media/like/post/${postId}`, options);
  }
}

export interface PostCreateResponse {
  data?: PostCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace PostCreateResponse {
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

export interface PostRetrieveResponse {
  data?: PostRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace PostRetrieveResponse {
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

export interface PostUpdateResponse {
  data?: PostUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace PostUpdateResponse {
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

export interface PostListResponse {
  data?: PostListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace PostListResponse {
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

export interface PostDeleteResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export interface PostLikeResponse {
  data?: PostLikeResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace PostLikeResponse {
  export interface Data {
    isLiked?: boolean;
  }
}

export interface PostCreateParams {
  content?: string;

  /**
   * Upto 6 images per post are allowed
   */
  images?: Core.Uploadable;

  'tags[0]'?: string;

  'tags[1]'?: string;

  'tags[2]'?: string;
}

export interface PostUpdateParams {
  content?: string;

  /**
   * Upto 6 total images are allowed per post
   */
  images?: Core.Uploadable;

  'tags[0]'?: string;
}

export interface PostListParams {
  limit?: string;

  page?: string;
}

export namespace Posts {
  export import PostCreateResponse = PostsAPI.PostCreateResponse;
  export import PostRetrieveResponse = PostsAPI.PostRetrieveResponse;
  export import PostUpdateResponse = PostsAPI.PostUpdateResponse;
  export import PostListResponse = PostsAPI.PostListResponse;
  export import PostDeleteResponse = PostsAPI.PostDeleteResponse;
  export import PostLikeResponse = PostsAPI.PostLikeResponse;
  export import PostCreateParams = PostsAPI.PostCreateParams;
  export import PostUpdateParams = PostsAPI.PostUpdateParams;
  export import PostListParams = PostsAPI.PostListParams;
  export import My = MyAPI.My;
  export import MyListResponse = MyAPI.MyListResponse;
  export import MyListParams = MyAPI.MyListParams;
  export import UserPosts = UserPostsAPI.UserPosts;
  export import UserPostListResponse = UserPostsAPI.UserPostListResponse;
  export import UserPostListParams = UserPostsAPI.UserPostListParams;
  export import Tag = TagAPI.Tag;
  export import TagListResponse = TagAPI.TagListResponse;
  export import TagListParams = TagAPI.TagListParams;
  export import Images = ImagesAPI.Images;
  export import ImageRemoveResponse = ImagesAPI.ImageRemoveResponse;
}
