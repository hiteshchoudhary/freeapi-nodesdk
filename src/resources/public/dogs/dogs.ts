// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as DogAPI from './dog';
import { Dog, DogRandomResponse } from './dog';

export class Dogs extends APIResource {
  dog: DogAPI.Dog = new DogAPI.Dog(this._client);

  /**
   * The API endpoint retrieves a dog object based on the provided dog ID in the path
   * variable.
   *
   * By accessing this endpoint with a valid dog ID, you will receive a response
   * containing the details and information specific to the dog with the
   * corresponding ID.
   */
  retrieve(dogId: string, options?: Core.RequestOptions): Core.APIPromise<DogRetrieveResponse> {
    return this._client.get(`/public/dogs/${dogId}`, options);
  }

  /**
   * The API endpoint retrieves a list of dog objects.
   *
   * When accessing this endpoint, you will receive a response containing a
   * collection of dog objects.
   *
   * Each dog object represents a specific dog breed and includes relevant details
   * such as breed name, characteristics, temperament, and images.
   */
  list(query?: DogListParams, options?: Core.RequestOptions): Core.APIPromise<DogListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DogListResponse>;
  list(
    query: DogListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DogListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/dogs', { query, ...options });
  }
}

export interface DogRetrieveResponse {
  data?: DogRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace DogRetrieveResponse {
  export interface Data {
    id?: number;

    bred_for?: string;

    breed_group?: string;

    height?: Data.Height;

    image?: Data.Image;

    life_span?: string;

    name?: string;

    reference_image_id?: string;

    temperament?: string;

    weight?: Data.Weight;
  }

  export namespace Data {
    export interface Height {
      imperial?: string;

      metric?: string;
    }

    export interface Image {
      id?: string;

      height?: number;

      url?: string;

      width?: number;
    }

    export interface Weight {
      imperial?: string;

      metric?: string;
    }
  }
}

export interface DogListResponse {
  data?: DogListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace DogListResponse {
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

      bred_for?: string;

      breed_group?: string;

      height?: Data.Height;

      image?: Data.Image;

      life_span?: string;

      name?: string;

      origin?: string;

      reference_image_id?: string;

      temperament?: string;

      weight?: Data.Weight;
    }

    export namespace Data {
      export interface Height {
        imperial?: string;

        metric?: string;
      }

      export interface Image {
        id?: string;

        height?: number;

        url?: string;

        width?: number;
      }

      export interface Weight {
        imperial?: string;

        metric?: string;
      }
    }
  }
}

export interface DogListParams {
  limit?: string;

  page?: string;

  query?: string;
}

Dogs.Dog = Dog;

export declare namespace Dogs {
  export {
    type DogRetrieveResponse as DogRetrieveResponse,
    type DogListResponse as DogListResponse,
    type DogListParams as DogListParams,
  };

  export { Dog as Dog, type DogRandomResponse as DogRandomResponse };
}
