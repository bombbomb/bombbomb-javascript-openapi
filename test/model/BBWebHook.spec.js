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
    instance = new Bombbomb.BBWebHook();
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

  describe('BBWebHook', function() {
    it('should create an instance of BBWebHook', function() {
      // uncomment below and update the code to test BBWebHook
      //var instane = new Bombbomb.BBWebHook();
      //expect(instance).to.be.a(Bombbomb.BBWebHook);
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new Bombbomb.BBWebHook();
      //expect(instance).to.be();
    });

    it('should have the property hookId (base name: "hookId")', function() {
      // uncomment below and update the code to test the property hookId
      //var instane = new Bombbomb.BBWebHook();
      //expect(instance).to.be();
    });

    it('should have the property url (base name: "url")', function() {
      // uncomment below and update the code to test the property url
      //var instane = new Bombbomb.BBWebHook();
      //expect(instance).to.be();
    });

    it('should have the property isHidden (base name: "isHidden")', function() {
      // uncomment below and update the code to test the property isHidden
      //var instane = new Bombbomb.BBWebHook();
      //expect(instance).to.be();
    });

  });

}));
