// https://harry-potter-api-en.onrender.com/db ссылка на гарри поттера
    fetch('https://harry-potter-api-en.onrender.com/db')
            .then(response => response.json())
            .then(user => {
                let urlImg;
                let characters="";
                console.log(user.characters);
                console.log(user.characters.length);
                for (let i = 0; i < user.characters.length; i++) { 
                    urlImg = user.characters[i].image;
                    characters +=`<div  class="img" ><img src="${urlImg}"></img></div>`
                    }
                  console.log(characters);
                  let karta=document.getElementsByClassName("karts")[0];
                   console.log(karta);
                karta.innerHTML = `${characters}`;  

              
                 })

                //  https://developers.giphy.com/explorer/
            .catch(error=> console.log(error));

