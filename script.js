$(document).ready(function(){
    $(".Classes").hide();
    $("#classBut").click(function(){
      $(".Dashboard").hide();
      $(".Classes").show();
      $("#classBut").addClass("DashboardOption")
      $("#dashBut").removeClass("DashboardOption")
      $("#dashBut").addClass("EachOptions")
    });
    $("#dashBut").click(function(){
      $(".Dashboard").show();
      $(".Classes").hide();
      $("#dashBut").removeClass("EachOptions")
      $("#dashBut").addClass("DashboardOption")

      $("#classBut").removeClass("DashboardOption")
      $("#classBut").addClass("EachOptions")
    });
  });