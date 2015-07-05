import Ember from 'ember';
import ApplicationRouteMixin from 'simple-auth/mixins/application-route-mixin';

export default Ember.Route.extend(ApplicationRouteMixin, {
  actions: {
    login(auth){
      this.get('session').authenticate('simple-auth-authenticator:devise', auth).then(() => {
        console.log("we're in!");
      });
      return false;
    },
    register(){
      console.log('register this');
      return false;
    },
    logout(){
      this.get('session').invalidate();
    }
  }
});
