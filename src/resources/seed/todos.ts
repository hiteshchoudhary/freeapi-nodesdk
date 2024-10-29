// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as TodosAPI from './todos';

export class Todos extends APIResource {
  /**
   * This API endpoint is responsible for populating the database with dummy todo
   * items.
   *
   * It allows developers to easily seed the database with a set of predefined todos
   * for testing or development purposes.
   */
  create(options?: Core.RequestOptions): Core.APIPromise<TodoCreateResponse> {
    return this._client.post('/seed/todos', options);
  }
}

export interface TodoCreateResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace Todos {
  export import TodoCreateResponse = TodosAPI.TodoCreateResponse;
}
