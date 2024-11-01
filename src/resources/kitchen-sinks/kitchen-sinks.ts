// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as CookiesAPI from './cookies';
import {
  CookieCreateParams,
  CookieCreateResponse,
  CookieRemoveParams,
  CookieRemoveResponse,
  CookieRetrieveResponse,
  Cookies,
} from './cookies';

export class KitchenSinks extends APIResource {
  cookies: CookiesAPI.Cookies = new CookiesAPI.Cookies(this._client);

  /**
   * The API endpoint sends an image response in SVG format.
   *
   * When accessing this endpoint, the client will receive an image file in SVG
   * format as the response.
   */
  imageSvg(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/kitchen-sink/image/svg', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * The API endpoint sends an image response in JPEG format.
   *
   * When accessing this endpoint, the client will receive an image file in JPEG
   * format as the response.
   */
  imagesJpeg(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/kitchen-sink/image/jpeg', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * The API endpoint sends an image response in JPG format.
   *
   * When accessing this endpoint, the client will receive an image file in JPG
   * format as the response.
   */
  imagesJpg(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/kitchen-sink/image/jpg', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * The API endpoint sends an image response in PNG format.
   *
   * When accessing this endpoint, the client will receive an image file in PNG
   * format as the response.
   */
  imagesPng(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/kitchen-sink/image/png', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * The API endpoint sends an image response in WEBP format.
   *
   * When accessing this endpoint, the client will receive an image file in WEBP
   * format as the response.
   */
  imagesWebp(options?: Core.RequestOptions): Core.APIPromise<void> {
    return this._client.get('/kitchen-sink/image/webp', {
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * The API endpoint redirects the client to a URL specified in the query parameter.
   *
   * When accessing this endpoint, the client's browser will be automatically
   * redirected to the URL extracted from the query parameter.
   *
   * This functionality is useful when you need to redirect clients to a different
   * location or resource based on dynamic information included in the query
   * parameter. It allows for flexible navigation and routing within your application
   * or for redirecting to external resources.
   */
  redirectTo(query?: KitchenSinkRedirectToParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  redirectTo(options?: Core.RequestOptions): Core.APIPromise<void>;
  redirectTo(
    query: KitchenSinkRedirectToParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(query)) {
      return this.redirectTo({}, query);
    }
    return this._client.get('/kitchen-sink/redirect/to', {
      query,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * _Brotli encoding is a modern compression algorithm specifically designed for web
   * content compression. It provides advanced and efficient compression by utilizing
   * a combination of various techniques, including LZ77, Huffman coding, and context
   * modeling._
   *
   * The API endpoint returns a Brotli encoded response, which means the response
   * data is compressed using the Brotli compression algorithm.
   *
   * Brotli compression offers superior compression ratios compared to traditional
   * compression methods like GZIP, resulting in smaller file sizes and improved
   * network efficiency.
   *
   * The client will receive the compressed response and can decompress it using
   * Brotli decompression to obtain the original data.
   */
  responseBrotli(options?: Core.RequestOptions): Core.APIPromise<KitchenSinkResponseBrotliResponse> {
    return this._client.get('/kitchen-sink/response/brotli', options);
  }

  /**
   * _GZIP encoding is a compression technique used to reduce the size of data
   * transmitted over the network. It works by replacing repetitive or redundant
   * sequences of data with references, resulting in a compressed representation._
   *
   * The API endpoint returns a GZIP encoded response, providing a compressed version
   * of the requested resource.
   *
   * When accessing this endpoint, the response received will be encoded using the
   * GZIP compression algorithm, resulting in a smaller response size for efficient
   * transmission over the network.
   *
   * GZIP encoding reduces bandwidth usage and improves overall performance by
   * compressing the response data on the server-side and decompressing it on the
   * client-side.
   */
  responseGzip(options?: Core.RequestOptions): Core.APIPromise<KitchenSinkResponseGzipResponse> {
    return this._client.get('/kitchen-sink/response/gzip', options);
  }
}

export interface KitchenSinkResponseBrotliResponse {
  data?: KitchenSinkResponseBrotliResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace KitchenSinkResponseBrotliResponse {
  export interface Data {
    contentEncoding?: string;

    string?: string;
  }
}

export interface KitchenSinkResponseGzipResponse {
  data?: KitchenSinkResponseGzipResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace KitchenSinkResponseGzipResponse {
  export interface Data {
    contentEncoding?: string;

    string?: string;
  }
}

export interface KitchenSinkRedirectToParams {
  url?: string;
}

KitchenSinks.Cookies = Cookies;

export declare namespace KitchenSinks {
  export {
    type KitchenSinkResponseBrotliResponse as KitchenSinkResponseBrotliResponse,
    type KitchenSinkResponseGzipResponse as KitchenSinkResponseGzipResponse,
    type KitchenSinkRedirectToParams as KitchenSinkRedirectToParams,
  };

  export {
    Cookies as Cookies,
    type CookieCreateResponse as CookieCreateResponse,
    type CookieRetrieveResponse as CookieRetrieveResponse,
    type CookieRemoveResponse as CookieRemoveResponse,
    type CookieCreateParams as CookieCreateParams,
    type CookieRemoveParams as CookieRemoveParams,
  };
}
