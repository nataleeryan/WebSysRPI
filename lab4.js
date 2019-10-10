$(document).ready(function() {


  $("#coverart").click(function(){
    $.getJSON("lab4.json", function(data) {

      for (var i = 0; i < data.length; i++) {
        var obj = data[i];
        for (var key in obj){

          var value = obj[key];

          //prints to console to show all data is retrieved
          console.log(key + ": " + value);

          // to set all other values in proper id's
          if (key != 'site'){
            $('#' + key).html(value);
          }

          // to ensure value doesn't replace coverart
          if (key === 'site'){
            $("a").attr("href", value);
          }

          // to set coverart
          if (key === 'coverart'){
            $("img").attr("src", value);
          }
        }
      }

    });
  });

});
