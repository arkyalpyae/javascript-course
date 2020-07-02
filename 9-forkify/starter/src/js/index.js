import Search from  './models/Search';
import Recipe from './models/Recipe';
import * as SearchView from './views/searchView';
import * as RecipeView from './views/recipeView';
import { elements,renderLoader,clearLoader } from './views/base';

/**
 * Search Object
 * Current Recipe Object
 * Shopping List Object
 * Liked Recipes
 */

 const state = {};

/**
 * SEARCH CONTROLLER
 **/

 const controlSearch = async() =>{

    // 1) Get query from view
    const query =SearchView.getInput();

    // Highlight selected search item
    if (state.search) searchView.highlightSelected(id);

    if (query){
        // 2) New Search object and add to state
        state.search = new Search(query);


        // 3) Prepare UI for results
        SearchView.clearInput();
        SearchView.clearResult();
        renderLoader(elements.searchRes);


      try { 
        // 4) Search for recipes
        await state.search.getResults();
      } catch (error) {
        alert ("Something wrongs in Serch processing.....");
        
      }
      // 5) Render results on UI
      clearLoader();
      SearchView.renderResults(state.search.result);
    
  }

 }

 elements.searchForm.addEventListener('submit',e =>{
    e.preventDefault();
    controlSearch();
 });

 elements.searchResPages.addEventListener('click', e => {
  const btn = e.target.closest('.btn-inline');
  if (btn) {
      const goToPage = parseInt(btn.dataset.goto, 10);
      SearchView.clearResult();
      SearchView.renderResults(state.search.result, goToPage);
  }
});



/**
 * RECIPE CONTROLLER
 **/
const controlRecipe = async () => {
  //Get Id from URL
  const id = window.location.hash.replace("#","");
  if(id){
    // Prepares for UI changes
    RecipeView.clearRecipe();
    renderLoader(elements.recipe);
     //Create new Obj 
     state.recipe = new Recipe(id);
    try { 
        //Get recipe data
        await state.recipe.getRecipe();
        console.log(state.recipe.ingredients);
        state.recipe.parseIngerdients();

        //Calculate sevings and time
        state.recipe.calTime();
        state.recipe.calServings();

        //Render recipe
        clearLoader();
        RecipeView.renderRecipe(state.recipe);
    } catch (error) {
      alert("Error processing recipe!");
    }
  }
  
};
// window.addEventListener("hashchange",controlRecipe);
// window.addEventListener("load",controlRecipe);
['hashchange','load'].forEach(event => window.addEventListener(event,controlRecipe));

elements.recipe.addEventListener('click',e => {
    //decrease
    if(e.target.matches('.btn-decrease, .btn-decrease *')){
      if(state.recipe.servings > 1){
        state.recipe.updateServings('dec');
        RecipeView.updateServingsIngredients(state.recipe);
      }
    }else if (e.target.matches('.btn-increase, .btn-increase *')){
      state.recipe.updateServings('inc');
      RecipeView.updateServingsIngredients(state.recipe);
    }
    console.log(state.recipe);
});