

function removeClassName() {
    const activeButtons = document.getElementsByClassName("active");
    // console.log(activeButtons)
    for (let btn of activeButtons){
        btn.classList.remove("active")
    }
}


const loadCatagoriesVideos = (id)=>{
    // console.log(id)
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    // console.log(url)
    fetch(url)
        .then(res => res.json())
        .then(data => {
            removeClassName()
            const clickbutton = document.getElementById(`btn-${id}`);
            clickbutton.classList.add("active")
            // console.log(clickbutton)
            displayVideos(data.category)
        })
}

// loadCatagoriesVideos() --------- ei function k call kora hoise displayVideos namok function thyk--------
