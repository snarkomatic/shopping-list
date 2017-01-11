$(document).ready(function() {
  // codes to be added here later
});

// to add item to end of list
$('.js-shopping-list-form').submit(function(event) {
  var listItem = // stuff;
  $('.shopping-list').append(listItem);
});

// check items
$('.shopping-item-toggle').on('click', 'button', function() {
  $(this).closest('.shopping-item').toggleClass('shopping-item__checked');
});

// delete items
