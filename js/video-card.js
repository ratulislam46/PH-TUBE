
function videosCatagories () {
    fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
        .then(res =>res.json())
        .then(data => displayVideos(data.videos))
}

const displayVideos = (videos) =>{
    const videoContainer = document.getElementById('video-container');

    videos.forEach((videos) =>{
        console.log(videos)
        const videoCards = document.createElement('div')
        videoCards.innerHTML= `
        
        <div class="card bg-base-100 shadow-sm">
                <figure class="relative">
                  <img class="w-full h-[150px] object-cover"
                    src="${videos.
                        thumbnail}"
                    alt="Shoes" />
                    <span class="absolute bottom-2 right-2 text-white p-1 bg-black rounded-sm">3hrs 56 min ago</span>
                </figure>
                <div class="flex gap-5 my-5 mx-5">
                    <div class="avatar">
                        <div class="ring-primary w-8 h-8 rounded-full ring ring-offset-2 mt-2">
                          <img src="${videos.authors[0].profile_picture}" />
                        </div>
                      </div>
                    <div>
                        <h1>${videos.title}</h1>
                        <p class="text-sm text-gray-500 flex gap-5">${videos.authors[0].profile_name} <img class="h-5 w-5"  src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                        <p class="text-sm text-gray-500">${videos.others.views} views</p>
                    </div>
                </div>
              </div>
        `

        videoContainer.append(videoCards)
        
    })
}


videosCatagories()