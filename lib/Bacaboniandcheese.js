//Bacaboniandcheese.js
//Provides Backbone views with a D3 selector

//Only explicitly supports Backbone 1.0.0


if(Backbone.VERSION==='1.0.0') {
  Backbone.View.prototype.setElement: function(element, delegate) {
    if (this.$el) this.undelegateEvents();
    this.$el = element instanceof Backbone.$ ? element : Backbone.$(element);
    this.el = this.$el[0];
    /*========CHEESE========*/
    this.D3 = D3.Select(this.el);
    /*========CHEESE========*/
    if (delegate !== false) this.delegateEvents();
    return this;
  }
}