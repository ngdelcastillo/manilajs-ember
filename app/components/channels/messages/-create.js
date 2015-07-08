import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    createMessage(){
      this.sendAction('createMessage', {body: this.get('body')});
    }
  }
});
