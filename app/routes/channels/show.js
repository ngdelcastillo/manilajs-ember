import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.find('channel', params['id']).then((channel) => {
      return Ember.RSVP.hash({
        channel: channel,
        messages: channel.get('messages')
      });
    });
  },
  setupController(controller, model){
    controller.set('channel', model.channel);
    controller.set('messages', model.messages);
  },
  actions: {
    createMessage(params){
      params.sender = this.get('session.secure.email');
      params.timestamp = new Date().getTime();
      let message = this.store.createRecord('message', params);
      let channel = this.modelFor('channels.show').channel;
      channel.get('messages').addObject(message);
      channel.save();
    }
  }
});
