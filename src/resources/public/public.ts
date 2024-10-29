// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as BooksAPI from './books';
import * as QuotesAPI from './quotes';
import * as StocksAPI from './stocks';
import * as CatsAPI from './cats/cats';
import * as DogsAPI from './dogs/dogs';
import * as MealsAPI from './meals/meals';
import * as RandomJokesAPI from './random-jokes/random-jokes';
import * as RandomProductsAPI from './random-products/random-products';
import * as RandomUsersAPI from './random-users/random-users';
import * as YoutubeAPI from './youtube/youtube';

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

export namespace Public {
  export import RandomUsers = RandomUsersAPI.RandomUsers;
  export import RandomUserRetrieveResponse = RandomUsersAPI.RandomUserRetrieveResponse;
  export import RandomUserListResponse = RandomUsersAPI.RandomUserListResponse;
  export import RandomUserListParams = RandomUsersAPI.RandomUserListParams;
  export import RandomProducts = RandomProductsAPI.RandomProducts;
  export import RandomProductRetrieveResponse = RandomProductsAPI.RandomProductRetrieveResponse;
  export import RandomProductListResponse = RandomProductsAPI.RandomProductListResponse;
  export import RandomProductListParams = RandomProductsAPI.RandomProductListParams;
  export import RandomJokes = RandomJokesAPI.RandomJokes;
  export import RandomJokeRetrieveResponse = RandomJokesAPI.RandomJokeRetrieveResponse;
  export import RandomJokeListResponse = RandomJokesAPI.RandomJokeListResponse;
  export import RandomJokeListParams = RandomJokesAPI.RandomJokeListParams;
  export import Books = BooksAPI.Books;
  export import BookRetrieveResponse = BooksAPI.BookRetrieveResponse;
  export import BookListResponse = BooksAPI.BookListResponse;
  export import BookRandomResponse = BooksAPI.BookRandomResponse;
  export import BookListParams = BooksAPI.BookListParams;
  export import Stocks = StocksAPI.Stocks;
  export import StockRetrieveResponse = StocksAPI.StockRetrieveResponse;
  export import StockListResponse = StocksAPI.StockListResponse;
  export import StockRandomResponse = StocksAPI.StockRandomResponse;
  export import StockListParams = StocksAPI.StockListParams;
  export import Quotes = QuotesAPI.Quotes;
  export import QuoteRetrieveResponse = QuotesAPI.QuoteRetrieveResponse;
  export import QuoteListResponse = QuotesAPI.QuoteListResponse;
  export import QuoteRandomResponse = QuotesAPI.QuoteRandomResponse;
  export import QuoteListParams = QuotesAPI.QuoteListParams;
  export import Meals = MealsAPI.Meals;
  export import MealRetrieveResponse = MealsAPI.MealRetrieveResponse;
  export import MealListResponse = MealsAPI.MealListResponse;
  export import MealListParams = MealsAPI.MealListParams;
  export import Dogs = DogsAPI.Dogs;
  export import DogRetrieveResponse = DogsAPI.DogRetrieveResponse;
  export import DogListResponse = DogsAPI.DogListResponse;
  export import DogListParams = DogsAPI.DogListParams;
  export import Cats = CatsAPI.Cats;
  export import CatRetrieveResponse = CatsAPI.CatRetrieveResponse;
  export import CatListResponse = CatsAPI.CatListResponse;
  export import CatListParams = CatsAPI.CatListParams;
  export import Youtube = YoutubeAPI.Youtube;
}
