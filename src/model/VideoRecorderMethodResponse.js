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
    root.Bombbomb.VideoRecorderMethodResponse = factory(root.Bombbomb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoRecorderMethodResponse model module.
   * @module model/VideoRecorderMethodResponse
   * @version 2.0.22196
   */

  /**
   * Constructs a new <code>VideoRecorderMethodResponse</code>.
   * The VideoRecorderMethodResponse class
   * @alias module:model/VideoRecorderMethodResponse
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>VideoRecorderMethodResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoRecorderMethodResponse} obj Optional instance to populate.
   * @return {module:model/VideoRecorderMethodResponse} The populated <code>VideoRecorderMethodResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('user_id')) {
        obj['user_id'] = ApiClient.convertToType(data['user_id'], 'String');
      }
      if (data.hasOwnProperty('email')) {
        obj['email'] = ApiClient.convertToType(data['email'], 'String');
      }
      if (data.hasOwnProperty('client_id')) {
        obj['client_id'] = ApiClient.convertToType(data['client_id'], 'String');
      }
      if (data.hasOwnProperty('vid_id')) {
        obj['vid_id'] = ApiClient.convertToType(data['vid_id'], 'String');
      }
      if (data.hasOwnProperty('content')) {
        obj['content'] = ApiClient.convertToType(data['content'], 'String');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Integer');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Integer');
      }
      if (data.hasOwnProperty('https')) {
        obj['https'] = ApiClient.convertToType(data['https'], 'Boolean');
      }
    }
    return obj;
  }

  /**
   * The id of the user for whom this video will be recorded
   * @member {String} user_id
   */
  exports.prototype['user_id'] = undefined;
  /**
   * The email address of the user for whom this video will be recorded
   * @member {String} email
   */
  exports.prototype['email'] = undefined;
  /**
   * The client_id of the user for whom this video will be recorded
   * @member {String} client_id
   */
  exports.prototype['client_id'] = undefined;
  /**
   * The id of the video that will be recorded
   * @member {String} vid_id
   */
  exports.prototype['vid_id'] = undefined;
  /**
   * An HTML blob that displays a video recorder
   * @member {String} content
   */
  exports.prototype['content'] = undefined;
  /**
   * The width of the video recorder
   * @member {Integer} width
   */
  exports.prototype['width'] = undefined;
  /**
   * the Height of the video recorder
   * @member {Integer} height
   */
  exports.prototype['height'] = undefined;
  /**
   * Whether communication from the recorder will be handled via HTTPS (always true)
   * @member {Boolean} https
   */
  exports.prototype['https'] = undefined;



  return exports;
}));

