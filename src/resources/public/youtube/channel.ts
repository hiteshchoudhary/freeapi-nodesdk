// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Channel extends APIResource {
  /**
   * This Channel Details API is your gateway to access comprehensive information
   * about a specific YouTube channel.
   *
   * By leveraging a static JSON file, you can effortlessly retrieve and explore
   * vital details, statistics, and metadata associated with the channel to build
   * stunning YouTube like channel page UI.
   *
   * **Disclaimer:**
   *
   * Data provided by the API is static and not real-time.
   *
   * This simplifies the process of developing a **YouTube clone**, allowing
   * developers to solely focus on UI design and creativity, without worrying about
   * complex API key configuration.
   */
  list(options?: Core.RequestOptions): Core.APIPromise<ChannelListResponse> {
    return this._client.get('/public/youtube/channel', options);
  }
}

export interface ChannelListResponse {
  data?: ChannelListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ChannelListResponse {
  export interface Data {
    info?: Data.Info;

    kind?: string;
  }

  export namespace Data {
    export interface Info {
      id?: string;

      brandingSettings?: Info.BrandingSettings;

      kind?: string;

      snippet?: Info.Snippet;

      statistics?: Info.Statistics;
    }

    export namespace Info {
      export interface BrandingSettings {
        channel?: BrandingSettings.Channel;

        image?: BrandingSettings.Image;
      }

      export namespace BrandingSettings {
        export interface Channel {
          country?: string;

          description?: string;

          keywords?: string;

          title?: string;

          unsubscribedTrailer?: string;
        }

        export interface Image {
          bannerExternalUrl?: string;
        }
      }

      export interface Snippet {
        country?: string;

        customUrl?: string;

        description?: string;

        localized?: Snippet.Localized;

        publishedAt?: string;

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
  }
}

export declare namespace Channel {
  export { type ChannelListResponse as ChannelListResponse };
}
