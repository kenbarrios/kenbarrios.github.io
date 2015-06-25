$(function(){

  function showBio(){
    $("#projectsList").click(function(event){
      var targetId = event.target.id;
      console.log(targetId);
      if (targetId === "projectOne"){
        $("#bioOne").fadeIn(1500);
      }
      else if (targetId === "titleOne"){
        $("#bioOne").fadeIn(1500);
      }
      else if (targetId === "projectTwo"){
        $("#bioTwo").fadeIn(1500);
      }
      else if (targetId === "titleTwo"){
        $("#bioTwo").fadeIn(1500);
      }
      else if (targetId === "projectThree"){
        $("#bioThree").fadeIn(1500);
      }
      else if (targetId === "titleThree"){
        $("#bioThree").fadeIn(1500);
      }
      else if (targetId === "projectFour"){
        $("#bioFour").fadeIn(1500);
      }
      else if (targetId === "titleFour"){
        $("#bioFour").fadeIn(1500);
      }
    });
  };

    showBio();

  function closeBio(){
    $(".closeBtn").click(function(event){
      $("#bioOne").fadeOut(1500);
      $("#bioTwo").fadeOut(1500);
      $("#bioThree").fadeOut(1500);
      $("#bioFour").fadeOut(1500);
    });
  };
    closeBio();

});
