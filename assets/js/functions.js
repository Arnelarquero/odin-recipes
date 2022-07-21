var menulist = document.getElementById("menulist");

        function togglemenu(){
        if(menulist.style.maxHeight== "0px"){
        }
        else{
          menulist.style.maxHeight = "0px";
        }
      }
    

      $.get("../../navigation.html", function(data){
        $("#nav-container").replaceWith(data);
    });

