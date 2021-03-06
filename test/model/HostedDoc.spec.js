/**
 * BombBomb
 * We make it easy to build relationships using simple videos.
 *
 * OpenAPI spec version: 2.0.25797
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
    instance = new Bombbomb.HostedDoc();
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

  describe('HostedDoc', function() {
    it('should create an instance of HostedDoc', function() {
      // uncomment below and update the code to test HostedDoc
      //var instane = new Bombbomb.HostedDoc();
      //expect(instance).to.be.a(Bombbomb.HostedDoc);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Bombbomb.HostedDoc();
      //expect(instance).to.be();
    });

    it('should have the property userId (base name: "userId")', function() {
      // uncomment below and update the code to test the property userId
      //var instane = new Bombbomb.HostedDoc();
      //expect(instance).to.be();
    });

    it('should have the property fileName (base name: "fileName")', function() {
      // uncomment below and update the code to test the property fileName
      //var instane = new Bombbomb.HostedDoc();
      //expect(instance).to.be();
    });

    it('should have the property shortUrl (base name: "shortUrl")', function() {
      // uncomment below and update the code to test the property shortUrl
      //var instane = new Bombbomb.HostedDoc();
      //expect(instance).to.be();
    });

    it('should have the property longUrl (base name: "longUrl")', function() {
      // uncomment below and update the code to test the property longUrl
      //var instane = new Bombbomb.HostedDoc();
      //expect(instance).to.be();
    });

    it('should have the property uploadDate (base name: "uploadDate")', function() {
      // uncomment below and update the code to test the property uploadDate
      //var instane = new Bombbomb.HostedDoc();
      //expect(instance).to.be();
    });

  });

}));
