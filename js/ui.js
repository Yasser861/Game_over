import * as home from './home.js';
import * as detail from './detail.js';
export async function displayGames(category) {
    let games =await home.getGames(category);
    let gameBox=``;
    for (let i=0;i<games.length;i++) {
        gameBox+=`
        <div class="col-lg-3 col-md-6">
        <div>
                            <div class="card">
                            <h3 class="d-none">${games[i].id}</h3>
                                <div class="p-3">
                                    
                                    <img src="${games[i].thumbnail}" class="card-img-top w-100" alt="game">
                                </div>
                                <div class="card-body">
                                    <div class="d-flex justify-content-between">
                                        <h6 class="card-title d-inline-block">${games[i].title}</h6>
                                        <span class="">Free</span>
                                    </div>
                                    <p id="head" class="card-text text-center d-block">${games[i].short_description}</p>
                                    <hr>
                                    <div class="d-flex justify-content-between">
                                        <p class="m-0 p-0 bg-secondary text-white">${games[i].genre}</p>
                                        <p class="m-0 p-0 bg-secondary text-white">${games[i].platform}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        `
    }
    // console.log(games);
    document.querySelector('section.games .container .row').innerHTML=gameBox;
}

//======================detail
export async function displayDetail(id){
    let gameDetail=await detail.getDetails(id);
    document.querySelector('section.detail .container .gameDesc h2 span').innerHTML=gameDetail.title
    document.getElementById('Category').innerHTML=gameDetail.genre
    document.getElementById('Platform').innerHTML=gameDetail.platform
    document.getElementById('description').innerHTML=gameDetail.description;
    document.querySelector('.gameIcon img').src=gameDetail.thumbnail;
    document.querySelector('.home').classList.add('d-none');
    document.querySelector('section.detail').classList.remove('d-none');
    document.getElementById('gameURL').addEventListener('click',function(){
        window.open(gameDetail.game_url)
        console.log(gameDetail.game_url);
    })
    document.getElementById('closeBtn').addEventListener('click',function(){
        document.querySelector('.home').classList.remove('d-none');
        document.querySelector('section.detail').classList.add('d-none');
    })
}