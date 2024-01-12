export async function getDetails(id){
    const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '4a880cfda1msh7f61fa16bf2912ap115b46jsnddc2e0d2861c',
		'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com'
	}
};

try {
	// document.querySelector('.detail').classList.add('d-block');
	const response = await fetch(url, options);
	if(response.status === 200){
		document.querySelector('.spinner').classList.add('d-none');
		document.querySelector('.container').classList.add('d-block');
	}
	const result = await response.json();
	console.log(result);
    return result;
} catch (error) {
	console.error(error);
}
}