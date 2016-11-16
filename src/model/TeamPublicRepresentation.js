/**
 * BombBomb
 * We make it easy to build relationships using simple videos.
 *
 * OpenAPI spec version: 2.0.21454
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
    root.Bombbomb.TeamPublicRepresentation = factory(root.Bombbomb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The TeamPublicRepresentation model module.
   * @module model/TeamPublicRepresentation
   * @version 2.0.21454
   */

  /**
   * Constructs a new <code>TeamPublicRepresentation</code>.
   * The TeamPublicRepresentation class
   * @alias module:model/TeamPublicRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;




  };

  /**
   * Constructs a <code>TeamPublicRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TeamPublicRepresentation} obj Optional instance to populate.
   * @return {module:model/TeamPublicRepresentation} The populated <code>TeamPublicRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('createdDate')) {
        obj['createdDate'] = ApiClient.convertToType(data['createdDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the team
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The name of the team
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * The date the team was created
   * @member {String} createdDate
   */
  exports.prototype['createdDate'] = undefined;



  return exports;
}));


