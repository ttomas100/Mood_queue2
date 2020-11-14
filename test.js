    var artist = $("#search-term").val()
    var queryURL= "https://api.deezer.com/search?q=" + artist;

    $("#search-term").keypress(function(event) { 
	
      if (event.keyCode === 13) { 
        event.preventDefault();
        $("#run-search").click(); 
      } 
    });
  
    function getData(){  
    $.ajax({
        url: queryURL,
        method: "GET"
      }).them(function(response) {
        console.log(response);
      
    });

    $('#happybtn').on('click', function(){
      alert("test");
    });


    $('#angrybtn').on('click', function(){
      alert("test");
    });

    $('#sadbtn').on('click', function(){
      alert("test");
    });