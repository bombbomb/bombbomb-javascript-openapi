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
    root.Bombbomb.PromptMonthlyPerformance = factory(root.Bombbomb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The PromptMonthlyPerformance model module.
   * @module model/PromptMonthlyPerformance
   * @version 2.0.25798
   */

  /**
   * Constructs a new <code>PromptMonthlyPerformance</code>.
   * The PromptMonthlyPerformance class
   * @alias module:model/PromptMonthlyPerformance
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>PromptMonthlyPerformance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/PromptMonthlyPerformance} obj Optional instance to populate.
   * @return {module:model/PromptMonthlyPerformance} The populated <code>PromptMonthlyPerformance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('startDate')) {
        obj['startDate'] = ApiClient.convertToType(data['startDate'], 'String');
      }
      if (data.hasOwnProperty('endDate')) {
        obj['endDate'] = ApiClient.convertToType(data['endDate'], 'String');
      }
      if (data.hasOwnProperty('userBatchListsIdHelper')) {
        obj['userBatchListsIdHelper'] = ApiClient.convertToType(data['userBatchListsIdHelper'], 'String');
      }
      if (data.hasOwnProperty('promptIdHelper')) {
        obj['promptIdHelper'] = ApiClient.convertToType(data['promptIdHelper'], 'String');
      }
    }
    return obj;
  }

  /**
   * The startDate property
   * @member {String} startDate
   */
  exports.prototype['startDate'] = undefined;
  /**
   * The endDate property
   * @member {String} endDate
   */
  exports.prototype['endDate'] = undefined;
  /**
   * The userBatchListsIdHelper property
   * @member {String} userBatchListsIdHelper
   */
  exports.prototype['userBatchListsIdHelper'] = undefined;
  /**
   * The promptIdHelper property
   * @member {String} promptIdHelper
   */
  exports.prototype['promptIdHelper'] = undefined;



  return exports;
}));

