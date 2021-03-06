/**
 * BombBomb
 * We make it easy to build relationships using simple videos.
 *
 * OpenAPI spec version: 2.0.831
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.3.1
 *
 * Do not edit the class manually.
 *
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
    root.Bombbomb.IntegrationsApi = factory(root.Bombbomb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * Integrations service.
   * @module api/IntegrationsApi
   * @version 2.0.25798
   */

  /**
   * Constructs a new IntegrationsApi. 
   * @alias module:api/IntegrationsApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the connectIntegration operation.
     * @callback module:api/IntegrationsApi~connectIntegrationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Activate an integration for a user.
     * Provide the correct parameters to enable an integration. Required Parameters vary based on the desired          integration. Integrations requiring OAuth will provide the OAuth link that the user must be presented.
     * @param {String} code The identifier of the integration.
     * @param {Object} opts Optional parameters
     * @param {String} opts.key The key value.
     * @param {String} opts.secret The secret value.
     * @param {String} opts.token The token value.
     * @param {String} opts.data The data value as JSON.
     * @param {String} opts.overwrite Boolean value to know whether or not to delete the integration if it already exists
     * @param {module:api/IntegrationsApi~connectIntegrationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.connectIntegration = function(code, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling connectIntegration");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'code': code,
        'key': opts['key'],
        'secret': opts['secret'],
        'token': opts['token'],
        'data': opts['data'],
        'overwrite': opts['overwrite']
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/integrations', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the deleteIntegration operation.
     * @callback module:api/IntegrationsApi~deleteIntegrationCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove an integration for a user.
     * Remove an integration by providing the integration id or integration code. Only provide one of the             parameters.
     * @param {Object} opts Optional parameters
     * @param {String} opts.id Integration ID
     * @param {String} opts.code Integration Code
     * @param {module:api/IntegrationsApi~deleteIntegrationCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.deleteIntegration = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
        'id': opts['id'],
        'code': opts['code']
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/integrations', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIntegrationHealth operation.
     * @callback module:api/IntegrationsApi~getIntegrationHealthCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get health for a given integration
     * Get health for an integration.
     * @param {String} code The integration code for which to retrieve the information from
     * @param {module:api/IntegrationsApi~getIntegrationHealthCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getIntegrationHealth = function(code, callback) {
      var postBody = null;

      // verify the required parameter 'code' is set
      if (code === undefined || code === null) {
        throw new Error("Missing the required parameter 'code' when calling getIntegrationHealth");
      }


      var pathParams = {
        'code': code
      };
      var queryParams = {
      };
      var collectionQueryParams = {
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
        '/integrations/health/{code}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getIntegrationPageComponents operation.
     * @callback module:api/IntegrationsApi~getIntegrationPageComponentsCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get page components for a given integration
     * Get all page components for an integration.
     * @param {String} integrationName The integration for which to retrieve HTML page components.
     * @param {module:api/IntegrationsApi~getIntegrationPageComponentsCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getIntegrationPageComponents = function(integrationName, callback) {
      var postBody = null;

      // verify the required parameter 'integrationName' is set
      if (integrationName === undefined || integrationName === null) {
        throw new Error("Missing the required parameter 'integrationName' when calling getIntegrationPageComponents");
      }


      var pathParams = {
      };
      var queryParams = {
        'integration_name': integrationName,
      };
      var collectionQueryParams = {
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
        '/integrations/pageComponents', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the syncUsersIntegratedLists operation.
     * @callback module:api/IntegrationsApi~syncUsersIntegratedListsCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Synchronize your integration list or lists.
     * Synchronize your integration contact list with the service you are integrated with. If no integration code is provided, all integrations will be synchronized.
     * @param {Object} opts Optional parameters
     * @param {String} opts.integrationId The integration to sync lists for. All integrations will sync if nothing is provided.
     * @param {module:api/IntegrationsApi~syncUsersIntegratedListsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.syncUsersIntegratedLists = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'integration_id': opts['integrationId'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/integrations/sync', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
