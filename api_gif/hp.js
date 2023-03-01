// https://harry-potter-api-en.onrender.com/db ссылка на гарри поттера
function onSearch(){    
   let search=document.getElementById("useSearch").value;
   let number=document.getElementById("number").value;


fetch(`https://api.giphy.com/v1/gifs/search?api_key=01LsTiC4ecA0yra1yO9sFkPE70C546ef&q=${search}&limit=${number}&offset=0&rating=g&lang=en`,{
      Method: "GET",

  }
  
  )
          .then(response => response.json())
          .then(user => {
              let urlImg;
              let characters="";
              console.log(user.data[0].images.original.url);
              console.log(user.data.length);
              for (let i = 0; i < user.data.length; i++) { 
                  urlImg = user.data[i].images.original.url;
                  characters +=`<div  class="img" ><img src="${urlImg}"></img></div>`
                  }
                console.log(characters);
                let karta=document.getElementsByClassName("karts")[0];
                 console.log(karta);
              karta.innerHTML = `${characters}`;  

            
               })

              //  https://developers.giphy.com/explorer/
          .catch(error=> console.log(error));}
