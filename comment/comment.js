const commit = () => {
    let textCommit=document.getElementsByClassName("textCommit")[0].value;
    let commitPublish=document.getElementsByClassName("commit")[0];
    let name = document.getElementsByClassName("name")[0].value;
    let url = document.getElementsByClassName("url")[0].value;
    let commitNoSpam = checkSpam(textCommit);
    const date = new Date();
    saveComment(date,name,url,commitNoSpam);
    let commits = createCommits();
    // console.log(commitNoSpam);
    addCommit(commits);
     
}
const checkSpam = (str) => {   
    let lowStr=str.toLowerCase(); 
    let start=str.indexOf("xxx");
    let xxx = str.replace(/XXX/ig,"***");
    let commitNoSpam = xxx.replace(/viagra/ig,"***");
    return commitNoSpam;
}
const addCommit = (com) => {
    let karta=document.getElementsByClassName("commits")[0];
    //  console.log(karta.innerHtml);
     karta.innerHTML = `${com}`;     
    }
const createCommits = () => {
    const arrKeys = Object.keys(localStorage);
    // console.log(arrKeys);
     let commit_text;
     let name;
     let arrrayCommits = [];
     let number;
     let commits;
     let url;
    arrKeys.forEach((key) => {
         let com = localStorage.getItem(key);
         arrrayCommits = []; 
         number = 0;
        for (let i= 0 ; i < com.length; i++) {
               if (com[i] == "|") { 
                arrrayCommits[number] = i;
                    number += 1;
                     }
                    }

         name = com.slice(0,arrrayCommits[0]-1);
         url = com.slice(arrrayCommits[0]+1, arrrayCommits[1]- 1);
         commit_text = com.slice(arrrayCommits[1]+1,com.length);
         console.log(url);
        
         commits += `<div class="commit"><p><img src="${url}" class="commit_avatar"></img> <span class="commit_name"> комментарий от ${name}</span><br>${commit_text}</p></div>`;
         com = "";
           })
    return commits;
    

}
const saveComment = (dateKey, name, url, commItem) => {
     localStorage.setItem(`${dateKey}`, `${name} | ${url} |${commItem}`);
    }