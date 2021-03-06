/**
 * BombBomb
 * We make it easy to build relationships using simple videos.
 *
 * OpenAPI spec version: 2.0.21432
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
    instance = new Bombbomb.Curriculum();
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

  describe('Curriculum', function() {
    it('should create an instance of Curriculum', function() {
      // uncomment below and update the code to test Curriculum
      //var instane = new Bombbomb.Curriculum();
      //expect(instance).to.be.a(Bombbomb.Curriculum);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new Bombbomb.Curriculum();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new Bombbomb.Curriculum();
      //expect(instance).to.be();
    });

    it('should have the property htmlIntro (base name: "htmlIntro")', function() {
      // uncomment below and update the code to test the property htmlIntro
      //var instane = new Bombbomb.Curriculum();
      //expect(instance).to.be();
    });

    it('should have the property imgUrl (base name: "imgUrl")', function() {
      // uncomment below and update the code to test the property imgUrl
      //var instane = new Bombbomb.Curriculum();
      //expect(instance).to.be();
    });

    it('should have the property itemCount (base name: "itemCount")', function() {
      // uncomment below and update the code to test the property itemCount
      //var instane = new Bombbomb.Curriculum();
      //expect(instance).to.be();
    });

    it('should have the property renderAs (base name: "renderAs")', function() {
      // uncomment below and update the code to test the property renderAs
      //var instane = new Bombbomb.Curriculum();
      //expect(instance).to.be();
    });

    it('should have the property visibleToAllUsers (base name: "visibleToAllUsers")', function() {
      // uncomment below and update the code to test the property visibleToAllUsers
      //var instane = new Bombbomb.Curriculum();
      //expect(instance).to.be();
    });

    it('should have the property progress (base name: "progress")', function() {
      // uncomment below and update the code to test the property progress
      //var instane = new Bombbomb.Curriculum();
      //expect(instance).to.be();
    });

  });

}));
