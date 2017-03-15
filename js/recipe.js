var apiKey = "d133f0986c5db001a51db5b6be428b6a";
var id = '3f317947';

function Recipe() {
}

Recipe.prototype.getRecipe = function(food, searchedFood) {
  $.get(  "https://api.edamam.com/search?q="+food+"&app_id=3f317947&app_key=d133f0986c5db001a51db5b6be428b6a&from=0&to=25")
  .then(function(response){
    searchedFood(response);
    console.log(response);
  }).fail(function(error) {
    alert("fail");
  });

};
exports.recipeModule = Recipe;


// response.hits[0].recipe.label *
// response.hits[0].recipe.image *
// response.hits[0].recipe.url *
// response.hits[0].recipe.digest[]
