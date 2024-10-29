// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as MealsAPI from './meals';
import * as MealAPI from './meal';

export class Meals extends APIResource {
  meal: MealAPI.Meal = new MealAPI.Meal(this._client);

  /**
   * The API endpoint retrieves a meal based on the provided meal ID in the path
   * variable.
   *
   * When accessing this endpoint and specifying a valid meal ID, you will receive a
   * response containing the details and information about the specific meal.
   */
  retrieve(mealId: string, options?: Core.RequestOptions): Core.APIPromise<MealRetrieveResponse> {
    return this._client.get(`/public/meals/${mealId}`, options);
  }

  /**
   * The API endpoint enables you to retrieve a list of meals.
   *
   * Upon accessing this endpoint, you will receive a response containing a
   * collection of meals.
   */
  list(query?: MealListParams, options?: Core.RequestOptions): Core.APIPromise<MealListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MealListResponse>;
  list(
    query: MealListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MealListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/meals', { query, ...options });
  }
}

export interface MealRetrieveResponse {
  data?: MealRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace MealRetrieveResponse {
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

    strTags?: string;

    strYoutube?: string;
  }
}

export interface MealListResponse {
  data?: MealListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace MealListResponse {
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

      strTags?: string | null;

      strYoutube?: string;
    }
  }
}

export interface MealListParams {
  limit?: string;

  page?: string;

  query?: string;
}

export namespace Meals {
  export import MealRetrieveResponse = MealsAPI.MealRetrieveResponse;
  export import MealListResponse = MealsAPI.MealListResponse;
  export import MealListParams = MealsAPI.MealListParams;
  export import Meal = MealAPI.Meal;
  export import MealRandomResponse = MealAPI.MealRandomResponse;
}
