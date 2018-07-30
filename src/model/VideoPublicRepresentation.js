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
    root.Bombbomb.VideoPublicRepresentation = factory(root.Bombbomb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The VideoPublicRepresentation model module.
   * @module model/VideoPublicRepresentation
   * @version 2.0.25798
   */

  /**
   * Constructs a new <code>VideoPublicRepresentation</code>.
   * The VideoPublicRepresentation class
   * @alias module:model/VideoPublicRepresentation
   * @class
   */
  var exports = function() {
    var _this = this;












  };

  /**
   * Constructs a <code>VideoPublicRepresentation</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VideoPublicRepresentation} obj Optional instance to populate.
   * @return {module:model/VideoPublicRepresentation} The populated <code>VideoPublicRepresentation</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('id')) {
        obj['id'] = ApiClient.convertToType(data['id'], 'String');
      }
      if (data.hasOwnProperty('userId')) {
        obj['userId'] = ApiClient.convertToType(data['userId'], 'String');
      }
      if (data.hasOwnProperty('status')) {
        obj['status'] = ApiClient.convertToType(data['status'], 'String');
      }
      if (data.hasOwnProperty('name')) {
        obj['name'] = ApiClient.convertToType(data['name'], 'String');
      }
      if (data.hasOwnProperty('description')) {
        obj['description'] = ApiClient.convertToType(data['description'], 'String');
      }
      if (data.hasOwnProperty('thumbUrl')) {
        obj['thumbUrl'] = ApiClient.convertToType(data['thumbUrl'], 'String');
      }
      if (data.hasOwnProperty('videoUrls')) {
        obj['videoUrls'] = ApiClient.convertToType(data['videoUrls'], ['String']);
      }
      if (data.hasOwnProperty('shortUrl')) {
        obj['shortUrl'] = ApiClient.convertToType(data['shortUrl'], 'String');
      }
      if (data.hasOwnProperty('height')) {
        obj['height'] = ApiClient.convertToType(data['height'], 'Number');
      }
      if (data.hasOwnProperty('width')) {
        obj['width'] = ApiClient.convertToType(data['width'], 'Number');
      }
      if (data.hasOwnProperty('uploadDate')) {
        obj['uploadDate'] = ApiClient.convertToType(data['uploadDate'], 'String');
      }
    }
    return obj;
  }

  /**
   * The id of the video
   * @member {String} id
   */
  exports.prototype['id'] = undefined;
  /**
   * The is of the owning user
   * @member {String} userId
   */
  exports.prototype['userId'] = undefined;
  /**
   * The status of the video
   * @member {String} status
   */
  exports.prototype['status'] = undefined;
  /**
   * The name of the video
   * @member {String} name
   */
  exports.prototype['name'] = undefined;
  /**
   * A description of the video
   * @member {String} description
   */
  exports.prototype['description'] = undefined;
  /**
   * The url of the thumbnail for the video
   * @member {String} thumbUrl
   */
  exports.prototype['thumbUrl'] = undefined;
  /**
   * Urls to different formats of the video
   * @member {Array.<String>} videoUrls
   */
  exports.prototype['videoUrls'] = undefined;
  /**
   * The url to use to link to the video
   * @member {String} shortUrl
   */
  exports.prototype['shortUrl'] = undefined;
  /**
   * The height of the video in pixels
   * @member {Number} height
   */
  exports.prototype['height'] = undefined;
  /**
   * The width of the video in pixels
   * @member {Number} width
   */
  exports.prototype['width'] = undefined;
  /**
   * The date the video was uploaded
   * @member {String} uploadDate
   */
  exports.prototype['uploadDate'] = undefined;



  return exports;
}));


