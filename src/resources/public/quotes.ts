// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Quotes extends APIResource {
  /**
   * The API endpoint enables you to retrieve a specific quote based on the quote ID
   * provided in the path variable.
   *
   * When accessing this endpoint and providing a valid quote ID, you will receive a
   * response containing the quote corresponding to that ID.
   */
  retrieve(quoteId: string, options?: Core.RequestOptions): Core.APIPromise<QuoteRetrieveResponse> {
    return this._client.get(`/public/quotes/${quoteId}`, options);
  }

  /**
   * The API endpoint allows you to retrieve a list of quotes.
   *
   * When accessing this endpoint, you will receive a response containing a
   * collection of quotes.
   */
  list(query?: QuoteListParams, options?: Core.RequestOptions): Core.APIPromise<QuoteListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<QuoteListResponse>;
  list(
    query: QuoteListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<QuoteListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/quotes', { query, ...options });
  }

  /**
   * The API endpoint returns a random quote from a list of quotes.
   *
   * When accessing this endpoint, you will receive a response containing a randomly
   * selected quote.
   */
  random(options?: Core.RequestOptions): Core.APIPromise<QuoteRandomResponse> {
    return this._client.get('/public/quotes/quote/random', options);
  }
}

export interface QuoteRetrieveResponse {
  data?: QuoteRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace QuoteRetrieveResponse {
  export interface Data {
    id?: number;

    author?: string;

    authorSlug?: string;

    content?: string;

    dateAdded?: string;

    dateModified?: string;

    length?: number;

    tags?: Array<string>;
  }
}

export interface QuoteListResponse {
  data?: QuoteListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace QuoteListResponse {
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
      id?: number;

      author?: string;

      authorSlug?: string;

      content?: string;

      dateAdded?: string;

      dateModified?: string;

      length?: number;

      tags?: Array<unknown>;
    }
  }
}

export interface QuoteRandomResponse {
  data?: QuoteRandomResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace QuoteRandomResponse {
  export interface Data {
    id?: number;

    author?: string;

    authorSlug?: string;

    content?: string;

    dateAdded?: string;

    dateModified?: string;

    length?: number;

    tags?: Array<string>;
  }
}

export interface QuoteListParams {
  limit?: string;

  page?: string;

  query?: string;
}

export declare namespace Quotes {
  export {
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteListResponse as QuoteListResponse,
    type QuoteRandomResponse as QuoteRandomResponse,
    type QuoteListParams as QuoteListParams,
  };
}
