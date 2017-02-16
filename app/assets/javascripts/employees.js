var employees = new Vue({
  el: '#employees',
  data: {
    employees: []
  },
  mounted: function() {
    var that;
    that = this;
    $.ajax({
      url: '/employees.json',
      success: function(res) {
        that.employees = res;
      }
    });
  }
});