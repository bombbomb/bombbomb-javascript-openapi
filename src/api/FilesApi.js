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
    define(['ApiClient', 'model/HostedDoc'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/HostedDoc'));
  } else {
    // Browser globals (root is window)
    if (!root.Bombbomb) {
      root.Bombbomb = {};
    }
    root.Bombbomb.FilesApi = factory(root.Bombbomb.ApiClient, root.Bombbomb.HostedDoc);
  }
}(this, function(ApiClient, HostedDoc) {
  'use strict';

  /**
   * Files service.
   * @module api/FilesApi
   * @version 2.0.25798
   */

  /**
   * Constructs a new FilesApi. 
   * @alias module:api/FilesApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the docHostDelete operation.
     * @callback module:api/FilesApi~docHostDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete file
     * Deletes a users file
     * @param {String} docId Id of document
     * @param {module:api/FilesApi~docHostDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.docHostDelete = function(docId, callback) {
      var postBody = null;

      // verify the required parameter 'docId' is set
      if (docId === undefined || docId === null) {
        throw new Error("Missing the required parameter 'docId' when calling docHostDelete");
      }


      var pathParams = {
        'docId': docId
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
        '/files/{docId}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the docHostGet operation.
     * @callback module:api/FilesApi~docHostGetCallback
     * @param {String} error Error message, if any.
     * @param {module:model/HostedDoc} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get file
     * Get a single file by id
     * @param {String} docId Id of document
     * @param {module:api/FilesApi~docHostGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/HostedDoc}
     */
    this.docHostGet = function(docId, callback) {
      var postBody = null;

      // verify the required parameter 'docId' is set
      if (docId === undefined || docId === null) {
        throw new Error("Missing the required parameter 'docId' when calling docHostGet");
      }


      var pathParams = {
        'docId': docId
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
      var returnType = HostedDoc;

      return this.apiClient.callApi(
        '/files/{docId}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the docHostList operation.
     * @callback module:api/FilesApi~docHostListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HostedDoc>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all files
     * List all uploaded user files
     * @param {module:api/FilesApi~docHostListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/HostedDoc>}
     */
    this.docHostList = function(callback) {
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
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = [HostedDoc];

      return this.apiClient.callApi(
        '/files', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the docHostUploadV2 operation.
     * @callback module:api/FilesApi~docHostUploadV2Callback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HostedDoc>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upload a file
     * Upload a new file
     * @param {String} file The file being uploaded
     * @param {module:api/FilesApi~docHostUploadV2Callback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/HostedDoc>}
     */
    this.docHostUploadV2 = function(file, callback) {
      var postBody = null;

      // verify the required parameter 'file' is set
      if (file === undefined || file === null) {
        throw new Error("Missing the required parameter 'file' when calling docHostUploadV2");
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
        'file': file
      };

      var authNames = ['BBOAuth2'];
      var contentTypes = ['application/x-www-form-urlencoded'];
      var accepts = ['application/json'];
      var returnType = [HostedDoc];

      return this.apiClient.callApi(
        '/files', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the getHostedImagesPaged operation.
     * @callback module:api/FilesApi~getHostedImagesPagedCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get paged hosted images
     * Get a specific page of uploaded images available to the user.
     * @param {String} pageSize The number of items to retrieve in a single db query.
     * @param {String} page Zero-based index of the page of data to retrieve from the db.
     * @param {Object} opts Optional parameters
     * @param {String} opts.search Filter results with names that match the search term.
     * @param {module:api/FilesApi~getHostedImagesPagedCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.getHostedImagesPaged = function(pageSize, page, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'pageSize' is set
      if (pageSize === undefined || pageSize === null) {
        throw new Error("Missing the required parameter 'pageSize' when calling getHostedImagesPaged");
      }

      // verify the required parameter 'page' is set
      if (page === undefined || page === null) {
        throw new Error("Missing the required parameter 'page' when calling getHostedImagesPaged");
      }


      var pathParams = {
      };
      var queryParams = {
        'pageSize': pageSize,
        'page': page,
        'search': opts['search'],
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
        '/files/images/paged', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
