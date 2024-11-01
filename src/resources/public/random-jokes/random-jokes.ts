// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as JokeAPI from './joke';
import { Joke, JokeRandomResponse } from './joke';

export class RandomJokes extends APIResource {
  joke: JokeAPI.Joke = new JokeAPI.Joke(this._client);

  /**
   * The API endpoint allows you to retrieve a joke based on the specified joke ID.
   *
   * When accessing this endpoint and providing a valid joke ID as a parameter, you
   * will receive a response containing the joke associated with the provided ID.
   */
  retrieve(jokeId: string, options?: Core.RequestOptions): Core.APIPromise<RandomJokeRetrieveResponse> {
    return this._client.get(`/public/randomjokes/${jokeId}`, options);
  }

  /**
   * The API endpoint retrieves a list of jokes.
   * When accessing this endpoint, you will receive a response containing a
   * collection of jokes.
   *
   * This functionality is useful for retrieving multiple jokes at once, enabling you
   * to incorporate humor and amusement into your application or provide
   * entertainment to users.
   */
  list(query?: RandomJokeListParams, options?: Core.RequestOptions): Core.APIPromise<RandomJokeListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<RandomJokeListResponse>;
  list(
    query: RandomJokeListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RandomJokeListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/randomjokes', { query, ...options });
  }
}

export interface RandomJokeRetrieveResponse {
  data?: RandomJokeRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace RandomJokeRetrieveResponse {
  export interface Data {
    id?: number;

    categories?: Array<unknown>;

    content?: string;
  }
}

export interface RandomJokeListResponse {
  data?: RandomJokeListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace RandomJokeListResponse {
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

      categories?: Array<string>;

      content?: string;
    }
  }
}

export interface RandomJokeListParams {
  inc?: string;

  limit?: string;

  page?: string;

  query?: string;
}

RandomJokes.Joke = Joke;

export declare namespace RandomJokes {
  export {
    type RandomJokeRetrieveResponse as RandomJokeRetrieveResponse,
    type RandomJokeListResponse as RandomJokeListResponse,
    type RandomJokeListParams as RandomJokeListParams,
  };

  export { Joke as Joke, type JokeRandomResponse as JokeRandomResponse };
}
