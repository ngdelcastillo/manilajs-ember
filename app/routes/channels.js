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
  },
  setupController(controller, model){
    controller.set('hasChannels', true);
    controller.set('channels', model.channels);
  },
  actions: {
    createChannel(params){
      let channel = this.store.createRecord('channel', params);
      channel.save();
      return false;
    }
  }
});
