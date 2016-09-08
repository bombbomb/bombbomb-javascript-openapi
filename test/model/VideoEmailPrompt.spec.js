/**
 * BombBomb
 * We make it easy to build relationships using simple videos.
 *
 * OpenAPI spec version: 2.0.20679
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
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.Bombbomb);
  }
}(this, function(expect, Bombbomb) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new Bombbomb.VideoEmailPrompt();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('VideoEmailPrompt', function() {
    it('should create an instance of VideoEmailPrompt', function() {
      // uncomment below and update the code to test VideoEmailPrompt
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be.a(Bombbomb.VideoEmailPrompt);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property templateId (base name: "templateId")', function() {
      // uncomment below and update the code to test the property templateId
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property emailSubjectLine (base name: "emailSubjectLine")', function() {
      // uncomment below and update the code to test the property emailSubjectLine
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property emailContent (base name: "emailContent")', function() {
      // uncomment below and update the code to test the property emailContent
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property toEmailAddresses (base name: "toEmailAddresses")', function() {
      // uncomment below and update the code to test the property toEmailAddresses
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property toLists (base name: "toLists")', function() {
      // uncomment below and update the code to test the property toLists
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property jerichoId (base name: "jerichoId")', function() {
      // uncomment below and update the code to test the property jerichoId
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property promptSubject (base name: "promptSubject")', function() {
      // uncomment below and update the code to test the property promptSubject
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property promptHtml (base name: "promptHtml")', function() {
      // uncomment below and update the code to test the property promptHtml
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property sendWithoutVideo (base name: "sendWithoutVideo")', function() {
      // uncomment below and update the code to test the property sendWithoutVideo
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property videoDueDate (base name: "videoDueDate")', function() {
      // uncomment below and update the code to test the property videoDueDate
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property scheduledSendDate (base name: "scheduledSendDate")', function() {
      // uncomment below and update the code to test the property scheduledSendDate
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property videoId (base name: "videoId")', function() {
      // uncomment below and update the code to test the property videoId
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property emailId (base name: "emailId")', function() {
      // uncomment below and update the code to test the property emailId
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property jobId (base name: "jobId")', function() {
      // uncomment below and update the code to test the property jobId
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

    it('should have the property doNotApplyTemplate (base name: "doNotApplyTemplate")', function() {
      // uncomment below and update the code to test the property doNotApplyTemplate
      //var instane = new Bombbomb.VideoEmailPrompt();
      //expect(instance).to.be();
    });

  });

}));
