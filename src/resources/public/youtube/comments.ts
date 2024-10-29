// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CommentsAPI from './comments';

export class Comments extends APIResource {
  /**
   * The API endpoint allows you to retrieve YouTube video comments based on the
   * video's unique ID provided as a path variable.
   *
   * When accessing this endpoint, you will receive a response containing complete
   * details of the comments, including the author's information, like count, and the
   * comment content.
   *
   * This functionality facilitates accessing and displaying comprehensive comment
   * data for a specific YouTube video.
   *
   * **Disclaimer:**
   *
   * Data provided by the API is static and not real-time.
   *
   * This simplifies the process of developing a **YouTube clone**, allowing
   * developers to solely focus on UI design and creativity, without worrying about
   * complex API key configuration.
   */
  retrieve(videoId: string, options?: Core.RequestOptions): Core.APIPromise<CommentRetrieveResponse> {
    return this._client.get(`/public/youtube/comments/${videoId}`, options);
  }
}

export interface CommentRetrieveResponse {
  data?: Array<CommentRetrieveResponse.Data>;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CommentRetrieveResponse {
  export interface Data {
    id?: string;

    snippet?: Data.Snippet;
  }

  export namespace Data {
    export interface Snippet {
      topLevelComment?: Snippet.TopLevelComment;

      totalReplyCount?: number;

      videoId?: string;
    }

    export namespace Snippet {
      export interface TopLevelComment {
        id?: string;

        snippet?: TopLevelComment.Snippet;
      }

      export namespace TopLevelComment {
        export interface Snippet {
          authorDisplayName?: string;

          authorProfileImageUrl?: string;

          likeCount?: number;

          publishedAt?: string;

          textDisplay?: string;

          textOriginal?: string;

          updatedAt?: string;
        }
      }
    }
  }
}

export namespace Comments {
  export import CommentRetrieveResponse = CommentsAPI.CommentRetrieveResponse;
}
