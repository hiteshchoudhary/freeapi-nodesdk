// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as StocksAPI from './stocks';

export class Stocks extends APIResource {
  /**
   * The API endpoint retrieves a stock based on the Symbol as ID provided as a path
   * variable.
   *
   * By accessing this endpoint and specifying a valid stock symbol, you will receive
   * a response containing the details of the corresponding stock.
   */
  retrieve(stockSymbol: string, options?: Core.RequestOptions): Core.APIPromise<StockRetrieveResponse> {
    return this._client.get(`/public/stocks/${stockSymbol}`, options);
  }

  /**
   * The API endpoint allows you to retrieve a list of stocks listed on NSE [National
   * Stock Exchange of India]. The data you get is a snapshot taken on 28th Dec 2023
   * & not live from stock exchange. Upon accessing this endpoint, you will receive a
   * response containing a collection of randomly selected stocks.
   */
  list(query?: StockListParams, options?: Core.RequestOptions): Core.APIPromise<StockListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<StockListResponse>;
  list(
    query: StockListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StockListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/public/stocks', { query, ...options });
  }

  /**
   * The API endpoint returns a single random stock from a list of stocks.
   *
   * Upon accessing this endpoint, you will receive a response containing the details
   * of a randomly selected stock.
   */
  random(options?: Core.RequestOptions): Core.APIPromise<StockRandomResponse> {
    return this._client.get('/public/stocks/stock/random', options);
  }
}

export interface StockRetrieveResponse {
  data?: StockRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace StockRetrieveResponse {
  export interface Data {
    BookValue?: string;

    CurrentPrice?: string;

    DividendYield?: string;

    FaceValue?: string;

    HighLow?: string;

    ISIN?: string;

    ListingDate?: string;

    MarketCap?: string;

    Name?: string;

    ROCE?: string;

    ROE?: string;

    StockPE?: string;

    Symbol?: string;
  }
}

export interface StockListResponse {
  data?: StockListResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace StockListResponse {
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
      BookValue?: string;

      CurrentPrice?: string;

      DividendYield?: string;

      FaceValue?: string;

      HighLow?: string;

      ISIN?: string;

      ListingDate?: string;

      MarketCap?: string;

      Name?: string;

      ROCE?: string;

      ROE?: string;

      StockPE?: string;

      Symbol?: string;
    }
  }
}

export interface StockRandomResponse {
  data?: StockRandomResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace StockRandomResponse {
  export interface Data {
    BookValue?: string;

    CurrentPrice?: string;

    DividendYield?: string;

    FaceValue?: string;

    HighLow?: string;

    ISIN?: string;

    ListingDate?: string;

    MarketCap?: string;

    Name?: string;

    ROCE?: string;

    ROE?: string;

    StockPE?: string;

    Symbol?: string;
  }
}

export interface StockListParams {
  inc?: string;

  limit?: string;

  page?: string;

  query?: string;
}

export namespace Stocks {
  export import StockRetrieveResponse = StocksAPI.StockRetrieveResponse;
  export import StockListResponse = StocksAPI.StockListResponse;
  export import StockRandomResponse = StocksAPI.StockRandomResponse;
  export import StockListParams = StocksAPI.StockListParams;
}
