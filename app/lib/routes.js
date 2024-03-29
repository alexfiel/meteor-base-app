Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});

Router.route('/login', {
  name: 'login',
  controller: 'LoginController',
  where: 'client'
});

Router.route('/admin', {
  name: 'admin',
  controller: 'AdminController',
  where: 'client'
});
