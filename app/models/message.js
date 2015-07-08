import DS from 'ember-data';

export default DS.Model.extend({
  channel: DS.belongsTo('channel'),
  body: DS.attr('string'),
  sender: DS.attr('string'),
  timestamp: DS.attr('number')
});
