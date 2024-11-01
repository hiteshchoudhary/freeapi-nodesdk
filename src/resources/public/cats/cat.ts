// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Cat extends APIResource {
  /**
   * The API endpoint returns a randomly selected cat object from a list.
   *
   * When accessing this endpoint, you will receive a response containing a cat
   * object randomly chosen from the available list.
   */
  random(options?: Core.RequestOptions): Core.APIPromise<CatRandomResponse> {
    return this._client.get('/public/cats/cat/random', options);
  }
}

export interface CatRandomResponse {
  data?: CatRandomResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CatRandomResponse {
  export interface Data {
    id?: number;

    adaptability?: number;

    affection_level?: number;

    cfa_url?: string;

    child_friendly?: number;

    country_code?: string;

    country_codes?: string;

    description?: string;

    dog_friendly?: number;

    energy_level?: number;

    experimental?: number;

    grooming?: number;

    hairless?: number;

    health_issues?: number;

    hypoallergenic?: number;

    image?: string;

    indoor?: number;

    intelligence?: number;

    life_span?: string;

    name?: string;

    natural?: number;

    origin?: string;

    rare?: number;

    rex?: number;

    shedding_level?: number;

    short_legs?: number;

    social_needs?: number;

    stranger_friendly?: number;

    suppressed_tail?: number;

    temperament?: string;

    vcahospitals_url?: string;

    vetstreet_url?: string;

    vocalisation?: number;

    weight?: Data.Weight;

    wikipedia_url?: string;
  }

  export namespace Data {
    export interface Weight {
      imperial?: string;

      metric?: string;
    }
  }
}

export declare namespace Cat {
  export { type CatRandomResponse as CatRandomResponse };
}
