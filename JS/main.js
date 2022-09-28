let button=document.querySelectorAll("button");
let body=document.body;
let i=document.querySelector(".icon");
let input=document.querySelector('input');
button[0].onclick=function () {
    body.classList.toggle('dark');
    button[0].classList.toggle('light');
    i.classList.toggle('darkIcon');
    if(body.classList.contains('dark'))
    {
        button[0].innerText="Light Mood";
    }
    else{
        button[0].innerText="Dark Mood";
    }
}
i.onclick=function(){
    body.classList.toggle('dark');
    i.classList.toggle('darkIcon');
    button[0].classList.toggle('light');
    if(body.classList.contains('dark'))
    {
        button[0].innerText="Light Mood";
    }
    else{
        button[0].innerText="Dark Mood";
    }
}
button[1].onclick=function(){
    switch(input.value){
        case 'black':
            body.style.backgroundColor='black';
            break;
        case 'white':
            body.style.backgroundColor='white';
            break;
        case 'yellow':
            body.style.backgroundColor='yellow';
            break;
        case 'green':
            body.style.backgroundColor='green';
            break;
        case 'red':
            body.style.backgroundColor='red';
            break;
        case 'blue':
            body.style.backgroundColor='blue';
            break;
        default:
            body.style.backgroundColor='white';
    }
}


