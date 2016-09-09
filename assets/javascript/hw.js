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



 });