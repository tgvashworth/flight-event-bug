define(function (require) {

  'use strict';

  /**
   * Module dependencies
   */

  var widget = require('component/widget');
  var changer = require('component/changer');

  /**
   * Module exports
   */

  return initialize;

  /**
   * Module function
   */

  function initialize() {
    changer.attachTo(document);
    widget.attachTo('#widget-1');
    widget.attachTo('#widget-2');
  }

});
