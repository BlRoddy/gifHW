 $(document).ready(function(){
	
	var animals = ["Chupacabra", "Jackalope", "Penguin", "Hedgehog", "Armadillo", "Snake", "Sharktopus"];
	var move;
	var still;

	addButton();


//creates buttons for each item in array
	function addButton(){
	
		$("#buttons").empty();

		for (var i = 0; i < animals.length; i++) {	
			var button = $("<button class='btn-primary'>");
			button.text(animals[i]);
			button.attr("value", animals[i]);
			$("#buttons").append(button).append(" ");	
			$("#form").trigger('reset');	
		};
	};

// adds user input into the array

	$("#form").submit(function(event){
		event.preventDefault();
		var input = $("#input").val().trim();
		animals.push(input);
		addButton();
	});


// on click function for buttons

	$(document.body).on('click','button', function(){
		var a = $(this).text();
		var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + a + "&api_key=dc6zaTOxFJmzC&limit=10";
		console.log(queryURL);

		$("#gifs").empty();

		$.ajax({url: queryURL, method: 'GET'})
		 .done(function(response){
		 	var results = response.data;
		 	console.log(results);


		 	for (var i = 0; i < results.length; i++) {
		 		
		 		var gifDiv = $('<div>');

		 		var still = results[i].images.fixed_height_still.url;
		 		var move = results[i].images.fixed_height.url;
		 		var rating = results[i].rating;

		 		var p = $('<p>').text("Rating: " + rating);
		 		var image = $('<img>');

		 		image.attr('src', still);
		 		image.attr('data-still', still);
		 		image.attr('data-move', move);
		 		image.attr('data-state', 'still');

		 		gifDiv.append(p);
		 		gifDiv.append(image);
		 		$("#gifs").prepend(gifDiv);
		 	};

	//need on click function to convert still images to animated

			$("img").click(function(){
				console.log("click works");

				var state = $(this).attr('data-state');
				
			
				  if (state == 'still'){
		                $(this).attr("src", move);
		                $(this).attr('data-state', 'move');
		            }

		            else{
		                $(this).attr('src', still);
		                $(this).attr('data-state', 'still');
		            }

			});
			
		});

	 });

 });