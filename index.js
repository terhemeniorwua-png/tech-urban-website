'use strict'

async function fetUsers() {
   try{
     let response = await fetch('https://dummyjson.com/posts');
    let users = await response.json()
//    let blog = await users.posts.body

    // let posts = []
     let blog = users.posts.map(user => {
        //  posts.push(user.body)
        return user.body
    }); 
    return blog
   } catch(e){
    console.log(e.message)
   }
}
fetUsers().then(res => {
     let contents = document.querySelector('.content');
    //  contents.forEach((value, indx, array) =>{
    //     res.forEach((val, index, arr) =>{
    //         if(indx === index){
    //             array[indx].innerText= arr[index]
    //         }
    //     })
        
    //  })
    contents.innerText = res
    
    // console.log(res)
});
