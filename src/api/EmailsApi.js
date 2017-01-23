/**
 * BombBomb
 * We make it easy to build relationships using simple videos.
 *
 * OpenAPI spec version: 2.0.22196
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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.Bombbomb) {
      root.Bombbomb = {};
    }
    root.Bombbomb.EmailsApi = factory(root.Bombbomb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Emails service.
   * @module api/EmailsApi
   * @version 2.0.22196
   */

  /**
   * Constructs a new EmailsApi. 
   * @alias module:api/EmailsApi
   * @class
   * @param {module:ApiClient} apiClient Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the createPrintingPressEmail operation.
     * @callback module:api/EmailsApi~createPrintingPressEmailCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an Email with Printing Press
     * Prints an email using the template id and content to the users account.If a video id, is include it will replace any video placeholders with that video.
     * @param {String} templateId The template id to be printed.
     * @param {String} content The content of the email.
     * @param {Boolean} replace Set whether to replace video placeholders with video id.
     * @param {Object} opts Optional parameters
     * @param {String} opts.videoId A video to replace video place holders with.
     * @param {String} opts.subjectLine The subject line to be printed.
     * @param {module:api/EmailsApi~createPrintingPressEmailCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.createPrintingPressEmail = function(templateId, content, replace, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'templateId' is set
      if (templateId == undefined || templateId == null) {
        throw "Missing the required parameter 'templateId' when calling createPrintingPressEmail";
      }

      // verify the required parameter 'content' is set
      if (content == undefined || content == null) {
        throw "Missing the required parameter 'content' when calling createPrintingPressEmail";
      }

      // verify the required parameter 'replace' is set
      if (replace == undefined || replace == null) {
        throw "Missing the required parameter 'replace' when calling createPrintingPressEmail";
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'templateId': templateId,
        'content': content,
        'replace': replace,
        'videoId': opts['videoId'],
        'subjectLine': opts['subjectLine']
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/emails/print', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmailTracking operation.
     * @callback module:api/EmailsApi~getEmailTrackingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Email Tracking
     * Get Tracking data for all sends of an Email
     * @param {String} emailId ID of the email
     * @param {Object} opts Optional parameters
     * @param {String} opts.jobId ID of the Job (or null for all jobs)
     * @param {module:api/EmailsApi~getEmailTrackingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getEmailTracking = function(emailId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'emailId' is set
      if (emailId == undefined || emailId == null) {
        throw "Missing the required parameter 'emailId' when calling getEmailTracking";
      }


      var pathParams = {
        'emailId': emailId
      };
      var queryParams = {
        'jobId': opts['jobId']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/emails/{emailId}/tracking', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getEmailTrackingInteractions operation.
     * @callback module:api/EmailsApi~getEmailTrackingInteractionsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Email Tracking Interactions
     * Get Contact detail interactions for an Email
     * @param {String} emailId ID of the email
     * @param {Object} opts Optional parameters
     * @param {String} opts.jobId ID of the Job (or null for all jobs)
     * @param {String} opts.interactionType Interaction type to order and filter by
     * @param {String} opts.searchTerm Search term to filer by
     * @param {module:api/EmailsApi~getEmailTrackingInteractionsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getEmailTrackingInteractions = function(emailId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'emailId' is set
      if (emailId == undefined || emailId == null) {
        throw "Missing the required parameter 'emailId' when calling getEmailTrackingInteractions";
      }


      var pathParams = {
        'emailId': emailId
      };
      var queryParams = {
        'jobId': opts['jobId'],
        'interactionType': opts['interactionType'],
        'searchTerm': opts['searchTerm']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/emails/{emailId}/tracking/interactions', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHourlyEmailTracking operation.
     * @callback module:api/EmailsApi~getHourlyEmailTrackingCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get Hourly Email Tracking
     * Get Tracking data for an Email,             broken down by the hour and filterable by an Interaction type
     * @param {String} emailId ID of the email
     * @param {Object} opts Optional parameters
     * @param {String} opts.jobId ID of the Job (or null for all jobs)
     * @param {String} opts.interactionType Interaction type to filter by
     * @param {module:api/EmailsApi~getHourlyEmailTrackingCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getHourlyEmailTracking = function(emailId, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'emailId' is set
      if (emailId == undefined || emailId == null) {
        throw "Missing the required parameter 'emailId' when calling getHourlyEmailTracking";
      }


      var pathParams = {
        'emailId': emailId
      };
      var queryParams = {
        'jobId': opts['jobId'],
        'interactionType': opts['interactionType']
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/emails/{emailId}/tracking/hourly', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
