document.querySelector('.search_input').addEventListener('change', e => handleSearch(e));
document.querySelector('.search_input').addEventListener('keyup', e => handleKeyUp(e));

let handleSearch = (e) => {
    try{
        let { target } = e;
        const listOfRest = ['alo', 'darkMoody', 'mumbaiLuxury', 'olive', 'pandemicLeaves', 'raintree', 'rival', 'waterfall'];
        
        listOfRest.forEach(val => {
            if(target.value.includes(val) && document.querySelector(`.res_holder.${val}`)){
                document.querySelectorAll('.res_holder').forEach(ele => {
                    if(!ele.classList.contains(val)){
                        ele.style.display = 'none';
                    }else{
                        ele.style.display = '';
                    }
                })
            }
        })
        
        console.log('came here');
    }catch(err){
        console.error('Error in handleOrder ', err.stack);
    }
}

const handleKeyUp = (e) => {
    try{
        let { target } = e;

        if(!target.value){
            document.querySelectorAll('.res_holder').forEach(ele => {
                ele.style.display = '';
            })
        }
    }catch(err){
        console.error('Error in handleKeyUp ',err.stack);
    }
}