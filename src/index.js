/**
 * BombBomb
 * We make it easy to build relationships using simple videos.
 *
 * OpenAPI spec version: 2.0
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
    define(['ApiClient', 'model/BBWebHook', 'model/InlineResponse200', 'model/InlineResponse200Items', 'model/JerichoConfiguration', 'model/JerichoPerformance', 'model/ModelString', 'model/OAuthClient', 'model/VideoEmailPrompt', 'api/PromptsApi', 'api/TeamsApi', 'api/UtilitiesApi', 'api/WebhooksApi'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('./ApiClient'), require('./model/BBWebHook'), require('./model/InlineResponse200'), require('./model/InlineResponse200Items'), require('./model/JerichoConfiguration'), require('./model/JerichoPerformance'), require('./model/ModelString'), require('./model/OAuthClient'), require('./model/VideoEmailPrompt'), require('./api/PromptsApi'), require('./api/TeamsApi'), require('./api/UtilitiesApi'), require('./api/WebhooksApi'));
  }
}(function(ApiClient, BBWebHook, InlineResponse200, InlineResponse200Items, JerichoConfiguration, JerichoPerformance, ModelString, OAuthClient, VideoEmailPrompt, PromptsApi, TeamsApi, UtilitiesApi, WebhooksApi) {
  'use strict';

  /**
   * We_make_it_easy_to_build_relationships_using_simple_videos_.<br>
   * The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
   * <p>
   * An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
   * <pre>
   * var BombbombNodejsOpenapi = require('index'); // See note below*.
   * var xxxSvc = new BombbombNodejsOpenapi.XxxApi(); // Allocate the API class we're going to use.
   * var yyyModel = new BombbombNodejsOpenapi.Yyy(); // Construct a model instance.
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
   * var xxxSvc = new BombbombNodejsOpenapi.XxxApi(); // Allocate the API class we're going to use.
   * var yyy = new BombbombNodejsOpenapi.Yyy(); // Construct a model instance.
   * yyyModel.someProperty = 'someValue';
   * ...
   * var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
   * ...
   * </pre>
   * </p>
   * @module index
   * @version {$api_version}
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
     * The VideoEmailPrompt model constructor.
     * @property {module:model/VideoEmailPrompt}
     */
    VideoEmailPrompt: VideoEmailPrompt,
    /**
     * The PromptsApi service constructor.
     * @property {module:api/PromptsApi}
     */
    PromptsApi: PromptsApi,
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
     * The WebhooksApi service constructor.
     * @property {module:api/WebhooksApi}
     */
    WebhooksApi: WebhooksApi
  };

  return exports;
}));
