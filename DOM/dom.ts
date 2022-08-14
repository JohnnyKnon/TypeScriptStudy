let title = document.getElementById('main-title');
// Narrowing Because element has two type HTMLElement or Null So should Narrowing

// First way
if(title != null){
    title.innerHTML = 'Hmmm I think almost same?';
}

// Second Way
if(title instanceof Element){
    title.innerHTML = 'Nope Very different';
}

// Third way as keyword
// as : Type assertion Can Decide Data type BUT it is weakness as can be problem some code
// 100%확신할때 사용
let button = document.querySelector('#button') as Element;
button.innerHTML = 'OMG Why change me';

// AddEvent
button?.addEventListener('click', ()=>{

});

let link = document.getElementsByTagName('a');
// optional chaining
// if link has innerHTML and NOT undefined innerHTML = 'Change link word';
if(link[0]?.innerHTML != undefined){
    link[0].innerHTML = 'Change link word';
}

if(link[0] instanceof Element){
    link[0].href = 'https://yahoo.jp';
}