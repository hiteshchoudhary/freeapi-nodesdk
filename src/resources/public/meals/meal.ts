// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MealAPI from './meal';

export class Meal extends APIResource {
  /**
   * The API endpoint returns a random meal object from a given list of meals.
   *
   * When accessing this endpoint, you will receive a response containing a randomly
   * selected meal.
   */
  random(options?: Core.RequestOptions): Core.APIPromise<MealRandomResponse> {
    return this._client.get('/public/meals/meal/random', options);
  }
}

export interface MealRandomResponse {
  data?: MealRandomResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace MealRandomResponse {
  export interface Data {
    id?: number;

    dateModified?: unknown | null;

    idMeal?: string;

    strArea?: string;

    strCategory?: string;

    strCreativeCommonsConfirmed?: unknown | null;

    strDrinkAlternate?: unknown | null;

    strImageSource?: unknown | null;

    strIngredient1?: string;

    strIngredient10?: string;

    strIngredient11?: string;

    strIngredient12?: string;

    strIngredient13?: string;

    strIngredient14?: string;

    strIngredient15?: string;

    strIngredient16?: string;

    strIngredient17?: string;

    strIngredient18?: string;

    strIngredient19?: string;

    strIngredient2?: string;

    strIngredient20?: string;

    strIngredient3?: string;

    strIngredient4?: string;

    strIngredient5?: string;

    strIngredient6?: string;

    strIngredient7?: string;

    strIngredient8?: string;

    strIngredient9?: string;

    strInstructions?: string;

    strMeal?: string;

    strMealThumb?: string;

    strMeasure1?: string;

    strMeasure10?: string;

    strMeasure11?: string;

    strMeasure12?: string;

    strMeasure13?: string;

    strMeasure14?: string;

    strMeasure15?: string;

    strMeasure16?: string;

    strMeasure17?: string;

    strMeasure18?: string;

    strMeasure19?: string;

    strMeasure2?: string;

    strMeasure20?: string;

    strMeasure3?: string;

    strMeasure4?: string;

    strMeasure5?: string;

    strMeasure6?: string;

    strMeasure7?: string;

    strMeasure8?: string;

    strMeasure9?: string;

    strSource?: string;

    strTags?: unknown | null;

    strYoutube?: string;
  }
}

export namespace Meal {
  export import MealRandomResponse = MealAPI.MealRandomResponse;
}
