var des = document.getElementById('description');
var exp = document.getElementById('expense');
var itemList = document.getElementById('users')
var total = document.getElementById('totalexpenses')
var cat = document.getElementById('category')
var count = 0;



function addToLocalStorage(event) {
    event.preventDefault();
    const description =  event.target.description.value;
    const expense = event.target.expense.value;
    const category = event.target.category.value;
    if(description === '' || expense === '' || category === ''){
        alert('Please enter all feilds')
    }
    else{
        const obj = {
        description,
        expense,
        category 
    }
    localStorage.setItem(obj.description, JSON.stringify(obj));
    var li = document.createElement('li');
    li.textContent = obj.expense + ' - ' + obj.category+' - '+obj.description+' ';
    itemList.appendChild(li);
    //total+=obj.expense;
    // var expensetotal = event.target.expense.value;
    // count += obj.expense;
    
    //total +=obj.expense;
    count += parseInt(obj.expense);
    total.innerText = `Total Expenses :${count}`
    

    description.value='';
    expense.value='';
    category.value='';
    

    var deleteBtn = document.createElement('button')
    //deleteBtn.type = 'button'
    deleteBtn.textContent = 'Delete Expenses '
    deleteBtn.addEventListener('click',function(){
        localStorage.removeItem(obj.description);
        itemList.removeChild(li);
        count -= parseInt(obj.expense);
        total.innerText = `Total Expenses :${count}`
        
        
    });
    li.appendChild(deleteBtn);
    itemList.appendChild(li);

    
    var editBtn = document.createElement('button')
    //editBtn.type = 'button'
    editBtn.textContent = 'Edit Exepenses '
    editBtn.addEventListener('click',function(){
        des.value = obj.description;
        exp.value = obj.expense;
        cat.value = obj.category;
        count -= parseInt(obj.expense);
        total.innerText = `Total Expenses :${count}`
        total.style.display = 'block';
        if(count === 0){
            total.style.display = 'none';
        }
        localStorage.removeItem(obj.description);
        itemList.removeChild(li);
    })
    li.appendChild(editBtn);
    itemList.appendChild(li);

    }
    
            
    
}


































