// https://harry-potter-api-en.onrender.com/db ссылка на гарри поттера
    fetch('https://www.pushkinmuseum.art/json/masterpieces.json')
             .then(response => response.json())
            .then(user => {
                
                console.log(user);
                
              
                 })

                //  https://developers.giphy.com/explorer/
            .catch(error=> console.log(error));


    // function onSearch(){
    //     let gitUser=document.getElementById("useSearch").value;
    // fetch(`https://api.github.com/users/${gitUser}`)
    //         .then(response => response.json())
    //         .then(user => 
    //             { console.log(user.avatar_url);
    //                 document.getElementById("avatar").src = user.avatar_url;

    //             })
    //         .catch(error=> console.log(error));
    //     }
    // let user = {
    //     "breed": "Beagle",
    //     "size": "large",
    //     "color": "orange",
    //     "age": 6
    // };
      
// //       let response = await fetch('localhost/pets/add', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json;charset=utf-8'
// //         },
// //         body: JSON.stringify(user)
// //       });
      
// //       let result = await response.json();
// //       alert(result.message);
// //  fetch('localhost/pets/add',{


    
//  }
//  )
//              .then(response => response.json())
//             .then(user => {
                
//                 console.log(user);
                
              
//                  })
