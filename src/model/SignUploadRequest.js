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
    root.Bombbomb.SignUploadRequest = factory(root.Bombbomb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The SignUploadRequest model module.
   * @module model/SignUploadRequest
   * @version 2.0.24005
   */

  /**
   * Constructs a new <code>SignUploadRequest</code>.
   * The SignUploadRequest class
   * @alias module:model/SignUploadRequest
   * @class
   */
  var exports = function() {
    var _this = this;



  };

  /**
   * Constructs a <code>SignUploadRequest</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/SignUploadRequest} obj Optional instance to populate.
   * @return {module:model/SignUploadRequest} The populated <code>SignUploadRequest</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('expiration')) {
        obj['expiration'] = ApiClient.convertToType(data['expiration'], 'Date');
      }
      if (data.hasOwnProperty('conditions')) {
        obj['conditions'] = ApiClient.convertToType(data['conditions'], Object);
      }
    }
    return obj;
  }

  /**
   * when the upload will expire.
   * @member {Date} expiration
   */
  exports.prototype['expiration'] = undefined;
  /**
   * Key/Value object of request conditions.
   * @member {Object} conditions
   */
  exports.prototype['conditions'] = undefined;



  return exports;
}));


