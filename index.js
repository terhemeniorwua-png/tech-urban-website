'use strict'

async function fetUsers() {
   try{
     let response = await fetch('https://dummyjson.com/posts');
    let users = await response.json()
   
    
    let storeUsers = users.posts.map(user => {
        return user.body
    }); 
    return storeUsers
   } catch(e){
    console.log(e.message)
   }
}
fetUsers().then(res => {
     let speaker1 = document.querySelector('.speaker1');
 speaker1.innerText= res
});
// console.log(res)



// let content = document.querySelector('div')
// console.log(content.classList)