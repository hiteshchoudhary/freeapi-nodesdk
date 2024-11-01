// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as GroupAPI from './group';
import {
  Group,
  GroupCreateParams,
  GroupCreateResponse,
  GroupDeleteResponse,
  GroupLeaveResponse,
  GroupParticipantAddResponse,
  GroupParticipantRemoveResponse,
  GroupRetrieveResponse,
  GroupUpdateParams,
  GroupUpdateResponse,
} from './group';

export class Chats extends APIResource {
  group: GroupAPI.Group = new GroupAPI.Group(this._client);

  /**
   * This API endpoint empowers logged-in users to seamlessly delete a one-on-one
   * chat conversation in which they are a participant.
   *
   * By sending a `DELETE` request to this endpoint with the relevant `chatId`, users
   * can effectively remove the specified one-on-one chat, thereby enhancing their
   * control over their chat interactions and facilitating a streamlined and
   * personalized messaging experience.
   */
  remove(chatId: string, options?: Core.RequestOptions): Core.APIPromise<ChatRemoveResponse> {
    return this._client.delete(`/chat-app/chats/remove/${chatId}`, options);
  }
}

export interface ChatRemoveResponse {
  data?: unknown;

  message?: string;

  statusCode?: number;

  success?: boolean;
}

Chats.Group = Group;

export declare namespace Chats {
  export { type ChatRemoveResponse as ChatRemoveResponse };

  export {
    Group as Group,
    type GroupCreateResponse as GroupCreateResponse,
    type GroupRetrieveResponse as GroupRetrieveResponse,
    type GroupUpdateResponse as GroupUpdateResponse,
    type GroupDeleteResponse as GroupDeleteResponse,
    type GroupLeaveResponse as GroupLeaveResponse,
    type GroupParticipantAddResponse as GroupParticipantAddResponse,
    type GroupParticipantRemoveResponse as GroupParticipantRemoveResponse,
    type GroupCreateParams as GroupCreateParams,
    type GroupUpdateParams as GroupUpdateParams,
  };
}
