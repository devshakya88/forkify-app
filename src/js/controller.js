// console.log('Hello From Controller');
import * as model from './model.js';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);

    if (!id) return;
    recipeView.renderSpinner();

    //Loading Reciper
    await model.loadRecipe(id);

    //2. Rendering Recipe
    recipeView.render(model.state.recipe);
    const recipeView = new recipeView(model.state.recipe);
  } catch (error) {
    console.log(error);
    recipeView.renderError();
  }
};

const init = function () {
  recipeView.addHandleRender(controlRecipes);
};
init();
