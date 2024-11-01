// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Joke extends APIResource {
  /**
   * The API endpoint returns a random joke from a list of jokes.
   *
   * When accessing this endpoint, you will receive a response containing a randomly
   * selected joke.
   */
  random(options?: Core.RequestOptions): Core.APIPromise<JokeRandomResponse> {
    return this._client.get('/public/randomjokes/joke/random', options);
  }
}

export interface JokeRandomResponse {
  data?: JokeRandomResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace JokeRandomResponse {
  export interface Data {
    id?: number;

    categories?: Array<unknown>;

    content?: string;
  }
}

export declare namespace Joke {
  export { type JokeRandomResponse as JokeRandomResponse };
}
