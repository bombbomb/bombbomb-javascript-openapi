/**
 * BombBomb
 * We make it easy to build relationships using simple videos.
 *
 * OpenAPI spec version: 2.0.24005
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

(function(factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BBWebHook', 'model/Curriculum', 'model/CurriculumUserProgress', 'model/CurriculumWithProgress', 'model/InlineResponse200', 'model/InlineResponse200Items', 'model/JerichoConfiguration', 'model/JerichoPerformance', 'model/ModelString', 'model/OAuthClient', 'model/PromptBot', 'model/SignUploadRequest', 'model/SignUploadResponse', 'model/TeamPublicRepresentation', 'model/VideoEmailPrompt', 'model/VideoEncodingStatusResponse', 'model/VideoPublicRepresentation', 'model/VideoRecorderMethodResponse', 'api/AccountsApi', 'api/AutomationsApi', 'api/ContactsApi', 'api/CurriculumApi', 'api/EmailsApi', 'api/FilesApi', 'api/ListsApi', 'api/OrdersApi', 'api/PromptsApi', 'api/SocialsApi', 'api/TeamsApi', 'api/UtilitiesApi', 'api/VideosApi', 'api/WebhooksApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BBWebHook'), require('./model/Curriculum'), require('./model/CurriculumUserProgress'), require('./model/CurriculumWithProgress'), require('./model/InlineResponse200'), require('./model/InlineResponse200Items'), require('./model/JerichoConfiguration'), require('./model/JerichoPerformance'), require('./model/ModelString'), require('./model/OAuthClient'), require('./model/PromptBot'), require('./model/SignUploadRequest'), require('./model/SignUploadResponse'), require('./model/TeamPublicRepresentation'), require('./model/VideoEmailPrompt'), require('./model/VideoEncodingStatusResponse'), require('./model/VideoPublicRepresentation'), require('./model/VideoRecorderMethodResponse'), require('./api/AccountsApi'), require('./api/AutomationsApi'), require('./api/ContactsApi'), require('./api/CurriculumApi'), require('./api/EmailsApi'), require('./api/FilesApi'), require('./api/ListsApi'), require('./api/OrdersApi'), require('./api/PromptsApi'), require('./api/SocialsApi'), require('./api/TeamsApi'), require('./api/UtilitiesApi'), require('./api/VideosApi'), require('./api/WebhooksApi'));
  }
}(function(ApiClient, BBWebHook, Curriculum, CurriculumUserProgress, CurriculumWithProgress, InlineResponse200, InlineResponse200Items, JerichoConfiguration, JerichoPerformance, ModelString, OAuthClient, PromptBot, SignUploadRequest, SignUploadResponse, TeamPublicRepresentation, VideoEmailPrompt, VideoEncodingStatusResponse, VideoPublicRepresentation, VideoRecorderMethodResponse, AccountsApi, AutomationsApi, ContactsApi, CurriculumApi, EmailsApi, FilesApi, ListsApi, OrdersApi, PromptsApi, SocialsApi, TeamsApi, UtilitiesApi, VideosApi, WebhooksApi) {
  'use strict';

  /**
   * We_make_it_easy_to_build_relationships_using_simple_videos_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var Bombbomb = require('index'); // See note below*.
   * var xxxSvc = new Bombbomb.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new Bombbomb.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
   * and put the application logic within the callback function.</em>
   * </p>
   * <p>
   * A non-AMD browser application (discouraged) might do something like this:
   * <pre>
   * var xxxSvc = new Bombbomb.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new Bombbomb.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version 2.0.24005
   */
  var exports = {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient: ApiClient,
    /**
     * The BBWebHook model constructor.
     * @property {module:model/BBWebHook}
     */
    BBWebHook: BBWebHook,
    /**
     * The Curriculum model constructor.
     * @property {module:model/Curriculum}
     */
    Curriculum: Curriculum,
    /**
     * The CurriculumUserProgress model constructor.
     * @property {module:model/CurriculumUserProgress}
     */
    CurriculumUserProgress: CurriculumUserProgress,
    /**
     * The CurriculumWithProgress model constructor.
     * @property {module:model/CurriculumWithProgress}
     */
    CurriculumWithProgress: CurriculumWithProgress,
    /**
     * The InlineResponse200 model constructor.
     * @property {module:model/InlineResponse200}
     */
    InlineResponse200: InlineResponse200,
    /**
     * The InlineResponse200Items model constructor.
     * @property {module:model/InlineResponse200Items}
     */
    InlineResponse200Items: InlineResponse200Items,
    /**
     * The JerichoConfiguration model constructor.
     * @property {module:model/JerichoConfiguration}
     */
    JerichoConfiguration: JerichoConfiguration,
    /**
     * The JerichoPerformance model constructor.
     * @property {module:model/JerichoPerformance}
     */
    JerichoPerformance: JerichoPerformance,
    /**
     * The ModelString model constructor.
     * @property {module:model/ModelString}
     */
    ModelString: ModelString,
    /**
     * The OAuthClient model constructor.
     * @property {module:model/OAuthClient}
     */
    OAuthClient: OAuthClient,
    /**
     * The PromptBot model constructor.
     * @property {module:model/PromptBot}
     */
    PromptBot: PromptBot,
    /**
     * The SignUploadRequest model constructor.
     * @property {module:model/SignUploadRequest}
     */
    SignUploadRequest: SignUploadRequest,
    /**
     * The SignUploadResponse model constructor.
     * @property {module:model/SignUploadResponse}
     */
    SignUploadResponse: SignUploadResponse,
    /**
     * The TeamPublicRepresentation model constructor.
     * @property {module:model/TeamPublicRepresentation}
     */
    TeamPublicRepresentation: TeamPublicRepresentation,
    /**
     * The VideoEmailPrompt model constructor.
     * @property {module:model/VideoEmailPrompt}
     */
    VideoEmailPrompt: VideoEmailPrompt,
    /**
     * The VideoEncodingStatusResponse model constructor.
     * @property {module:model/VideoEncodingStatusResponse}
     */
    VideoEncodingStatusResponse: VideoEncodingStatusResponse,
    /**
     * The VideoPublicRepresentation model constructor.
     * @property {module:model/VideoPublicRepresentation}
     */
    VideoPublicRepresentation: VideoPublicRepresentation,
    /**
     * The VideoRecorderMethodResponse model constructor.
     * @property {module:model/VideoRecorderMethodResponse}
     */
    VideoRecorderMethodResponse: VideoRecorderMethodResponse,
    /**
     * The AccountsApi service constructor.
     * @property {module:api/AccountsApi}
     */
    AccountsApi: AccountsApi,
    /**
     * The AutomationsApi service constructor.
     * @property {module:api/AutomationsApi}
     */
    AutomationsApi: AutomationsApi,
    /**
     * The ContactsApi service constructor.
     * @property {module:api/ContactsApi}
     */
    ContactsApi: ContactsApi,
    /**
     * The CurriculumApi service constructor.
     * @property {module:api/CurriculumApi}
     */
    CurriculumApi: CurriculumApi,
    /**
     * The EmailsApi service constructor.
     * @property {module:api/EmailsApi}
     */
    EmailsApi: EmailsApi,
    /**
     * The FilesApi service constructor.
     * @property {module:api/FilesApi}
     */
    FilesApi: FilesApi,
    /**
     * The ListsApi service constructor.
     * @property {module:api/ListsApi}
     */
    ListsApi: ListsApi,
    /**
     * The OrdersApi service constructor.
     * @property {module:api/OrdersApi}
     */
    OrdersApi: OrdersApi,
    /**
     * The PromptsApi service constructor.
     * @property {module:api/PromptsApi}
     */
    PromptsApi: PromptsApi,
    /**
     * The SocialsApi service constructor.
     * @property {module:api/SocialsApi}
     */
    SocialsApi: SocialsApi,
    /**
     * The TeamsApi service constructor.
     * @property {module:api/TeamsApi}
     */
    TeamsApi: TeamsApi,
    /**
     * The UtilitiesApi service constructor.
     * @property {module:api/UtilitiesApi}
     */
    UtilitiesApi: UtilitiesApi,
    /**
     * The VideosApi service constructor.
     * @property {module:api/VideosApi}
     */
    VideosApi: VideosApi,
    /**
     * The WebhooksApi service constructor.
     * @property {module:api/WebhooksApi}
     */
    WebhooksApi: WebhooksApi
  };

  return exports;
}));
