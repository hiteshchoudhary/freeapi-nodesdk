// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ChatsAPI from './chats';
import * as GroupAPI from './group';

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

export namespace Chats {
  export import ChatRemoveResponse = ChatsAPI.ChatRemoveResponse;
  export import Group = GroupAPI.Group;
  export import GroupCreateResponse = GroupAPI.GroupCreateResponse;
  export import GroupRetrieveResponse = GroupAPI.GroupRetrieveResponse;
  export import GroupUpdateResponse = GroupAPI.GroupUpdateResponse;
  export import GroupDeleteResponse = GroupAPI.GroupDeleteResponse;
  export import GroupLeaveResponse = GroupAPI.GroupLeaveResponse;
  export import GroupParticipantAddResponse = GroupAPI.GroupParticipantAddResponse;
  export import GroupParticipantRemoveResponse = GroupAPI.GroupParticipantRemoveResponse;
  export import GroupCreateParams = GroupAPI.GroupCreateParams;
  export import GroupUpdateParams = GroupAPI.GroupUpdateParams;
}
