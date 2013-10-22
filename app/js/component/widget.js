define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var defineComponent = require('flight/lib/component');

  /**
   * Module exports
   */

  return defineComponent(widget);

  /**
   * Module function
   */

  function widget() {
    this.defaultAttrs({
      buttonSelector: 'button'
    });

    this.changeColor = function (event, data) {
      this.$node.css({
        backgroundColor: data.color
      });
    };

    this.turnMeOff = function () {
      this.off(document, 'changeColor', this.changeColor);
      this.select('buttonSelector').attr('disabled', true);
    };

    this.after('initialize', function () {
      this.on(document, 'changeColor', this.changeColor);
      this.on('click', {
        buttonSelector: this.turnMeOff
      })
    });
  }

});
