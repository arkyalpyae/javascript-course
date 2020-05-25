//BUDGET CONTROLLER
var budgetController =(function(){
	//some code
	var Expense = function(id,descritption,value){
		this.id =id;
		this.descritption = descritption;
		this.value = value;
	};
	var Income = function(id,descritption,value){
		this.id =id;
		this.descritption = descritption;
		this.value = value;
	};

	var calculateTotal = function(type){
		var sum =0;
		data.allItmes[type].forEach(function(cur){
			sum+=cur.value;
		data.totals[type] =sum;
		});
	}

	var data = {
		allItmes : {
			exp : [],
			inc : []
		},
		totals :{
			exp : 0,
			inc : 0
		},
		budget : 0,
		percentage : -1
	};
	return {
		addItem : function (type ,des, val){
			var newItem,ID;
			//Create new ID
			if (data.allItmes[type].length > 0){
				ID = data.allItmes[type][data.allItmes[type].length-1].id + 1;
			}else{
				ID = 0;
			}	
			//Create new item base in type
			if(type === 'exp'){
				newItem = new Expense(ID,des,val);
			}else if(type === 'inc'){
				newItem = new Income(ID,des,val);
			}
			//add into data 
			data.allItmes[type].push(newItem);

			//return the new item
			return newItem;
		},
		calculateBudget :function(){
			//calculat total income and expense
			calculateTotal('inc');
			calculateTotal('exp');
			//calculate budget: income - expense
			data.budget = data.totals.inc -data.totals.exp;
			//calculate percentage 
			if (data.totals.inc > 0){
				data.percentage = Math.round((data.totals.exp / data.totals.inc)* 100);
			}else{
				data.percentage = -1;
			}
			

		},
		getBudget : function(){
			return{
				budget:data.budget,
				totalInc :data.totals.inc,
				totalExp :data.totals.exp,
				percentage : data.percentage
			}

		},
		testing : function(){
		console.log(data);
		}
	}
})();
//UI CONTRLLER
var UIcontroller = (function(){
	var DOMstring = {
		inputType: ".add__type",
		inputDescription:".add__description",
		inputValue : ".add__value",
		inputBtn :".add__btn",
		incomeContainer: ".income__list",
        expensesContainer:".expenses__list",
        budgetValue :".budget__value",
        incomeValue :".budget__income--value",
        expenseValue :".budget__expenses--value",
        percentageValue :".budget__income--percentage",
        container : ".container"

	};
	return {
		getinput : function(){
			return {
				type :document.querySelector(DOMstring.inputType).value,
				descritption :document.querySelector(DOMstring.inputDescription).value,
				value :parseFloat(document.querySelector(DOMstring.inputValue).value)
				};
		},
		addListItem: function(obj, type) {
            var html, newHtml, element;
            // Create HTML string with placeholder text
            if (type === 'inc') {
                element = DOMstring.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if (type === 'exp') {
                element = DOMstring.expensesContainer;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            }
            
            // Replace the placeholder text with some actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.descritption);
            newHtml = newHtml.replace('%value%', obj.value);
           
            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
        },
        clearFields : function(){
        	var fields,feildArr;

        	fields = document.querySelectorAll(DOMstring .inputDescription+','+DOMstring.inputValue);

        	feildArr = Array.prototype.slice.call(fields);
        	feildArr.forEach(function( current ,index ,array){
        		current.value ="";
        	});
        	feildArr[0].focus();
        },

        displayBudget : function(obj){
        	document.querySelector(DOMstring.budgetValue).textContent = obj.budget;
        	document.querySelector(DOMstring.incomeValue).textContent = obj.totalInc;
        	document.querySelector(DOMstring.expenseValue).textContent = obj.totalExp;
        	if (obj.percentage >0){
        		document.querySelector(DOMstring.percentageValue).textContent = obj.percentage + "%";
        	}else{
        		document.querySelector(DOMstring.percentageValue).textContent = "--";
        	}
        },
		getDOMstring : function(){
			return DOMstring;
		}
	};

})();


// GOlBAL APP CONTROLLER
var controller = (function(budgetCtl,UICtl){
	
	var setupEventsListners = function(){
		var DOM = UICtl.getDOMstring();
		document.querySelector(DOM.inputBtn).addEventListener('click',crlAdditem);
		document.addEventListener('keypress',function(event){
			if(event.keyCode === 13 || event.which === 13){
				crlAdditem();
			}
		});
		document.querySelector(DOM.container).addEventListener('click',crlDeleteitem);
	};

	var updateBudget= function(){
	//1. calculate the budget
		budgetCtl.calculateBudget();
	//2. Return the budget
		var budget = budgetCtl.getBudget();

	//3. Display in UI
		UICtl.displayBudget(budget);
	};

	var crlAdditem = function(){
	var input,newItem;	
	//1.Get the input fields data
	input = UICtl.getinput();
		if (input.descritption !== "" && !isNaN(input.value) && input.value > 0){
			//2. Add the item to the budget controller
		newItem = budgetCtl.addItem(input.type,input.descritption,input.value);

		//3. Add the item to the UI
		UICtl.addListItem(newItem,input.type);

		//4. Clear input fields
		UICtl.clearFields();

		//5. Calculate the budget
		updateBudget();
		}
	};
	var crlDeleteitem = function(event){
		var itemID;
		itemID =event.target.parentNode.parentNode.parentNode.id;
 		if (itemID){
 			splicItem = itemID.splic('-');
			type = splicItem[0];
			id = splicItem[1];

			//1. Delete the item from DS
			//2. Delete the item to UI
			//3. Update and show budget

 		}
		


	}; 

	return{
		init : function(){
			console.log("Applicatio is started.");
			UICtl.displayBudget({
				budget:0,
				totalInc : 0,
				totalExp : 0,
				percentage : -1
			});
			setupEventsListners();
		}
	};
})(budgetController,UIcontroller);


controller.init();