// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BooksAPI from './books';
import { BookListParams, BookListResponse, BookRandomResponse, BookRetrieveResponse, Books } from './books';
import * as QuotesAPI from './quotes';
import {
  QuoteListParams,
  QuoteListResponse,
  QuoteRandomResponse,
  QuoteRetrieveResponse,
  Quotes,
} from './quotes';
import * as StocksAPI from './stocks';
import {
  StockListParams,
  StockListResponse,
  StockRandomResponse,
  StockRetrieveResponse,
  Stocks,
} from './stocks';
import * as CatsAPI from './cats/cats';
import { CatListParams, CatListResponse, CatRetrieveResponse, Cats } from './cats/cats';
import * as DogsAPI from './dogs/dogs';
import { DogListParams, DogListResponse, DogRetrieveResponse, Dogs } from './dogs/dogs';
import * as MealsAPI from './meals/meals';
import { MealListParams, MealListResponse, MealRetrieveResponse, Meals } from './meals/meals';
import * as RandomJokesAPI from './random-jokes/random-jokes';
import {
  RandomJokeListParams,
  RandomJokeListResponse,
  RandomJokeRetrieveResponse,
  RandomJokes,
} from './random-jokes/random-jokes';
import * as RandomProductsAPI from './random-products/random-products';
import {
  RandomProductListParams,
  RandomProductListResponse,
  RandomProductRetrieveResponse,
  RandomProducts,
} from './random-products/random-products';
import * as RandomUsersAPI from './random-users/random-users';
import {
  RandomUserListParams,
  RandomUserListResponse,
  RandomUserRetrieveResponse,
  RandomUsers,
} from './random-users/random-users';
import * as YoutubeAPI from './youtube/youtube';
import { Youtube } from './youtube/youtube';

export class Public extends APIResource {
  randomUsers: RandomUsersAPI.RandomUsers = new RandomUsersAPI.RandomUsers(this._client);
  randomProducts: RandomProductsAPI.RandomProducts = new RandomProductsAPI.RandomProducts(this._client);
  randomJokes: RandomJokesAPI.RandomJokes = new RandomJokesAPI.RandomJokes(this._client);
  books: BooksAPI.Books = new BooksAPI.Books(this._client);
  stocks: StocksAPI.Stocks = new StocksAPI.Stocks(this._client);
  quotes: QuotesAPI.Quotes = new QuotesAPI.Quotes(this._client);
  meals: MealsAPI.Meals = new MealsAPI.Meals(this._client);
  dogs: DogsAPI.Dogs = new DogsAPI.Dogs(this._client);
  cats: CatsAPI.Cats = new CatsAPI.Cats(this._client);
  youtube: YoutubeAPI.Youtube = new YoutubeAPI.Youtube(this._client);
}

Public.RandomUsers = RandomUsers;
Public.RandomProducts = RandomProducts;
Public.RandomJokes = RandomJokes;
Public.Books = Books;
Public.Stocks = Stocks;
Public.Quotes = Quotes;
Public.Meals = Meals;
Public.Dogs = Dogs;
Public.Cats = Cats;
Public.Youtube = Youtube;

export declare namespace Public {
  export {
    RandomUsers as RandomUsers,
    type RandomUserRetrieveResponse as RandomUserRetrieveResponse,
    type RandomUserListResponse as RandomUserListResponse,
    type RandomUserListParams as RandomUserListParams,
  };

  export {
    RandomProducts as RandomProducts,
    type RandomProductRetrieveResponse as RandomProductRetrieveResponse,
    type RandomProductListResponse as RandomProductListResponse,
    type RandomProductListParams as RandomProductListParams,
  };

  export {
    RandomJokes as RandomJokes,
    type RandomJokeRetrieveResponse as RandomJokeRetrieveResponse,
    type RandomJokeListResponse as RandomJokeListResponse,
    type RandomJokeListParams as RandomJokeListParams,
  };

  export {
    Books as Books,
    type BookRetrieveResponse as BookRetrieveResponse,
    type BookListResponse as BookListResponse,
    type BookRandomResponse as BookRandomResponse,
    type BookListParams as BookListParams,
  };

  export {
    Stocks as Stocks,
    type StockRetrieveResponse as StockRetrieveResponse,
    type StockListResponse as StockListResponse,
    type StockRandomResponse as StockRandomResponse,
    type StockListParams as StockListParams,
  };

  export {
    Quotes as Quotes,
    type QuoteRetrieveResponse as QuoteRetrieveResponse,
    type QuoteListResponse as QuoteListResponse,
    type QuoteRandomResponse as QuoteRandomResponse,
    type QuoteListParams as QuoteListParams,
  };

  export {
    Meals as Meals,
    type MealRetrieveResponse as MealRetrieveResponse,
    type MealListResponse as MealListResponse,
    type MealListParams as MealListParams,
  };

  export {
    Dogs as Dogs,
    type DogRetrieveResponse as DogRetrieveResponse,
    type DogListResponse as DogListResponse,
    type DogListParams as DogListParams,
  };

  export {
    Cats as Cats,
    type CatRetrieveResponse as CatRetrieveResponse,
    type CatListResponse as CatListResponse,
    type CatListParams as CatListParams,
  };

  export { Youtube as Youtube };
}
