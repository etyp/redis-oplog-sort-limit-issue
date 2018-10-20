// All links-related publications

import { Meteor } from 'meteor/meteor';
import { _ } from 'meteor/underscore';
import { Links } from '../links.js';

Meteor.startup(() => {
  if (Links.find({}).count() < 30) {
    _.times(30, (n) => {
      const title = `Link #${n}`;
      const url = `https://google.com/search?q=number${n}`;
      Meteor.call('links.insert', title, url);
    });
  }
});

Meteor.publish('links.all', function () {
  // Removing sort works, but with sort it breaks.
  return Links.find({ deleted: false }, { limit: 5, sort: { title: 1 } });
});
