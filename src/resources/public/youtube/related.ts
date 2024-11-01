// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Related extends APIResource {
  /**
   * The API endpoint returns a list of recommended YouTube videos based on the
   * `videoId` provided in the path variable.
   *
   * When accessing this endpoint and passing a valid video ID, you will receive a
   * response containing a list of videos that are related to the current video.
   *
   * These recommended videos can be displayed in a list view on the right side of
   * the user interface, providing users with relevant and engaging content that
   * complements the video they are currently viewing.
   *
   * **Disclaimer:**
   *
   * Data provided by the API is static and not real-time.
   *
   * This simplifies the process of developing a **YouTube clone**, allowing
   * developers to solely focus on UI design and creativity, without worrying about
   * complex API key configuration.
   */
  list(
    videoId: string,
    query?: RelatedListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelatedListResponse>;
  list(videoId: string, options?: Core.RequestOptions): Core.APIPromise<RelatedListResponse>;
  list(
    videoId: string,
    query: RelatedListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RelatedListResponse> {
    if (isRequestOptions(query)) {
      return this.list(videoId, {}, query);
    }
    return this._client.get(`/public/youtube/related/${videoId}`, { query, ...options });
  }
}

export interface RelatedListResponse {
  data?: RelatedListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace RelatedListResponse {
  export interface Data {
    currentPageItems?: number;

    data?: Array<Data.Data>;

    limit?: number;

    nextPage?: boolean;

    page?: number;

    previousPage?: boolean;

    totalItems?: number;

    totalPages?: number;
  }

  export namespace Data {
    export interface Data {
      items?: Data.Items;

      kind?: string;
    }

    export namespace Data {
      export interface Items {
        id?: string;

        contentDetails?: Items.ContentDetails;

        kind?: string;

        snippet?: Items.Snippet;

        statistics?: Items.Statistics;
      }

      export namespace Items {
        export interface ContentDetails {
          caption?: string;

          contentRating?: unknown;

          definition?: string;

          dimension?: string;

          duration?: string;

          licensedContent?: boolean;

          projection?: string;
        }

        export interface Snippet {
          categoryId?: string;

          channelId?: string;

          channelTitle?: string;

          defaultAudioLanguage?: string;

          description?: string;

          liveBroadcastContent?: string;

          localized?: Snippet.Localized;

          publishedAt?: string;

          tags?: Array<string>;

          thumbnails?: Snippet.Thumbnails;

          title?: string;
        }

        export namespace Snippet {
          export interface Localized {
            description?: string;

            title?: string;
          }

          export interface Thumbnails {
            default?: Thumbnails.Default;

            high?: Thumbnails.High;

            maxres?: Thumbnails.Maxres;

            medium?: Thumbnails.Medium;

            standard?: Thumbnails.Standard;
          }

          export namespace Thumbnails {
            export interface Default {
              height?: number;

              url?: string;

              width?: number;
            }

            export interface High {
              height?: number;

              url?: string;

              width?: number;
            }

            export interface Maxres {
              height?: number;

              url?: string;

              width?: number;
            }

            export interface Medium {
              height?: number;

              url?: string;

              width?: number;
            }

            export interface Standard {
              height?: number;

              url?: string;

              width?: number;
            }
          }
        }

        export interface Statistics {
          commentCount?: string;

          favoriteCount?: string;

          likeCount?: string;

          viewCount?: string;
        }
      }
    }
  }
}

export interface RelatedListParams {
  limit?: string;

  page?: string;
}

export declare namespace Related {
  export { type RelatedListResponse as RelatedListResponse, type RelatedListParams as RelatedListParams };
}
