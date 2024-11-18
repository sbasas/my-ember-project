import EmberRouter from '@ember/routing/router';
import config from 'my-ember-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('posts', function () {
    this.route('show', { path: '/:post_id' });
  });
});
