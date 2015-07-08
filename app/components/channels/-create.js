import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createChannel(){
      Ember.$('.modal').modal('hide');
      this.sendAction('createChannel', {name: this.get('name')});
    }
  }
});
