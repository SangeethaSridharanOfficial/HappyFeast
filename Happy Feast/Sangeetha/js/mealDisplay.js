var mealLink = null;

/**
 * @author: Sangeetha Athiyur Sridharan
 * @abstract To fetch the links for the page using axios from JSON
 */
let fetchLinks = () => {
    try{
        return new Promise((resolve, reject) => {
            axios({
                url: '../json/pageLinks.json',
                method: 'GET'
            }).then(resp => {
                return resolve({
                    pageLink: resp.data.pageLink,
                    mealLink: resp.data.mealLink
                });
            }).catch(err => {
                console.error('Error while fetching meal ', err);
                reject(err);
            })
        })
        
    }catch(err){
        console.error('Error in fetchLinks ', err.stack);
    }
}

/**
 * @abstract When user clicks on order button it will store the object of that restaurant 
 * to show it in order tracking page 
 * @param {}
 */

let handleOrder = (e) => {
    try{
        let { target } = e,
        idx = target.getAttribute('index');
        let mealObj = mealLink[idx];
        if(mealObj){
            localStorage.setItem('RestObj', JSON.stringify(mealObj));
        }
    }catch(err){
        console.error('Error in handleOrder ', err.stack);
    }
}

/**
 * @abstract Used to render the restaurant UI
 * @param {links for the meals to display} mealLinks 
 */

let renderMeals = (mealLinks) => {
    try{
        let mealsEle = document.getElementById('rest_wrapper'),
        mealsList = ''; 
        mealLink = mealLinks;
        if(mealsEle){
            mealLinks.forEach((val, idx) => {
                mealsList += `<div class="res_holder ${val.searchTerm}">
                    <div class="img_holder">
                        <img alt="${val.searchTerm}" src="${val.restSrc}"/>
                    </div>
                    <div class="rest_info_holder">
                        <nav class="rest_name">
                            <span class="rest_title">${val.name}</a>
                        </nav>
                        <p class="rest_desc">${val.desc}</p>
                        <span class="cost">${val.cost}</span>
                        <span class="payment">${val.payMethod}</span>
                        <a href="./orderTracking.html" target="_blank" class="order_btn" index=${idx}>Order</a>
                    </div>
                </div>`
            });
            mealsEle.innerHTML = mealsList;
            document.querySelectorAll('.order_btn').forEach(ele => {
                ele.addEventListener('click', e => {
                    handleOrder(e);
                })
            })
        }
    }catch(err){
        console.error('Error in renderMeals ', err.stack);
    }
}

/**
 * @abstract To render the page links UI
 */

let renderPageLinks = () => {
    try{
        fetchLinks().then(linkObj => {
            renderMeals(linkObj.mealLink);
            let pageLInksEle = document.getElementById('redirectionLinks'),
            linkEles = '';
            linkObj.pageLink.forEach(link => {
                linkEles += `<li><a href="${link.link}" >${link.name}</a></li>`;
            })
            pageLInksEle.innerHTML = linkEles;
        }).catch(err => {
            console.error('Error in fetchLinks axios call ', err);
        })
    }catch(err){
        console.error('Error in renderPageLinks ', err.stack);
    }
}

/**
 * @abstract it is a self invoking function 
 * used to call the render fucntions to design the UI
 */

(() => {
    renderPageLinks();
})();
