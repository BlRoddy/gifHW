 $(document).ready(function(){
	
	var animals = ["Dog", "Cat", "Penguin", "Hedgehog", "Frog", "Armadillo", "Snake"];


	addButton();



	function addButton(){
		for (var i = 0; i < animals.length; i++) {
			
			var button = $("<button>");
			button.text(animals[i]);
			button.attr("value", animals[i]);
			$("#buttons").append(button);
			
		};
	};







 });