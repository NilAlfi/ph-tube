// Button Section Code Start
function dataCategories (){
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((response) => response.json())
    .then((data) => {
        callCategories(data.categories)
    })
};


function callCategories (goru){
    console.log(goru)
    const categoryContainer = document.getElementById("category-container");

    for(let i = 0; i < goru.length; i++){
        const elementI = goru[i];

        const createDiv = document.createElement("div");
        createDiv.innerHTML = `
        
            <button onclick="loadCategory(${elementI.category_id})" class="btn btn-sm hover:bg-[#ff1f3d] hover:text-white">${elementI.category}</button>
        
        `;+

        categoryContainer.appendChild(createDiv);
    }

}

dataCategories()

// Button Section Code End

//Videos Section Code Start

const videosFetch = () =>{
    fetch('https://openapi.programming-hero.com/api/phero-tube/videos')
    .then(response => response.json())
    .then(data => {
        displayVideos(data.videos);
    })
}

const displayVideos = (thumb) =>{
    const videoContainer = document.getElementById("videocontainer")
    videoContainer.innerHTML = "";
    if(thumb.length == 0){
      videoContainer.innerHTML = `
      
      <div class="col-span-full flex justify-center flex-col items-center py-20">
            <img class="w-[120px]" src="images/Icon.png" alt="">
            <h2 class="text-3xl font-bold text-center mt-3">Opps!! There is No Content Here</h2>
        </div>
      
      `;
      return;
    }
    console.log(thumb);
    thumb.forEach((thumbs) =>{
        const createVideoDiv = document.createElement("div");
        createVideoDiv.innerHTML = `
        
            <div class="card bg-base-100">
            <figure class="relative">
              <img class="w-full h-[283px] object-cover"
                src="${thumbs.thumbnail}"
                alt="Shoes" />
                <span class="absolute bottom-2 right-2 text-sm rounded-sm text-white bg-black px-2">3hrs 56 min ago</span>
            </figure>
            <div class="flex gap-3 px-0 py-5">
              <div class="profile">
                <div class="avatar">
                    <div class="ring-primary ring-offset-base-100 w-6 rounded-full ring ring-offset-2">
                      <img src="${thumbs.authors[0].profile_picture}" />
                    </div>
                  </div>
              </div>
              <div class="content">
                <h2 class="text-sm font-semibold">${thumbs.title}</h2>
                <p class="text-sm text-gray-400 flex gap-3">${thumbs.authors[0].profile_name} <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt=""></p>
                <p class="text-sm text-gray-400">${thumbs.others.views} Views</p>
                
              </div>
            </div>
          </div>
        
        `;
        videoContainer.appendChild(createVideoDiv)
    })
    
}

//Videos Section Code End

// Category Music/ Comedy/ Drawing Code Start
   const loadCategory = (id) =>{
    console.log(id);
    const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
    fetch(url)
    .then(res => res.json())
    .then(data => {
      displayVideos(data.category)
    })
   }
// Category Music/ Comedy/ Drawing Code End