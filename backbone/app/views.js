var app = app || {};

app.mainView = Backbone.View.extend({
    el: '#app',

    events: {
        'click #btn1': 'sayHello',
        'click #btn2':  'show2',
        'click #btn3':  'show3'
    },

    initialize: function () {
        console.log('Hey there!');
    },

    sayHello: function () {
        this.hideElement($('#txt2'));
        this.hideElement($('#txt3'));
        this.showElement($('#txt1'));
    },

    show2: function () {
      this.hideElement($('#txt3'));
      this.hideElement($('#txt1'));
      this.showElement($('#txt2'));
      console.log('show 2')
    },

    show3: function () {
      this.hideElement($('#txt2'));
      this.hideElement($('#txt1'));
      this.showElement($('#txt3'));
    },

    hideElement: function (selector) {
        selector.addClass('hidden');
    },

    showElement: function (selector) {
        selector.removeClass('hidden');
    }

});
