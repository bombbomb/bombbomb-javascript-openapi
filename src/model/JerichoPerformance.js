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
    root.Bombbomb.JerichoPerformance = factory(root.Bombbomb.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JerichoPerformance model module.
   * @module model/JerichoPerformance
   * @version 2.0.831
   */

  /**
   * Constructs a new <code>JerichoPerformance</code>.
   * Reports on the aggregate performance of a Jericho send
   * @alias module:model/JerichoPerformance
   * @class
   */
  var exports = function() {
    var _this = this;
















  };

  /**
   * Constructs a <code>JerichoPerformance</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/JerichoPerformance} obj Optional instance to populate.
   * @return {module:model/JerichoPerformance} The populated <code>JerichoPerformance</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('jerichoId')) {
        obj['jerichoId'] = ApiClient.convertToType(data['jerichoId'], 'Number');
      }
      if (data.hasOwnProperty('sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'Number');
      }
      if (data.hasOwnProperty('uniqueViews')) {
        obj['uniqueViews'] = ApiClient.convertToType(data['uniqueViews'], 'Number');
      }
      if (data.hasOwnProperty('uniqueLandingPageViews')) {
        obj['uniqueLandingPageViews'] = ApiClient.convertToType(data['uniqueLandingPageViews'], 'Number');
      }
      if (data.hasOwnProperty('landingPageViews')) {
        obj['landingPageViews'] = ApiClient.convertToType(data['landingPageViews'], 'Number');
      }
      if (data.hasOwnProperty('delivered')) {
        obj['delivered'] = ApiClient.convertToType(data['delivered'], 'Number');
      }
      if (data.hasOwnProperty('bounce')) {
        obj['bounce'] = ApiClient.convertToType(data['bounce'], 'Number');
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Number');
      }
      if (data.hasOwnProperty('click')) {
        obj['click'] = ApiClient.convertToType(data['click'], 'Number');
      }
      if (data.hasOwnProperty('videoPlay')) {
        obj['videoPlay'] = ApiClient.convertToType(data['videoPlay'], 'Number');
      }
      if (data.hasOwnProperty('abuseComplaints')) {
        obj['abuseComplaints'] = ApiClient.convertToType(data['abuseComplaints'], 'Number');
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], 'Number');
      }
      if (data.hasOwnProperty('promptsSent')) {
        obj['promptsSent'] = ApiClient.convertToType(data['promptsSent'], 'Number');
      }
      if (data.hasOwnProperty('promptsWithRecordings')) {
        obj['promptsWithRecordings'] = ApiClient.convertToType(data['promptsWithRecordings'], 'Number');
      }
      if (data.hasOwnProperty('promptsOptedOut')) {
        obj['promptsOptedOut'] = ApiClient.convertToType(data['promptsOptedOut'], 'Number');
      }
    }
    return obj;
  }

  /**
   * The jericho id
   * @member {Number} jerichoId
   */
  exports.prototype['jerichoId'] = undefined;
  /**
   * The number of emails sent
   * @member {Number} sent
   */
  exports.prototype['sent'] = undefined;
  /**
   * The unique number of people that viewed the email
   * @member {Number} uniqueViews
   */
  exports.prototype['uniqueViews'] = undefined;
  /**
   * The unique number of people that visited the landing page
   * @member {Number} uniqueLandingPageViews
   */
  exports.prototype['uniqueLandingPageViews'] = undefined;
  /**
   * The total number of people that visisted the landing page
   * @member {Number} landingPageViews
   */
  exports.prototype['landingPageViews'] = undefined;
  /**
   * The number of emails delivered, likely less than sent due to bounces, and other common delivery issues
   * @member {Number} delivered
   */
  exports.prototype['delivered'] = undefined;
  /**
   * The number of emails that bounced as undeliverable
   * @member {Number} bounce
   */
  exports.prototype['bounce'] = undefined;
  /**
   * The total number of times the emails were viewed
   * @member {Number} open
   */
  exports.prototype['open'] = undefined;
  /**
   * The total number of times links in the emails were clicked
   * @member {Number} click
   */
  exports.prototype['click'] = undefined;
  /**
   * The total number of times videos in the emails were played
   * @member {Number} videoPlay
   */
  exports.prototype['videoPlay'] = undefined;
  /**
   * The number of recipients that marked the message as abusive
   * @member {Number} abuseComplaints
   */
  exports.prototype['abuseComplaints'] = undefined;
  /**
   * The total number of contacts submitted to be sent, may be more than was sent to
   * @member {Number} contacts
   */
  exports.prototype['contacts'] = undefined;
  /**
   * The total number of prompts sent to members of the client group
   * @member {Number} promptsSent
   */
  exports.prototype['promptsSent'] = undefined;
  /**
   * The total number of prompts sent that included a personal recording
   * @member {Number} promptsWithRecordings
   */
  exports.prototype['promptsWithRecordings'] = undefined;
  /**
   * The total number of members that chose not to send a prompt
   * @member {Number} promptsOptedOut
   */
  exports.prototype['promptsOptedOut'] = undefined;



  return exports;
}));


