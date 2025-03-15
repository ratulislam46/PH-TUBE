
function loadCatagories () {
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
        .then(res =>res.json())
        .then(data => displayCatagories(data.categories))
}

function displayCatagories (categories) {
    const btnContainer = document.getElementById('btn-container')
    for(let cat of categories){
        // console.log(cat)

        const categoriesDiv = document.createElement('div');
        categoriesDiv.innerHTML = `
        <button id="btn-${cat.category_id}" onclick="loadCatagoriesVideos(${cat.category_id})" class="btn btn-sm hover:bg-red-500 hover:text-white">${cat.category}</button>
        `
        btnContainer.append(categoriesDiv)
    }
}

loadCatagories()