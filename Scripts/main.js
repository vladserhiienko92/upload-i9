$(document).ready(function(){
    $(".form-group :input").focus(function() {
        $(this).closest(".form-group").find("label").addClass("labelfocus");
    }).blur(function() {
        $("label").removeClass("labelfocus");
    });

    /*-------------------  Process Tabs  --------------------*/

    var counter = 1;
    $('.audit-tab').each(function() {
        $(this).attr('data-tab', counter);
        counter++;
    });

    counter = 1;
    $('.table-audit').each(function() {
        $(this).attr('data-tab', counter);
        counter++;
    });

    $(document).on('click', '.audit-tab', function(e) {

        e.preventDefault();
        var tab_id = $(this).attr('data-tab');
        $('.active[data-tab]').removeClass('active');
        $('[data-tab="' + tab_id + '"]').addClass('active');

    });

    /*-------------------  Select  --------------------*/

    $(document).on("click", 'input[type="radio"]', function(){
        if ($(this).hasClass('input-select')) {
            $(".audit-select").attr("disabled", false);
        } else {
            $(".audit-select").attr("disabled", true);
        }
    });

    /*-------------------  Nicescroll  --------------------*/

    $(".sidebar, .qc-questions").niceScroll({
      cursorwidth: 5,
      cursorborderradius: 0,
      cursorcolor:'#0c5fad',
      cursorborder:'none',
      autohidemode:false,
      background:"rgb(232 , 232, 232)"
    });

    $(document).on("click", ".hide-details", function(){
      $(".upload-details").slideToggle();
      return false;
    });

    $(document).on("click", ".expand-button", function(){
      $(".upload-table").slideToggle();
      return false;
    });

  function formatIco (e) {
    if (!e.id) {
      // console.log("e.id = " + e.id);
      return e.text;
    }
    else {
      // console.log("e.element.value = " + e.element.value);
      var $sitem = $(
        '<span>' +
        '<i class="' + e.element.value + '"></i>  ' +
        e.text +
        '</span>'
      );

      return $sitem;
    }
  };

  $('select').select2({
    minimumResultsForSearch: Infinity,
    templateResult: formatIco,
    templateSelection: formatIco

  });

  $( ".input-datepicker" ).datepicker({
    showOn: "button",
    buttonImage: "Content/images/ico-datepicker.png"
  });

  $('.star-rating').rating();

  $('[data-toggle="popover"]').popover();

  $('body').on('click', function (e) {
    $('[data-toggle="popover"]').each(function () {
      //the 'is' for buttons that trigger popups
      //the 'has' for icons within a button that triggers a popup
      if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.popover').has(e.target).length === 0) {
        $(this).popover('hide');
      }
    });
  });

  $('.pd-list .pd-item .pd-item-header a').click(function(e){
    e.preventDefault();
    $(this).closest(".pd-item").toggleClass("active");
  });

  //colorbox bind
  $('a.colorbox').colorbox({rel:'nofollow'});

});

angular.module('app', [])
  .controller('StepsFormCtrl', function($scope){
    $scope.currentStep = 1;
    $scope.nextStep = function(){
      $scope.currentStep++;
    };
    $scope.previousStep = function(){
      if ($scope.currentStep > 1){
        $scope.currentStep--;
      }
    };
  });
