'use strict'

async function fetUsers() {
   try{
     let response = await fetch('https://dummyjson.com/posts');
    let users = await response.json()
if(!users){
    throw new Error("Request failed")
}
     let blog = users.posts.map(user => {
        return user
    }); 
    return blog
   } catch(e){
    document.write(e.message)
   }
}
fetUsers().then(res => {

      let contents = document.querySelector('.blogs');
res.forEach(val => {
   let outPut = 
`
  <div class="border border-[#0007ca68] shadow-2xl text-[#959595] px-[5%]">
   <h1 class="text-3xl font-black text-[#ECA922] pt-10 pb-5">${val.title}</h1>
    <p class="font-medium">${val.body}</p>
    <div>Tags: ${val.tags.map(val =>{
        
    })}</div>
    <div class="grid grid-cols-3 text-black pt-10 pb-5 gap-10">
    <p class="bg-[#959595] p-2 rounded-full">Views: ${val.views}</p>
    <p class="bg-[#959595] p-2 rounded-full">Likes: ${val.reactions.likes}</p>
    <p class="bg-[#959595] p-2 rounded-full">Dislikes: ${val.reactions.dislikes}</p>
    </div>
   </div>
 `
    contents.innerHTML += outPut


   }
       
    
);
 
}
);
  



    let hamburger = document.querySelector('#hamburger');
    let nav = document.querySelector('#mobileNav')
    let cancel = document.querySelector('#cancel')



hamburger.addEventListener('click', ()=>{

    

    if(nav.classList.contains('hidden')){
        nav.classList.remove('hidden')
        hamburger.classList.add('hidden')
        nav.classList.add('block')
        cancel.classList.remove('hidden')
    } else{
        nav.classList.remove('block');
          nav.classList.add('hidden')
          hamburger.classList.remove('hidden')
    }
})
cancel.addEventListener('click', ()=>{

     if(nav.classList.contains('block')){
        nav.classList.remove('block')
        nav.classList.add('hidden')
        hamburger.classList.remove('hidden')
        hamburger.classList.add('block')
        cancel.classList.remove('block')
        cancel.classList.add('hidden')
    }
})
