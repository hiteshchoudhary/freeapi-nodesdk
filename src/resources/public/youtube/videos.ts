// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as VideosAPI from './videos';

export class Videos extends APIResource {
  /**
   * This API endpoint allows you to retrieve a YouTube video's complete details by
   * passing the `videoId` as a path variable.
   *
   * When accessing this endpoint with a valid video ID, you will receive a response
   * containing comprehensive information about the specified video.
   *
   * This includes video statistics such as the number of likes, dislikes, views, and
   * the video's duration, as well as other relevant details like the video title,
   * description, channel name, and publication date.
   *
   * This functionality enables you to access and display detailed information about
   * specific YouTube videos within your application.
   *
   * **Disclaimer:**
   *
   * Data provided by the API is static and not real-time.
   *
   * This simplifies the process of developing a **YouTube clone**, allowing
   * developers to solely focus on UI design and creativity, without worrying about
   * complex API key configuration.
   */
  retrieve(videoId: string, options?: Core.RequestOptions): Core.APIPromise<VideoRetrieveResponse> {
    return this._client.get(`/public/youtube/videos/${videoId}`, options);
  }

  /**
   * This API endpoint enables you to retrieve all YouTube videos from a JSON file
   * with a structure similar to YouTube's public API.
   *
   * Upon accessing this endpoint, you will receive a response containing a list of
   * YouTube videos, just like you would from YouTube's official API.
   *
   * **Disclaimer:**
   *
   * Data provided by the API is static and not real-time.
   *
   * This simplifies the process of developing a **YouTube clone**, allowing
   * developers to solely focus on UI design and creativity, without worrying about
   * complex API key configuration.
   */
  list(query?: VideoListParams, options?: Core.RequestOptions): Core.APIPromise<VideoListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<VideoListResponse>;
  list(
    query: VideoListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<VideoListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/youtube/videos', { query, ...options });
  }
}

export interface VideoRetrieveResponse {
  data?: VideoRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace VideoRetrieveResponse {
  export interface Data {
    channel?: Data.Channel;

    video?: Data.Video;
  }

  export namespace Data {
    export interface Channel {
      info?: Channel.Info;

      statistics?: Channel.Statistics;
    }

    export namespace Channel {
      export interface Info {
        country?: string;

        customUrl?: string;

        description?: string;

        localized?: Info.Localized;

        publishedAt?: string;

        thumbnails?: Info.Thumbnails;

        title?: string;
      }

      export namespace Info {
        export interface Localized {
          description?: string;

          title?: string;
        }

        export interface Thumbnails {
          default?: Thumbnails.Default;

          high?: Thumbnails.High;

          medium?: Thumbnails.Medium;
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

          export interface Medium {
            height?: number;

            url?: string;

            width?: number;
          }
        }
      }

      export interface Statistics {
        hiddenSubscriberCount?: boolean;

        subscriberCount?: string;

        videoCount?: string;

        viewCount?: string;
      }
    }

    export interface Video {
      items?: Video.Items;

      kind?: string;
    }

    export namespace Video {
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

export interface VideoListResponse {
  data?: VideoListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace VideoListResponse {
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

export interface VideoListParams {
  limit?: string;

  page?: string;

  query?: string;

  sortBy?: string;
}

export namespace Videos {
  export import VideoRetrieveResponse = VideosAPI.VideoRetrieveResponse;
  export import VideoListResponse = VideosAPI.VideoListResponse;
  export import VideoListParams = VideosAPI.VideoListParams;
}
