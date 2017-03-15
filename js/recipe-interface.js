var Recipe = require('./../js/recipe.js').recipeModule;


var searchedFood = function(response){
  $('#display-results').empty();
  $('#show-image').empty();
  var array = response.hits;
  var recipeName = response.hits[0].recipe.label;
  var img = response.hits[0].recipe.image;
  var url = response.hits[0].recipe.url;
  var fat = response.hits[0].recipe.digest[0].label;
  for (i=0;i<array.length;i++){
      $('#display-results').append("<div class='show-image' id='show-image"+ i + "'></div><div class='display-results' id='display-results"+ i + "'><h4>" + response.hits[i].recipe.label + "</h4></div>");
      $("#show-image"+i).append("<img src="+response.hits[i].recipe.image+">");
  };
  for (i=0;i<array.length;i++){
    for (j=0;j<response.hits[i].recipe.digest.length;j++){
    $("#display-results"+i).append("<li>"+response.hits[i].recipe.digest[j].label+" - "+ parseFloat(response.hits[i].recipe.digest[j].total).toFixed(2) + response.hits[i].recipe.digest[j].unit +"</li>")
    };
  };
  // for (i=0;i<3;i++){
  //   $('#display-results' + i).append("<div class='display-results'" + i + "id='display-results'" + i + "><h4>" + response.hits[i].recipe.label + "</h4></div>");
  // };
  // $('#display-results').append("<h4>" + recipeName + "</h4><br><li>" + fat + "</li><li>" + "<a href=" + url + ">" + url + "</a>" + "</li>");
  // $('#show-image').append("<img src=" + img + ">");
};



$(document).ready(function(){
  var recipe = new Recipe;
  $('#search-form').submit(function(event){
    event.preventDefault();
    var food = $('#search-food').val();
    $('#search-food').val("");
    recipe.getRecipe(food, searchedFood);
  });
});
