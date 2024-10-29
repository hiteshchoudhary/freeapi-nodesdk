// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ChatAppAPI from './chat-app';
import * as EcommerceAPI from './ecommerce';
import * as GeneratedCredentialsAPI from './generated-credentials';
import * as SocialMediaAPI from './social-media';
import * as TodosAPI from './todos';

export class Seed extends APIResource {
  generatedCredentials: GeneratedCredentialsAPI.GeneratedCredentials =
    new GeneratedCredentialsAPI.GeneratedCredentials(this._client);
  todos: TodosAPI.Todos = new TodosAPI.Todos(this._client);
  ecommerce: EcommerceAPI.Ecommerce = new EcommerceAPI.Ecommerce(this._client);
  socialMedia: SocialMediaAPI.SocialMedia = new SocialMediaAPI.SocialMedia(this._client);
  chatApp: ChatAppAPI.ChatApp = new ChatAppAPI.ChatApp(this._client);
}

export namespace Seed {
  export import GeneratedCredentials = GeneratedCredentialsAPI.GeneratedCredentials;
  export import GeneratedCredentialListResponse = GeneratedCredentialsAPI.GeneratedCredentialListResponse;
  export import Todos = TodosAPI.Todos;
  export import TodoCreateResponse = TodosAPI.TodoCreateResponse;
  export import Ecommerce = EcommerceAPI.Ecommerce;
  export import EcommerceCreateResponse = EcommerceAPI.EcommerceCreateResponse;
  export import SocialMedia = SocialMediaAPI.SocialMedia;
  export import SocialMediaCreateResponse = SocialMediaAPI.SocialMediaCreateResponse;
  export import ChatApp = ChatAppAPI.ChatApp;
  export import ChatAppCreateResponse = ChatAppAPI.ChatAppCreateResponse;
}
