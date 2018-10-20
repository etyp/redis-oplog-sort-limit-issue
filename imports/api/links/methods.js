// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Links } from './links.js';

Meteor.methods({
  'links.insert'(title, url) {
    check(url, String);
    check(title, String);

    return Links.insert({
      url,
      title,
      createdAt: new Date(),
      delete: false,
    });
  },
  'links.delete'(_id) {
    check(_id, String);
    Links.update({ _id }, { $set: { deleted: true } });
    if (Meteor.isServer) {
      Meteor.setTimeout(() => {
        console.log('Undoing delete');
        Links.update({ _id }, { $set: { deleted: false } });
      }, 5000);
    }
  },
});
