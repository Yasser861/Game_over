'use strict'
import * as data from './ui.js'

window.addEventListener('load',async function(){
    document.getElementById('mmorpg').classList.add('active_col');
    await data.displayGames('mmorpg');
    let innerGames=document.querySelectorAll('section.games .container .row .card')
    for(let i=0;i<innerGames.length;i++){
        innerGames[i].addEventListener('click',function(){
            data.displayDetail(innerGames[i].firstElementChild.innerHTML);
        })
    }
})
document.getElementById('mmorpg').addEventListener('click',async function(){
    document.getElementById('mmorpg').classList.add('active_col');
    document.getElementById('SHOOTER').classList.remove('active_col');
    document.getElementById('SAILING').classList.remove('active_col');
    document.getElementById('PERMADEATH').classList.remove('active_col');
    document.getElementById('SUPERHERO').classList.remove('active_col');
    document.getElementById('PIXEL').classList.remove('active_col');
    await data.displayGames('mmorpg');
    let innerGames=document.querySelectorAll('section.games .container .row .card')
    for(let i=0;i<innerGames.length;i++){
        innerGames[i].addEventListener('click',function(){
            data.displayDetail(innerGames[i].firstElementChild.innerHTML);
        })
    }
    // console.log(document.querySelectorAll('section.games .container .row .card'));
});
document.getElementById('SHOOTER').addEventListener('click',async function(){
    document.getElementById('mmorpg').classList.remove('active_col');
    document.getElementById('SHOOTER').classList.add('active_col');
    document.getElementById('SAILING').classList.remove('active_col');
    document.getElementById('PERMADEATH').classList.remove('active_col');
    document.getElementById('SUPERHERO').classList.remove('active_col');
    document.getElementById('PIXEL').classList.remove('active_col');
    await data.displayGames('SHOOTER');
    let innerGames=document.querySelectorAll('section.games .container .row .card')
    for(let i=0;i<innerGames.length;i++){
        innerGames[i].addEventListener('click',function(){
            data.displayDetail(innerGames[i].firstElementChild.innerHTML);
        })
    }
    // console.log(document.querySelectorAll('section.games .container .row .card'));
});
document.getElementById('SAILING').addEventListener('click',async function(){
    document.getElementById('mmorpg').classList.remove('active_col');
    document.getElementById('SHOOTER').classList.remove('active_col');
    document.getElementById('SAILING').classList.add('active_col');
    document.getElementById('PERMADEATH').classList.remove('active_col');
    document.getElementById('SUPERHERO').classList.remove('active_col');
    document.getElementById('PIXEL').classList.remove('active_col');
    await data.displayGames('SAILING');
    let innerGames=document.querySelectorAll('section.games .container .row .card')
    for(let i=0;i<innerGames.length;i++){
        innerGames[i].addEventListener('click',function(){
            data.displayDetail(innerGames[i].firstElementChild.innerHTML);
        })
    }
    // console.log(document.querySelectorAll('section.games .container .row .card'));
});
document.getElementById('PERMADEATH').addEventListener('click',function(){
    document.getElementById('mmorpg').classList.remove('active_col');
    document.getElementById('SHOOTER').classList.remove('active_col');
    document.getElementById('SAILING').classList.remove('active_col');
    document.getElementById('PERMADEATH').classList.add('active_col');
    document.getElementById('SUPERHERO').classList.remove('active_col');
    document.getElementById('PIXEL').classList.remove('active_col');
    data.displayGames('PERMADEATH');
    let innerGames=document.querySelectorAll('section.games .container .row .card')
    for(let i=0;i<innerGames.length;i++){
        innerGames[i].addEventListener('click',function(){
            data.displayDetail(innerGames[i].firstElementChild.innerHTML);
        })
    }
    // console.log(document.querySelectorAll('section.games .container .row .card'));
});
document.getElementById('SUPERHERO').addEventListener('click',function(){
    document.getElementById('mmorpg').classList.remove('active_col');
    document.getElementById('SHOOTER').classList.remove('active_col');
    document.getElementById('SAILING').classList.remove('active_col');
    document.getElementById('PERMADEATH').classList.remove('active_col');
    document.getElementById('SUPERHERO').classList.add('active_col');
    document.getElementById('PIXEL').classList.remove('active_col');
    data.displayGames('SUPERHERO');
    let innerGames=document.querySelectorAll('section.games .container .row .card')
    for(let i=0;i<innerGames.length;i++){
        innerGames[i].addEventListener('click',function(){
            data.displayDetail(innerGames[i].firstElementChild.innerHTML);
        })
    }
    // console.log(document.querySelectorAll('section.games .container .row .card'));
});
document.getElementById('PIXEL').addEventListener('click',function(){
    document.getElementById('mmorpg').classList.remove('active_col');
    document.getElementById('SHOOTER').classList.remove('active_col');
    document.getElementById('SAILING').classList.remove('active_col');
    document.getElementById('PERMADEATH').classList.remove('active_col');
    document.getElementById('SUPERHERO').classList.remove('active_col');
    document.getElementById('PIXEL').classList.add('active_col');
    data.displayGames('PIXEL');
    let innerGames=document.querySelectorAll('section.games .container .row .card')
    for(let i=0;i<innerGames.length;i++){
        innerGames[i].addEventListener('click',function(){
            data.displayDetail(innerGames[i].firstElementChild.innerHTML);
        })
    }
});
//================================================
$(window).scroll(function () {

    if ($(window).scrollTop() > 280) {
      $('#nav_bar').addClass('navbar-fixed');
    }
    if ($(window).scrollTop() < 281) {
      $('#nav_bar').removeClass('navbar-fixed');
    }
  });