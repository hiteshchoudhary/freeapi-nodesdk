// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ChatAppAPI from './chat-app';

export class ChatApp extends APIResource {
  /**
   * This API endpoint is responsible for populating all the essential entities
   * required for a chat app service in the database. It provides a convenient way
   * for developers to initialize the chat app with dummy or sample data for testing
   * or development purposes.
   */
  create(options?: Core.RequestOptions): Core.APIPromise<ChatAppCreateResponse> {
    return this._client.post('/seed/chat-app', options);
  }
}

export interface ChatAppCreateResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

export namespace ChatApp {
  export import ChatAppCreateResponse = ChatAppAPI.ChatAppCreateResponse;
}
