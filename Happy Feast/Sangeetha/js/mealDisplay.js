
let fetchPageLinks = () => {
    try{
        return new Promise((resolve, reject) => {
            axios({
                url: '../json/pageLinks.json',
                method: 'GET'
            }).then(resp => {
                console.log('val ', resp);
                return resolve(resp.data.mealLInk);
            }).catch(err => {
                console.error('Error while fetching meal ', err);
                reject(err);
            })
        })
        
    }catch(err){
        console.error('Error in fetchPageLinks ', err.stack);
    }
}

let renderPageLinks = () => {
    try{
        fetchPageLinks().then(linkObj => {
            let pageLInksEle = document.getElementById('redirectionLinks'),
            linkEles = '';
            linkObj.forEach(link => {
                linkEles += `<li><a href="${link.link}" >${link.name}</a></li>`;
            })
            pageLInksEle.innerHTML = linkEles;
        }).catch(err => {
            console.error('Error in fetchPageLinks axios call ', err);
        })
    }catch(err){
        console.error('Error in renderPageLinks ', err.stack);
    }
}

let renderMeals = () => {
    try{

    }catch(err){
        console.error('Error in renderMeals ', err.stack);
    }
}

(() => {
    renderPageLinks();
    renderMeals();
})();
