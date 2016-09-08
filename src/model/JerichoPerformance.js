/**
 * BombBomb
 * We make it easy to build relationships using simple videos.
 *
 * OpenAPI spec version: 2.0
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
    if (!root.BombbombNodejsOpenapi) {
      root.BombbombNodejsOpenapi = {};
    }
    root.BombbombNodejsOpenapi.JerichoPerformance = factory(root.BombbombNodejsOpenapi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The JerichoPerformance model module.
   * @module model/JerichoPerformance
   * @version 1.0.0
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

      if (data.hasOwnProperty('sent')) {
        obj['sent'] = ApiClient.convertToType(data['sent'], 'Integer');
      }
      if (data.hasOwnProperty('uniqueViews')) {
        obj['uniqueViews'] = ApiClient.convertToType(data['uniqueViews'], 'Integer');
      }
      if (data.hasOwnProperty('uniqueLandingPageViews')) {
        obj['uniqueLandingPageViews'] = ApiClient.convertToType(data['uniqueLandingPageViews'], 'Integer');
      }
      if (data.hasOwnProperty('landingPageViews')) {
        obj['landingPageViews'] = ApiClient.convertToType(data['landingPageViews'], 'Integer');
      }
      if (data.hasOwnProperty('delivered')) {
        obj['delivered'] = ApiClient.convertToType(data['delivered'], 'Integer');
      }
      if (data.hasOwnProperty('bounce')) {
        obj['bounce'] = ApiClient.convertToType(data['bounce'], 'Integer');
      }
      if (data.hasOwnProperty('open')) {
        obj['open'] = ApiClient.convertToType(data['open'], 'Integer');
      }
      if (data.hasOwnProperty('click')) {
        obj['click'] = ApiClient.convertToType(data['click'], 'Integer');
      }
      if (data.hasOwnProperty('videoPlay')) {
        obj['videoPlay'] = ApiClient.convertToType(data['videoPlay'], 'Integer');
      }
      if (data.hasOwnProperty('abuseComplaints')) {
        obj['abuseComplaints'] = ApiClient.convertToType(data['abuseComplaints'], 'Integer');
      }
      if (data.hasOwnProperty('contacts')) {
        obj['contacts'] = ApiClient.convertToType(data['contacts'], 'Integer');
      }
    }
    return obj;
  }

  /**
   * The number of emails sent
   * @member {Integer} sent
   */
  exports.prototype['sent'] = undefined;
  /**
   * The unique number of people that viewed the email
   * @member {Integer} uniqueViews
   */
  exports.prototype['uniqueViews'] = undefined;
  /**
   * The unique number of people that visited the landing page
   * @member {Integer} uniqueLandingPageViews
   */
  exports.prototype['uniqueLandingPageViews'] = undefined;
  /**
   * The total number of people that visisted the landing page
   * @member {Integer} landingPageViews
   */
  exports.prototype['landingPageViews'] = undefined;
  /**
   * The number of emails delivered, likely less than sent due to bounces, and other common delivery issues
   * @member {Integer} delivered
   */
  exports.prototype['delivered'] = undefined;
  /**
   * The number of emails that bounced as undeliverable
   * @member {Integer} bounce
   */
  exports.prototype['bounce'] = undefined;
  /**
   * The total number of times the emails were viewed
   * @member {Integer} open
   */
  exports.prototype['open'] = undefined;
  /**
   * The total number of times links in the emails were clicked
   * @member {Integer} click
   */
  exports.prototype['click'] = undefined;
  /**
   * The total number of times videos in the emails were played
   * @member {Integer} videoPlay
   */
  exports.prototype['videoPlay'] = undefined;
  /**
   * The number of recipients that marked the message as abusive
   * @member {Integer} abuseComplaints
   */
  exports.prototype['abuseComplaints'] = undefined;
  /**
   * The total number of contacts submitted to be sent, may be more than was sent to
   * @member {Integer} contacts
   */
  exports.prototype['contacts'] = undefined;



  return exports;
}));


