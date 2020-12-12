/**
 * @author Sangeetha Athiyur Sridharan
 * @abstract Adding listener to the elements to handle the search 
 */

if(document.querySelector('.search_input')){
    document.querySelector('.search_input').addEventListener('keyup', e => handleKeyUp(e));
}

/**
 * @abstract Adding listener to the elements to handle the submit button in form 
 */
if(document.querySelector('#submit')){
    document.getElementById('submit').addEventListener('click', e => {
        e.preventDefault();
        formValidation(false);
    })
}

/**
 * @abstract Function to handle the validation for the form using regex
 * @param {used to identify keyup or click} isKeyUp 
 */
let formValidation = (isKeyUp) => {
    try{
        let emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,
        phoneRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g,
        addressRegex = /^.{10,50}$/,
        errorEle = document.getElementById('validationMessage');
        if(errorEle && !isKeyUp){
            if(!emailRegex.test(document.querySelector('#emailId').value)){
                errorEle.innerHTML = 'Enter proper email for example(san@gmail.com)';
                errorEle.classList.remove('success');
            }else if(!phoneRegex.test(document.querySelector('#tele').value)){
                errorEle.innerHTML = 'Alphabets are not allowed';
                errorEle.classList.remove('success');
            }else if(!addressRegex.test(document.querySelector('#address').value)){
                errorEle.innerHTML = 'Enter address min 10 and max 50 characters';
                errorEle.classList.remove('success');
            }else{
                errorEle.innerHTML = 'Successfully Submitted';
                errorEle.classList.add('success');
            }
            errorEle.style.display = '';
        }

        if(isKeyUp && errorEle){
            errorEle.style.display = 'none';
        }

    }catch(err){
        console.error('Error in formValidation ', err.stack);
    }
}

/**
 * @abstract Handle search for the meals
 * @param {to check the input value from the target} e 
 */
let handleSearch = (e) => {
    try{
        let { target } = e;
        const listOfRest = ['alo', 'darkMoody', 'mumbaiLuxury', 'olive', 'pandemicLeaves', 'raintree', 'rival', 'waterfall'];
        
        listOfRest.forEach(val => {
            if((target.value.includes(val) || val === target.value.toLowerCase()) && document.querySelector(`.res_holder.${val}`)){
                document.querySelectorAll('.res_holder').forEach(ele => {
                    if(!ele.classList.contains(val)){
                        ele.style.display = 'none';
                    }else{
                        ele.style.display = '';
                    }
                })
            }
        })
    }catch(err){
        console.error('Error in handleOrder ', err.stack);
    }
}

/**
 * @abstract Handle search when value is empty or value is equal to the meal json
 * @param {to check the value of the target is empty or not} e 
 */
const handleKeyUp = (e) => {
    try{
        e.preventDefault();
        let { target } = e;

        if(!target.value){
            document.querySelectorAll('.res_holder').forEach(ele => {
                ele.style.display = '';
            })
        }else{
            if (e.keyCode === 13) {
                handleSearch(e);
            }
        }
    }catch(err){
        console.error('Error in handleKeyUp ',err.stack);
    }
}

/**
 * @abstract it is a self invoking function to set the restaurant value in the header using localstorage
 */
(() => {
    let descEle = document.querySelector('.OrderDesc');
    if(descEle){
        descEle = descEle.querySelector('p');
        if(localStorage.getItem('RestObj')){
            let restObj = JSON.parse(localStorage.getItem('RestObj'));
            descEle.innerHTML = `You have ordered the Pizza with 2 veggie Nugguts!!! from ${restObj.name}`
        }
    }
})();