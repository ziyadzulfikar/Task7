$(document).ready(function(){
    $(".Learning").hide();
    $(".Resources").hide();
    $(".Classes").hide();
    $("#classBut").click(function(){
      $(".Dashboard").hide();
      $(".Resources").hide();
      $(".Classes").show();
      $(".Learning").hide();
      $("#classBut").addClass("DashboardOption")

      $("#dashBut").removeClass("DashboardOption")
      $("#dashBut").addClass("EachOptions")
      $("#resBut").removeClass("DashboardOption")
      $("#resBut").addClass("EachOptions")
      $("#learnBut").removeClass("DashboardOption")
      $("#learnBut").addClass("EachOptions")
    });
    $("#dashBut").click(function(){
      $(".Dashboard").show();
      $(".Resources").hide();
      $(".Classes").hide();
      $(".Learning").hide();
      $("#dashBut").removeClass("EachOptions")
      $("#dashBut").addClass("DashboardOption")

      $("#learnBut").removeClass("DashboardOption")
      $("#learnBut").addClass("EachOptions")
      $("#resBut").removeClass("DashboardOption")
      $("#resBut").addClass("EachOptions")
      $("#classBut").removeClass("DashboardOption")
      $("#classBut").addClass("EachOptions")
    });
    $("#resBut").click(function(){
      $(".Resources").show();
      $(".Dashboard").hide();
      $(".Classes").hide();
      $(".Learning").hide();
      $("#resBut").addClass("DashboardOption")

      $("#learnBut").removeClass("DashboardOption")
      $("#learnBut").addClass("EachOptions")
      $("#dashBut").removeClass("DashboardOption")
      $("#dashBut").addClass("EachOptions")
      $("#classBut").removeClass("DashboardOption")
      $("#classBut").addClass("EachOptions")
    });
    $("#learnBut").click(function(){
      $(".Learning").show();
      $(".Resources").hide();
      $(".Dashboard").hide();
      $(".Classes").hide();
      $("#learnBut").addClass("DashboardOption")

      $("#resBut").removeClass("DashboardOption")
      $("#resBut").addClass("EachOptions")
      $("#dashBut").removeClass("DashboardOption")
      $("#dashBut").addClass("EachOptions")
      $("#classBut").removeClass("DashboardOption")
      $("#classBut").addClass("EachOptions")
    });
  });

  function chat(){
    $.iaoAlert({

      // default message
      msg: "Sorry!! This site is under Construction",
    
      // or 'success', 'error', 'warning'
      type: "error",
    
      // or dark
      mode: "dark",
    
      // auto hide
      autoHide: true,
    
      // timeout in milliseconds
      alertTime: "3000",
    
      // fade animation speed
      fadeTime: "500",
    
      // shows close button
      closeButton: true,
    
      // close on click
      closeOnClick: false,
    
      // custom position
      position: 'top-right',
    
      // fade on hover
      fadeOnHover: true,
    
      // rounded corners
      roundedCorner: false,
    
      // z-index
      zIndex: '999',
    
      // additional CSS class(es)
      alertClass: ''
    
    })
  }

  function settings(){
    $.iaoAlert({

      // default message
      msg: "Sorry!! This site is under Construction",
    
      // or 'success', 'error', 'warning'
      type: "error",
    
      // or dark
      mode: "dark",
    
      // auto hide
      autoHide: true,
    
      // timeout in milliseconds
      alertTime: "3000",
    
      // fade animation speed
      fadeTime: "500",
    
      // shows close button
      closeButton: true,
    
      // close on click
      closeOnClick: false,
    
      // custom position
      position: 'top-right',
    
      // fade on hover
      fadeOnHover: true,
    
      // rounded corners
      roundedCorner: false,
    
      // z-index
      zIndex: '999',
    
      // additional CSS class(es)
      alertClass: ''
    
    })
  }