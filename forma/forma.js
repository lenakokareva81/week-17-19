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

       

const telShowEror = () => {
  let telEror ="";
  let tel=document.getElementsByClassName("tel_number");
  let formEror=document.getElementsByClassName("form__error")[2];
  let arrEror = ["код страны одной цифрой" , "код страны 3 цифры" , "городской номер 6 цифр"];
  let arrErorNumber = [1, 3, 6];

  formEror.innerHTML="";
  if ( tel[0].value =="" || tel[1].value =="" || tel[2].value ==""){
       telEror="введите телефон";
       }
  for (let i = 0; i < 3; i++){
      if ( tel[i].value.length != arrErorNumber[i] ){
            telEror=`${telEror} <br> ${arrEror[i]}`;
            tel[i].style.borderBlockColor="red";}
        else{
            tel[i].style.borderBlockColor="green";
            }
    }
    formEror.style.display="block";
    formEror.innerHTML=telEror;
  if(tel[0].style.borderBlockColor=="green" && tel[1].style.borderBlockColor=="green" && tel[2].style.borderBlockColor=="green")
    { return true;}
}
const passwordShowEror = () => {
  let passwordEror ="";
  let password=document.getElementById("password");
  let password1=document.getElementById("password1");
  let formEror=document.getElementsByClassName("form__error")[3];
  let re =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/;

  if ( password.value.match(re)){
            password.style.borderBlockColor="green";
            formEror.innerHTML="";
          }
            else{
            password.style.borderBlockColor="red";
            formEror.style.display="block";
            formEror.innerHTML="пароль должен сожержать минимум 8 символов:цифра, латинские буквы в верхнем и нижнем регистре, спецсимволы";
            }
    

    if (password1.value == ""){
             password1.style.borderBlockColor="red";
             document.getElementsByClassName("form__error")[4].style.display="block";
             document.getElementsByClassName("form__error")[4].innerHTML="повторите пароль";
            } else{
               if (password1.value != password.value){ 
                    password1.style.borderBlockColor="red";
                    document.getElementsByClassName("form__error")[4].style.display="block";
                    document.getElementsByClassName("form__error")[4].innerHTML="пароли не совпадают"; }
                    else{

                      password1.style.borderBlockColor="green";
                      document.getElementsByClassName("form__error")[4].innerHTML=""; 
                    return true;
                    }}
    }
