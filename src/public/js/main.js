// angular.module("formValidation", [])
// .controller("mainCtrl", function($scope) {
//   $scope.helloWorld = function() {
//     console.log("Hello World");
//   };
// });


// Form Validation

// floating-label-form-group-with-value color


// .floating-label-form-group top-border

// .form-group button

$(".form-group button").click(function() {
  if ($("#name").length < 2) {
    $("#name").parent(".form-group").addClass("error-top").append("<p class='text-danger'>Your Name is required</p>");
    // console.log($("#name").length);
  }
});


$("#name").keyup(function() {
  if ($("input#name").length > 1) {
    console.log($("input#name").length);
    $(this).parent(".form-group").removeClass("error-top");
    $(this).children(".text-danger").hide();
  }
});
