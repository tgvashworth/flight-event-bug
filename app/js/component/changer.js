define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(changer);

  /**
   * Module function
   */

  function changer() {
    this.defaultAttrs({
      buttonSelector: '#change'
    });

    var randcol = function () {
      return Math.floor(Math.random() * 255);
    };

    this.triggerChange = function () {
      var color = 'rgb(' + [randcol(), randcol(), randcol()].join(',') + ')';
      console.log('color', color);
      this.trigger('changeColor', {
        color: color
      });
    };

    this.after('initialize', function () {
      this.on('click', {
        buttonSelector: this.triggerChange
      });
    });
  }

});
