// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import * as Core from '../core';

export class Todos extends APIResource {
  /**
   * The "Create Todo" API endpoint allows you to create a new todo item by providing
   * the title and description as a request body.
   *
   * By accessing this endpoint and providing the necessary information, a new todo
   * item will be created in the system.
   */
  create(body?: TodoCreateParams, options?: Core.RequestOptions): Core.APIPromise<TodoCreateResponse>;
  create(options?: Core.RequestOptions): Core.APIPromise<TodoCreateResponse>;
  create(
    body: TodoCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TodoCreateResponse> {
    if (isRequestOptions(body)) {
      return this.create({}, body);
    }
    return this._client.post('/todos/', { body, ...options });
  }

  /**
   * The API endpoint retrieves a specific todo item based on the todo ID provided as
   * a path variable in the URL.
   *
   * When accessing this endpoint and specifying a valid todo ID in the URL, you will
   * receive a response containing the details of the corresponding todo item.
   */
  retrieve(todoId: string, options?: Core.RequestOptions): Core.APIPromise<TodoRetrieveResponse> {
    return this._client.get(`/todos/${todoId}`, options);
  }

  /**
   * The API endpoint is responsible for updating a todo based on the provided todo
   * ID in the URL path variable.
   *
   * When accessing this endpoint and providing the updated todo title and
   * description in the request body, the corresponding todo with the specified ID
   * will be modified accordingly.
   */
  update(
    todoId: string,
    body?: TodoUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TodoUpdateResponse>;
  update(todoId: string, options?: Core.RequestOptions): Core.APIPromise<TodoUpdateResponse>;
  update(
    todoId: string,
    body: TodoUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TodoUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(todoId, {}, body);
    }
    return this._client.patch(`/todos/${todoId}`, { body, ...options });
  }

  /**
   * The API endpoint allows you to retrieve all the added todos.
   *
   * When accessing this endpoint, you will receive a response containing a list of
   * all the todos that have been added.
   */
  list(query?: TodoListParams, options?: Core.RequestOptions): Core.APIPromise<TodoListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TodoListResponse>;
  list(
    query: TodoListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TodoListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.get('/todos', { query, ...options });
  }

  /**
   * The API endpoint is responsible for deleting a todo item based on the provided
   * todoID in the path variable.
   *
   * When accessing this endpoint and specifying the todoID in the URL, the
   * corresponding todo item will be deleted from the system.
   */
  delete(todoId: string, options?: Core.RequestOptions): Core.APIPromise<TodoDeleteResponse> {
    return this._client.delete(`/todos/${todoId}`, options);
  }

  /**
   * The API endpoint is responsible for toggling the done status of a todo item.
   *
   * When accessing this endpoint and providing the necessary data, you can update
   * the completion status of a specific todo item, marking it as either done or
   * undone based on its current status.
   */
  toggleStatus(todoId: string, options?: Core.RequestOptions): Core.APIPromise<TodoToggleStatusResponse> {
    return this._client.patch(`/todos/toggle/status/${todoId}`, options);
  }
}

export interface TodoCreateResponse {
  data?: TodoCreateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace TodoCreateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    createdAt?: string;

    description?: string;

    isDone?: boolean;

    title?: string;

    updatedAt?: string;
  }
}

export interface TodoRetrieveResponse {
  data?: TodoRetrieveResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace TodoRetrieveResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    createdAt?: string;

    description?: string;

    isDone?: boolean;

    title?: string;

    updatedAt?: string;
  }
}

export interface TodoUpdateResponse {
  data?: TodoUpdateResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace TodoUpdateResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    createdAt?: string;

    description?: string;

    isDone?: boolean;

    title?: string;

    updatedAt?: string;
  }
}

export interface TodoListResponse {
  data?: Array<TodoListResponse.Data>;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace TodoListResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    createdAt?: string;

    description?: string;

    isDone?: boolean;

    title?: string;

    updatedAt?: string;
  }
}

export interface TodoDeleteResponse {
  data?: TodoDeleteResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace TodoDeleteResponse {
  export interface Data {
    deletedTodo?: Data.DeletedTodo;
  }

  export namespace Data {
    export interface DeletedTodo {
      __v?: number;

      _id?: string;

      createdAt?: string;

      description?: string;

      isDone?: boolean;

      title?: string;

      updatedAt?: string;
    }
  }
}

export interface TodoToggleStatusResponse {
  data?: TodoToggleStatusResponse.Data;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace TodoToggleStatusResponse {
  export interface Data {
    __v?: number;

    _id?: string;

    createdAt?: string;

    description?: string;

    isComplete?: boolean;

    title?: string;

    updatedAt?: string;
  }
}

export interface TodoCreateParams {
  description?: string;

  title?: string;
}

export interface TodoUpdateParams {
  description?: string;

  title?: string;
}

export interface TodoListParams {
  complete?: string;

  query?: string;
}

export declare namespace Todos {
  export {
    type TodoCreateResponse as TodoCreateResponse,
    type TodoRetrieveResponse as TodoRetrieveResponse,
    type TodoUpdateResponse as TodoUpdateResponse,
    type TodoListResponse as TodoListResponse,
    type TodoDeleteResponse as TodoDeleteResponse,
    type TodoToggleStatusResponse as TodoToggleStatusResponse,
    type TodoCreateParams as TodoCreateParams,
    type TodoUpdateParams as TodoUpdateParams,
    type TodoListParams as TodoListParams,
  };
}
