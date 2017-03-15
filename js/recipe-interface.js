var Recipe = require('./../js/recipe.js').recipeModule;

var displayMacros = function(recipeName, fatContent, url, image){
  $('#display-results').empty();
  $('#display-results').append("<h4>" + recipeName + "</h4><br><li>" + fatContent + "</li><li>" + "<a href=" + url + ">" + url + "</a>" + "</li>");
  $('#show-image').empty();
  $('#show-image').append("<img src=" + image + ">");
};



$(document).ready(function(){
  var recipe = new Recipe;
  $('#button').click(function(){
    var food = $('#search-food').val();
    $('#search-food').val("");
    recipe.getRecipe(food, displayMacros);
  });
});
