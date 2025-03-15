
function videosCatagories (searchText="") {
    fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
        .then(res =>res.json())
        .then(data => {
          removeClassName()                               //----removeClassName function ti ai khan thyk run korano hoise -----------
          document.getElementById("btn-all").classList.add('active')
          displayVideos(data.videos)
        })
}

const displayVideos = (videos) =>{
    const videoContainer = document.getElementById('video-container');
    videoContainer.innerHTML = ""

            // ----- jodi videos er length zero hoy tokhon ai vabe kaj korbe--------
    if(videos.length==0){

      videoContainer.innerHTML= `
      <div class="flex flex-col col-span-full justify-center items-center text-center py-20">
                <img class="w-[120px] mb-5" src="assets/Icon.png" alt="">
                <h2 class="font-bold text-2xl">Oops!! Sorry, There is no content here</h2>
            </div>
      `
      return;
    }

    videos.forEach((videos) =>{
        // console.log(videos)
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
                <button onclick=loadVideoDetails('${videos.video_id}') class="btn btn-block">Show Details</button>
              </div>

        `
        videoContainer.append(videoCards)
    })
}


// videosCatagories()        -------ai function k call kora hoise HTML file er button er onclik thyk---------


const loadVideoDetails= (videoId) =>{
  // console.log(videoId)
  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video))
}

const displayVideoDetails = (video) => {
  // console.log(video)
  document.getElementById("video_details").showModal();
  const detailsContainer = document.getElementById("details-container");
  detailsContainer.innerHTML = `
      <div class="card bg-base-100 image-full shadow-sm">
        <figure>
          <img
            src="${video.thumbnail}"
            alt="Shoes" />
      </figure>
        <div class="card-body">
          <h2 class="card-title">${video.title}</h2>
         <p>${video.description}</p>
         <p class="font-bold text-sky-700 text-xl">${video.authors[0].profile_name}</p>
        <div class="card-actions justify-end">
      </div>
      </div>
    </div>

  `
}

