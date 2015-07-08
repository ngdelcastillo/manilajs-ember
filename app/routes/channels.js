import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel(){
    if (!this.get('session.isAuthenticated')){
      this.transitionTo('index');
    }
  },
  model(){
    // Gets all the channels
    return this.store.find('channel').then((channels) => {
      return Ember.RSVP.hash({
        channels: channels
      });
    });
  }
});
