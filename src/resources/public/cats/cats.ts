// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as CatsAPI from './cats';
import * as CatAPI from './cat';

export class Cats extends APIResource {
  cat: CatAPI.Cat = new CatAPI.Cat(this._client);

  /**
   * The API endpoint retrieves a cat object based on the provided cat ID in the path
   * variable.
   *
   * By accessing this endpoint with a valid cat ID, you will receive a response
   * containing the details and information specific to the cat with the
   * corresponding ID.
   */
  retrieve(catId: string, options?: Core.RequestOptions): Core.APIPromise<CatRetrieveResponse> {
    return this._client.get(`/public/cats/${catId}`, options);
  }

  /**
   * The API endpoint retrieves a list of cat objects.
   *
   * When accessing this endpoint, you will receive a response containing a
   * collection of cat objects.
   *
   * Each dog object represents a specific cat breed and includes relevant details
   * such as name, characteristics, temperament, and images.
   */
  list(query?: CatListParams, options?: Core.RequestOptions): Core.APIPromise<CatListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CatListResponse>;
  list(
    query: CatListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CatListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/cats', { query, ...options });
  }
}

export interface CatRetrieveResponse {
  data?: CatRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CatRetrieveResponse {
  export interface Data {
    id?: number;

    adaptability?: number;

    affection_level?: number;

    alt_names?: string;

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

    lap?: number;

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

export interface CatListResponse {
  data?: CatListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace CatListResponse {
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

      adaptability?: number;

      affection_level?: number;

      alt_names?: string;

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

      lap?: number;

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
}

export interface CatListParams {
  limit?: string;

  page?: string;

  query?: string;
}

export namespace Cats {
  export import CatRetrieveResponse = CatsAPI.CatRetrieveResponse;
  export import CatListResponse = CatsAPI.CatListResponse;
  export import CatListParams = CatsAPI.CatListParams;
  export import Cat = CatAPI.Cat;
  export import CatRandomResponse = CatAPI.CatRandomResponse;
}
