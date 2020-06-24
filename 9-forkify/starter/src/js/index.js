import Search from  './models/Search';
import * as SearchView from './views/searchView.js';
import { elements,renderLoader,clearLoader } from './views/base.js';

/**
 * Search Object
 * Current Recipe Object
 * Shopping List Object
 * Liked Recipes
 */

 const state = {};


 const controlSearch = () =>{

    // 1) Get query from view
    const query =SearchView.getInput();

    if (query){
        // 2) New Search object and add to state
        state.search = new Search(query);

        // 3) Prepare UI for results
        SearchView.clearInput();
        SearchView.clearResult();
        renderLoader(elements.searchRes);


        // 4) Search for recipes
        // await state.search.getResults();


        // 5) Render reseults on UI
        clearLoader();
        SearchView.renderResults(state.search.result);

    }

 }
 elements.searchForm.addEventListener('.search').addEventListener('submit',e =>{
    e.preventDefault();
    controlSearch();
 });
