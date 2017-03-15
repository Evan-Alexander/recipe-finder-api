var Recipe = require('./../js/recipe.js').recipeModule;


var searchedFood = function(response){
  $('#display-results').empty();
  $('#show-image').empty();
  var array = response.hits;
  for (i=0;i<array.length;i++){
      $('#display-results').append(" <div class='well col-md-6 capsule' id='capsule"+ i + "'><div class='show-image' id='show-image"+ i + "'></div><div class='display-results' id='display-results"+ i + "'><h4>" + response.hits[i].recipe.label + "</h4></div></div>");
      $("#show-image"+i).append("<a href='"+response.hits[i].recipe.url+"'><img src="+response.hits[i].recipe.image+"></a>");
  };
  for (i=0;i<array.length;i++){
    for (j=0;j<3;j++){
    $("#display-results"+i).append("<li>"+response.hits[i].recipe.digest[j].label+" - "+ parseFloat(response.hits[i].recipe.digest[j].total).toFixed(2) + response.hits[i].recipe.digest[j].unit +"</li>")
    };
  };
};

var healthSearch = function(response){
  $('#display-results').empty();
  $('#show-image').empty();
  var array = response.hits;
  for (i=0;i<array.length;i++){
      $('#display-results').append(" <div class='well col-md-6 capsule' id='capsule"+ i + "'><div class='show-image' id='show-image"+ i + "'></div><div class='display-results' id='display-results"+ i + "'><h4>" + response.hits[i].recipe.label + "</h4></div></div>");
      $("#show-image"+i).append("<a href='"+response.hits[i].recipe.url+"'><img src="+response.hits[i].recipe.image+"></a>");
  };
  for (i=0;i<array.length;i++){
    for (j=0;j<3;j++){
    $("#display-results"+i).append("<li>"+response.hits[i].recipe.digest[j].label+" - "+ parseFloat(response.hits[i].recipe.digest[j].total).toFixed(2) + response.hits[i].recipe.digest[j].unit +"</li>")
    };
  };
};



$(document).ready(function(){
  var recipe = new Recipe;
  $('#search-form').submit(function(event){
    event.preventDefault();
    var food = $('#search-food').val();
    $('#search-food').val("");
    recipe.getRecipe(food, searchedFood);
  });
  $('#health-label').submit(function(event) {
    event.preventDefault();
    $('#search-health').val("");
    var food = $('#search-health').val();
    var healthLabel = $('#health option:selected').val();
    console.log(healthLabel);
    recipe.getSearch(food, healthLabel, healthSearch);
  });
});
