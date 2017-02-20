Vue.component('employee-row', {
  template: '#employee-row',
  props: {
    employee: Object
  }
})

var employees = new Vue({
  el: '#employees',
  data: {
    employees: [],
    employee: {},
    errors: {}
  },
  mounted: function() {
    var that;
    that = this;
    this.clearNewEmploye();
    $.ajax({
      url: '/employees.json',
      success: function(res) {
        that.employees = res;
      }
    });
  },
  methods: {
    clearNewEmploye: function (){
      this.employee = {
        name: '',
        email: '',
        manager: false
      }
    },
    hireEmployee: function () {
      var that = this;
      $.ajax({
        method: 'POST',
        data: {
          employee: that.employee,
        },
        url: '/employees.json',
        success: function(res) {
          that.errors = {}
          that.employees.push(res);
          that.clearNewEmploye();
        },
        error: function(res) {
          that.errors = res.responseJSON.errors
        }
      })
    }
  }
});