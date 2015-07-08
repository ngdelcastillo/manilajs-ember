import Ember from 'ember';

export function markedDown(message) {
  return new Ember.Handlebars.SafeString(window.marked(message));
}

export default Ember.Handlebars.makeBoundHelper(markedDown);
