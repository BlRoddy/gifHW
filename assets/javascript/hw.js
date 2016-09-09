 $(document).ready(function(){
	
	var animals = ["Chupacabra", "Jackalope", "Penguin", "Hedgehog", "Armadillo", "Snake"];

	addButton();


// creates buttons for each item in array
	function addButton(){

		$("#buttons").empty();

		for (var i = 0; i < animals.length; i++) {	
			var button = $("<button class='btn-primary'>");
			button.text(animals[i]);
			button.attr("value", animals[i]);
			$("#buttons").append(button);	
			$("#form").trigger("reset");	
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
		

		$.ajax({url: queryURL, method: 'GET'})
		 .done(function(response){
		 	var results = response.data;
		 	console.log(results);


		 	for (var i = 0; i < results.length; i++) {
		 		var gifDiv = $('<div>')

		 		var rating = results[i].rating;
		 		var p = $('<p>').text("Rating: " + rating);
		 		var image = $('<img>');
		 		image.attr('src', results[i].images.fixed_height_still.url);

		 		gifDiv.append(p);
		 		gifDiv.append(image);
		 		$("#gifs").prepend(gifDiv);

		 	};

		 });



	});



 });