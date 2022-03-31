export default class EventBus {
 
  constructor() {
    this._listeners = [];
  }


  /**
   * add event listener
   * @param type
   * @param cb
   * @returns {{type: *, callback: *}}
   */
  register(type, cb) {
    let listener = { type: type, callback: cb };
    this._listeners.push(listener);
    return listener;
  }

  /**
   * trigger event
   * @param custom event
   */
  fire(ce) {
    this._listeners.forEach(function(l) { 
      if (ce.type === l.type) {
        l.callback.apply(this, [ce]);
      }
    });
  }

}

