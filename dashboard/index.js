
const Chart = require('chart.js/auto');
// import Chart from 'chart.js/auto'
let button = document.getElementById("button");
// async
button.onclick = async function (e){

  e.preventDefault();
       let username=document.getElementById("username").value;
       let email=document.getElementById("email").value;
       let password=document.getElementById("password");
       let tel=document.getElementsByClassName("tel_number");
       document.getElementsByClassName("form__error")[0].innerHTML="";      
       document.getElementsByClassName("form__error")[1].innerHTML="";
      
       if (username == ""){
       document.getElementsByClassName("form__error")[0].style.display="block";
       document.getElementsByClassName("form__error")[0].innerHTML="введите имя";}
         
       if (email == ""){
       document.getElementsByClassName("form__error")[1].style.display="block"; 
       document.getElementsByClassName("form__error")[1].innerHTML="Это поле должно содержать E-Mail в формате example@site.com";
                     }
                                
       telShowEror();
       passwordShowEror();
             
       if(passwordShowEror() && telShowEror() && document.getElementById("email").validity.valid && document.getElementById("username").validity.valid && email != "" && username != ""){
       document.getElementsByClassName("button")[0].value="регистрируем!";
       document.getElementsByClassName("button")[0].style.backgroundColor="green";
       let user = {
        name: `${username}`,
        emil: `${email}`,
        tel: `${tel[0].value}-${tel[1].value}-${tel[2].value}`,
        password: `${password.value}`
      };
       let response = await fetch('https://httpbin.org/post', {
               method: 'POST',
                headers: {
               'Content-Type': 'application/json;charset=utf-8'
                },
               body: JSON.stringify(user)
              });

              let result = await response.json();
              console.log(result);
                }
}    

       


(async function() {
  const data = [
    { year: "духовность", count: 10 },
    { year: "хобби и развлечени", count: 20 },
    { year: "спорт", count: 15 },
    { year: "деньги", count: 25 },
    { year: "личностный  рост", count: 25 },
    { year: "друзья", count: 15 },
    { year: "семья", count: 25 },
    { year: "карьера", count: 25 },
    
  ];

  new Chart(
    document.getElementById('acquisitions'),
    {
      type: 'polarArea',
      data: {
        labels: data.map(row => row.year),
        datasets: [
          {
            label: 'Acquisitions by year',
            data: data.map(row => row.count)
          }
        ]
      }
    }
  );
})();
//