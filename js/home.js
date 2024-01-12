export async function getGames(category){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a880cfda1msh7f61fa16bf2912ap115b46jsnddc2e0d2861c',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	if(response.status === 200){
		document.querySelector('.spinner').classList.add('d-none');
	}
	let games = await response.json();
    return games;
} catch (error) {
	console.error(error);
}
}