 $(document).ready(function(){
	
	var animals = ["Dog", "Cat", "Penguin", "Hedgehog", "Frog", "Armadillo", "Snake"];


	addButton();



	function addButton(){

		$("#buttons").empty();

		for (var i = 0; i < animals.length; i++) {	
			var button = $("<button class='btn-primary'>");
			button.text(animals[i]);
			button.attr("value", animals[i]);
			$("#buttons").append(button);		
		};
	};

		$("#form").submit(function(event){
			event.preventDefault();
			var input = $("#input").val().trim();
			animals.push(input);
			addButton();

	});



 });