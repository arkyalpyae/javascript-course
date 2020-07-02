import axios from 'axios';
import { ajaxPrefilter } from 'jquery';

export default class Recipe {
    constructor (id){
        this.id = id;
    }
    async getRecipe (){
        try {
            const res = await axios(`https://forkify-api.herokuapp.com/api/get?&rId=${this.id}`);
            this.title = res.data.recipe.title;
            this.author = res.data.recipe.publisher;
            this.img = res.data.recipe.image_url;
            this.url = res.data.recipe.source_url;
            this.ingredients = res.data.recipe.ingredients;

        } catch (error) {
            alert('Somethings wrongs! : (');
        }
         
    }

    calTime(){
        //assume that we need 15 min for each 3 ingredients
        const numIng = this.ingredients.length;
        const periods = Math.ceil(numIng/3);
        this.time = periods * 15;
    }
    calServings(){
        this.servings = 4;
    }

    parseIngerdients(){
        const unitsLong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const unit = [...unitsShort,'kg','g'];

        const newIngredients = this.ingredients.map(el => {
            
            // 1) Uniform units
            let ingredient = el.toLowerCase();
            unitsLong.forEach((unit,i)=>{
                ingredient = ingredient.replace(unit,unitsShort[i]);

            });
        
            // 2) remove paretheses
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');


            // 3) Parse indgredients into count,unit and indredient
            const arrIng =ingredient.split(' ');
            const unitIndex =arrIng.findIndex(el2 => unit.includes(el2));

            let objIng;
            if(unitIndex > -1){
                //This is uint
                const arrCount = arrIng.slice(0,unitIndex);
                let count;
                if(arrCount === 1){
                    count =eval(arrIng[0].replace('-','+'));
                }else{
                    count = eval(arrIng.slice(0,unitIndex).join('+'));
                }
                objIng ={
                    count,
                    unit: arrIng[unitIndex],
                    ingredient : arrIng.slice(unitIndex+1).join(' ')
                };
            }
            else if(parseInt(arrIng[0],10)){
                //This is Not units ,but 1st is number
                objIng={
                    count : parseInt(arrIng[0],10),
                    unit : '',
                    ingredient : arrIng.slice(1).join(' ')
                }

            }else if( unitIndex === -1){
                //This is Not unit ,no number in 1st
                objIng = {
                    count :'1',
                    unit : '',
                    ingredient
                }
            }
            return objIng;
        });
        this.ingredients =newIngredients;
    }

    updateServings (type) {
        //servings
        const newServings = type === 'dec' ? this.servings-1 :this.servings+1;

        //Ingredients
        this.ingredients.forEach(ing =>{
            ing.count *= (newServings/this.servings);

        });
        this.servings = newServings;
    }
    
}