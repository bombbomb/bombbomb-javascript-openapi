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
    define(['ApiClient', 'model/CurriculumUserProgress'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./CurriculumUserProgress'));
  } else {
    // Browser globals (root is window)
    if (!root.Bombbomb) {
      root.Bombbomb = {};
    }
    root.Bombbomb.Curriculum = factory(root.Bombbomb.ApiClient, root.Bombbomb.CurriculumUserProgress);
  }
}(this, function(ApiClient, CurriculumUserProgress) {
  'use strict';




  /**
   * The Curriculum model module.
   * @module model/Curriculum
   * @version 2.0.831
   */

  /**
   * Constructs a new <code>Curriculum</code>.
   * The Curriculum class
   * @alias module:model/Curriculum
   * @class
   */
  var exports = function() {
    var _this = this;









  };

  /**
   * Constructs a <code>Curriculum</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Curriculum} obj Optional instance to populate.
   * @return {module:model/Curriculum} The populated <code>Curriculum</code> instance.
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
      if (data.hasOwnProperty('htmlIntro')) {
        obj['htmlIntro'] = ApiClient.convertToType(data['htmlIntro'], 'String');
      }
      if (data.hasOwnProperty('imgUrl')) {
        obj['imgUrl'] = ApiClient.convertToType(data['imgUrl'], 'String');
      }
      if (data.hasOwnProperty('itemCount')) {
        obj['itemCount'] = ApiClient.convertToType(data['itemCount'], 'Number');
      }
      if (data.hasOwnProperty('renderAs')) {
        obj['renderAs'] = ApiClient.convertToType(data['renderAs'], 'String');
      }
      if (data.hasOwnProperty('visibleToAllUsers')) {
        obj['visibleToAllUsers'] = ApiClient.convertToType(data['visibleToAllUsers'], 'Boolean');
      }
      if (data.hasOwnProperty('progress')) {
        obj['progress'] = ApiClient.convertToType(data['progress'], [CurriculumUserProgress]);
      }
    }
    return obj;
  }

  /**
   * Id
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * Name
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * HTML formatted intro
   * @member {String} htmlIntro
   */
  exports.prototype['htmlIntro'] = undefined;
  /**
   * URI of header image
   * @member {String} imgUrl
   */
  exports.prototype['imgUrl'] = undefined;
  /**
   * Number of curriculum items
   * @member {Number} itemCount
   */
  exports.prototype['itemCount'] = undefined;
  /**
   * Render method for curriculum
   * @member {String} renderAs
   */
  exports.prototype['renderAs'] = undefined;
  /**
   * Globally visible
   * @member {Boolean} visibleToAllUsers
   */
  exports.prototype['visibleToAllUsers'] = undefined;
  /**
   * Collection of User Progress for Curriculum
   * @member {Array.<module:model/CurriculumUserProgress>} progress
   */
  exports.prototype['progress'] = undefined;



  return exports;
}));


