// https://harry-potter-api-en.onrender.com/db ссылка на гарри поттера
    fetch('https://api.giphy.com/v1/stickers/search?api_key=01LsTiC4ecA0yra1yO9sFkPE70C546ef&q=harry&limit=25&offset=0&rating=g&lang=en')
             .then(response => response.json())
            .then(user => {
                
                console.log(user);
                
              
                 })

                //  https://developers.giphy.com/explorer/
            .catch(error=> console.log(error));

