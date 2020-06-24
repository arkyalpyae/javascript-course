import axios from 'axios';

// export default class Search {
//     constructor (query) {
//         this.query =query;
//     }

    async function getResults(query) {
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/search?&q=${query}`);
            const result = res.data.recipes;
            console.log(result);
        } catch (error) {
            alert(error);
        }
    }
getResults('pizza');