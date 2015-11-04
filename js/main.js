$(function() {	

	// Variables for page

	// Empty Array for Shopping List
	var shoppingListItems = [];

	var $mainButton = $('.main-add-btn');
	var $newItemForm = $('#new-form');

	var $textInput = $('#new-item');
	var $shoppingList = $('#shopping-list');

	var $newHeader = $('h1.header');
	var $editItem = $('<input type="text" />'); 


	// Get Year
	var year = $("#footer-info");
	year.html('<p>Grocer Copyright &copy;' + new Date().getFullYear()+ '</p>');

	console.log(year);

	$mainButton.show();
	$newItemForm.hide();

	// Item counter for Page
	function updateCounter() {
		var items = $('li.new-item').length;
		//Insert item count to page
		$('.items').text(items);
	}

	updateCounter();

	// Add a new shopping item button at start of page, hide $mainButton and fadeIn the $newItemForm
	// focus on the $textInput
	$mainButton.on('click', function() {
		$mainButton.hide();
		$newItemForm.fadeIn(500);
		$textInput.focus();
	});

	// Form submit button
	$newItemForm.on('submit', function(e) {
		e.preventDefault();

		$textInput.addClass('new');

		var textInput = $textInput.val();

		if(textInput === '') {
			var $error = $('#error').html('<p class="error">Please enter an item to make your list</p>');
			$error.fadeOut(5000);
			console.log("What");
			return false;
		} else {

		// Add li's to ul class shopping list
		$shoppingList.append('<li class="new-item group"><p class="new">' + textInput + '</p><span class="icon-bin"></span></li>');

		// Counter for items
		items = $('p.new').length;

		//Add items to the array
		shoppingListItems.push(textInput);
		console.log(shoppingListItems);

		$textInput.val('');

		// Change header when items are added
		$newHeader = $('h1.header').html('Grocer ' + '<span class="items">' + items +'</span>');

		// Hide form and show button
		$newItemForm.hide();
		$mainButton.show();

		}

	});

/*
	//Check off items
	$shoppingList.on('click', 'li.new-item', function(e) {
		$(this).addClass('strikethrough').css({
													'background': 'lightblue',
													'color': '#fff'});
	});

*/

	//Delete line items from shopping list

	$shoppingList.on('click', '.icon-bin', function() {
		$(this).parent().remove();
		updateCounter();
	});
	


	// Edit line item 



});
























































