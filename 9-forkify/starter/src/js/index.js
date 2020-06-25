import Search from  './models/Search';
import * as SearchView from './views/searchView';
import { elements,renderLoader,clearLoader } from './views/base';

/**
 * Search Object
 * Current Recipe Object
 * Shopping List Object
 * Liked Recipes
 */

 const state = {};



 const controlSearch = async() =>{

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
      await state.search.getResults();

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
