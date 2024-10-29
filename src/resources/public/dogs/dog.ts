// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as DogAPI from './dog';

export class Dog extends APIResource {
  /**
   * The API endpoint returns a randomly selected dog object from a list.
   *
   * When accessing this endpoint, you will receive a response containing a dog
   * object randomly chosen from the available list.
   */
  random(options?: Core.RequestOptions): Core.APIPromise<DogRandomResponse> {
    return this._client.get('/public/dogs/dog/random', options);
  }
}

export interface DogRandomResponse {
  data?: DogRandomResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace DogRandomResponse {
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

export namespace Dog {
  export import DogRandomResponse = DogAPI.DogRandomResponse;
}
