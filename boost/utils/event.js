'use strict'

const _ = require('lodash')
const Dispatcher = require('./event/dispatcher')

/**
 * The base class for custom events. Each event
 * in the `app/events` folder must implement
 * this class.
 */
class Event {
  /**
   * Returns the event name. By default, it
   * returns the class name.
   *
   * Example
   * ```
   * class UserRegistered extens Event {}
   * const event = new UserRegistered()
   * console.log(event.emit())
   * -> output is "UserRegistered"
   * ```
   *
   * @returns {String}
   */
  emit() {
    return this.constructor.name
  }

  /**
   * Fire an event. You can pass either a string
   * that identifies the event or an event
   * instance.
   *
   * @param {object|String} event
   */
  static fire(event) {
    Dispatcher.fire(event)
  }

  /**
   * Create a custom event with event handler.
   *
   * @param {String} event
   * @param {Object} handler
   */
  static on(event, handler) {
    Dispatcher.listen(event, handler)
  }

  /**
   * Create a custom event with event handler.
   *
   * @param {String} event
   * @param {Object} handler
   */
  static listen(event, handler) {
    Dispatcher.listen(event, handler)
  }
}

module.exports = Event