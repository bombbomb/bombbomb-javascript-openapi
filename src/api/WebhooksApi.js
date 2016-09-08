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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/BBWebHook'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/BBWebHook'));
  } else {
    // Browser globals (root is window)
    if (!root.BombbombNodejsOpenapi) {
      root.BombbombNodejsOpenapi = {};
    }
    root.BombbombNodejsOpenapi.WebhooksApi = factory(root.BombbombNodejsOpenapi.ApiClient, root.BombbombNodejsOpenapi.BBWebHook);
  }
}(this, function(ApiClient, BBWebHook) {
  'use strict';

  /**
   * Webhooks service.
   * @module api/WebhooksApi
   * @version {2.0}
   */

  /**
   * Constructs a new WebhooksApi. 
   * @alias module:api/WebhooksApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the addWebHook operation.
     * @callback module:api/WebhooksApi~addWebHookCallback
     * @param {String} error Error message, if any.
     * @param {module:model/BBWebHook} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Add Webhook
     * Idempotently adds a Webhook url
     * @param {String} hookUrl The Url of your listener
     * @param {module:api/WebhooksApi~addWebHookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/BBWebHook}
     */
    this.addWebHook = function(hookUrl, callback) {
      var postBody = null;

      // verify the required parameter 'hookUrl' is set
      if (hookUrl == undefined || hookUrl == null) {
        throw "Missing the required parameter 'hookUrl' when calling addWebHook";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'hookUrl': hookUrl
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = BBWebHook;

      return this.apiClient.callApi(
        '/webhook', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteWebHook operation.
     * @callback module:api/WebhooksApi~deleteWebHookCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Deletes Webhook
     * Deletes a Webhook
     * @param {String} hookId The id of the webhook to delete
     * @param {module:api/WebhooksApi~deleteWebHookCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.deleteWebHook = function(hookId, callback) {
      var postBody = null;

      // verify the required parameter 'hookId' is set
      if (hookId == undefined || hookId == null) {
        throw "Missing the required parameter 'hookId' when calling deleteWebHook";
      }


      var pathParams = {
        'hookId': hookId
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/webhook/{hookId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getWebHooks operation.
     * @callback module:api/WebhooksApi~getWebHooksCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/BBWebHook>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Lists Webhooks
     * Lists all registered Webhooks
     * @param {module:api/WebhooksApi~getWebHooksCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/BBWebHook>}
     */
    this.getWebHooks = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [BBWebHook];

      return this.apiClient.callApi(
        '/webhook/', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the sendWebhookExample operation.
     * @callback module:api/WebhooksApi~sendWebhookExampleCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Sends test Webhook
     * Triggers a test webhook to be sent to your endpoints.
     * @param {module:api/WebhooksApi~sendWebhookExampleCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.sendWebhookExample = function(callback) {
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/webhook/test', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
