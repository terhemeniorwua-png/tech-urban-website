'use strict'

async function fetUsers() {
   try{
     let response = await fetch('https://dummyjson.com/posts');
    let users = await response.json()
   
    let posts = []
     users.posts.forEach(user => {
         posts.push(user.body)
    }); 
    return posts
   } catch(e){
    console.log(e.message)
   }
}
fetUsers().then(res => {
     let speaker1 = document.querySelectorAll('.speaker1');
     speaker1.forEach((value, indx, array) =>{
        res.forEach((val, index, arr) =>{
            if(indx === index){
                array[indx].innerText= arr[index]
            }
        })
        
     })
    
    // console.log(res)
});
