// export const add = (a,b) => a+b;
// export const multiply = (a,b) => a*b;
// export const ID =3;
// import { elements } from './base';
// import { compilation } from 'webpack';
// export const getInput = () => elements.searchInput.value;


// export const clearInput = () => {
//     elements.searchInput.value = '';
// };

// export const clearResult = () => {
//     elements.searchResultList.innerHTML= '';
// };
// export const limitRecipeTitle = (title, limit = 17) => {
//     const newTitle = [];
//     if (title.length > limit) {
//         title.split(' ').reduce((acc, cur) => {
//             if (acc + cur.length <= limit) {
//                 newTitle.push(cur);
//             }
//             return acc + cur.length;
//         }, 0);

//         // return result
//         return `${newTitle.join(' ')} ...`;
//     }
//     return title;
// }
 
// const renderRecipe = recipe => {
//     const markup = `
//         <li>
//             <a class="results__link results__link--active" href="#${recipe.recipe_id}">
//                 <figure class="results__fig">
//                     <img src="${recipe.image_url}" alt="${recipe.title}">
//                 </figure>
//                 <div class="results__data">
//                     <h4 class="results__name">${recipe.title}</h4>
//                     <p class="results__author">${recipe.publisher}</p>
//                 </div>
//             </a>
//          </li>
//      `;
//      elements.searchResultList.insertAdjacentHTML('beforeend',markup);

// } 
// export const renderResults = (recipes,page =1 ,resPerpage =10 ) => {
//     const start = (page -1)* resPerpage;
//     const end = page * resPerpage;
//     recipes.slice(start).forEach(renderRecipe);
// }
