let page = 1;


const btnNext = document.getElementById('next');
const btnBefore = document.getElementById('before');

btnBefore.addEventListener('click', () => {
    if (page > 1) {
        page -= 1;
        console.log(page);
        getPopularMovie();

    } else {
        alert('no pages available')
    }


})

btnNext.addEventListener('click', () => {
    if (page < 1000) {
        page += 1;
        console.log(page);
        getPopularMovie();

    } else {
        alert('no pages avalaible')
    }

})


const getPopularMovie = async() => {



    try {
        const URL = `https://api.themoviedb.org/3/movie/popular?api_key=3b2563a63ac031c44a0127db18d5cf12&language=es-MX&page=${page}`;
        const response = await fetch(URL);

        if (response.status) {

            const { results } = await response.json();
            const container = document.querySelector('.container')
            container.innerHTML = '';
            results.forEach(movie => {

                const movieContainer = document.createElement('div');
                container.append(movieContainer);
                movieContainer.className = 'container-movie';
                const title = document.createElement('h3');
                movieContainer.append(title);
                title.className = 'title-movie';
                title.textContent = movie.title
                const img = document.createElement('img');
                img.className = 'img-movie';
                movieContainer.append(img);
                img.src = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`;

            })


        }
    } catch (error) {
        console.log('ha ocurrido un error')


    }



}



getPopularMovie();