/*****************************************************************************/
/* Admin: Event Handlers */
/*****************************************************************************/
Template.Admin.events({
});

/*****************************************************************************/
/* Admin: Helpers */
/*****************************************************************************/
Template.Admin.helpers({
});

/*****************************************************************************/
/* Admin: Lifecycle Hooks */
/*****************************************************************************/
Template.Admin.onCreated(function () {
});

Template.Admin.onRendered(function () {
});

Template.Admin.onDestroyed(function () {
});


/*****************************************************************************/
/* AdminNav: Event Handlers */
/*****************************************************************************/
Template.AdminNav.events({
  'click .adminLinks':function (event) {
    $('.adminLinks').removeClass('active');
  },
  'click #usersLink':function (event) {
    $('#usersLink').addClass('active');
  },
  'click #rolesLink':function (event) {
    $('#rolesLink').addClass('active');
  }
});

/*****************************************************************************/
/* AdminNav: Helpers */
/*****************************************************************************/
Template.AdminNav.helpers({
});

/*****************************************************************************/
/* AdminNav: Lifecycle Hooks */
/*****************************************************************************/
Template.AdminNav.onCreated(function () {
});

Template.AdminNav.onRendered(function () {
  $('#usersLink').addClass('active');
});

Template.AdminNav.onDestroyed(function () {
});
