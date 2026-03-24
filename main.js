const movies = [
    { 
        title: 'The Dark Knight',
        genre: 'action',
        description: 'A vigilante known as Batman sets out to dismantle the remaining criminal organizations that plague the city streets.',
        image: 'https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg' 
    },
    { 
        title: 'Inception',
        genre: 'action',
        description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
        image: 'https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg' 
    },
    { 
        title: 'The Hangover',
        genre: 'comedy',
        description: 'Three buddies wake up from a bachelor party in Las Vegas, with no memory of the previous night and the bachelor missing.',
        image: 'https://m.media-amazon.com/images/M/MV5BMTU1OTMyMDk4Nl5BMl5BanBnXkFtZTcwODYwMjk4Mg@@._V1_SX300.jpg' 
    },
    { 
        title: 'Superbad',
        genre: 'comedy',
        description: 'Two co-dependent high school seniors are forced to deal with separation anxiety after their plan to stage a booze-soaked party goes awry.',
        image: 'https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzU5OTkyMw@@._V1_SX300.jpg' 
    },
    { 
        title: 'The Shining',
        genre: 'horror',
        description: 'A family heads to an isolated hotel for the winter where a sinister presence influences the father into violence, while his psychic son sees horrific forebodings from both past and future.',
        image: 'https://m.media-amazon.com/images/M/MV5BZWFlYmJkYzgtNGI1My00ZjNiLWEyY2MtN2VjYjYwZGRjYjk0XkEyXkFqcGdeQXVyNTAyNDQ2NjI@._V1_SX300.jpg' 
    },
    { 
        title: 'Get Out',
        genre: 'horror',
        description: 'A young African-American man visits his white girlfriend's parents for the weekend, where his simmering uneasiness about their reception of him eventually reaches a boiling point.',
        image: 'https://m.media-amazon.com/images/M/MV5BMTY1OTU2MjA4OF5BMl5BanBnXkFtZTgwNjM5MTY4OTE@._V1_SX300.jpg' 
    },
    { 
        title: 'La La Land',
        genre: 'romance',
        description: 'While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for the future.',
        image: 'https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_SX300.jpg' 
    },
    { 
        title: 'The Notebook',
        genre: 'romance',
        description: 'A poor yet passionate young man falls in love with a rich young woman, giving her a sense of freedom, but they are soon separated because of their social differences.',
        image: 'https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njc4N15BMl5BanBnXkFtZTcwNDE4NzgxMQ@@._V1_SX300.jpg' 
    }
];

const movieGrid = document.getElementById('movie-grid');
const genreNav = document.getElementById('genre-nav');

function renderMovies(genre = 'all') {
    movieGrid.innerHTML = '';
    const filteredMovies = genre === 'all' ? movies : movies.filter(movie => movie.genre === genre);

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';

        movieCard.innerHTML = `
            <img src="${movie.image}" alt="${movie.title}">
            <div class="movie-card-content">
                <h3>${movie.title}</h3>
                <p>${movie.description}</p>
            </div>
        `;
        movieGrid.appendChild(movieCard);
    });
}

genreNav.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        const genre = e.target.dataset.genre;
        document.querySelectorAll('.genre-btn').forEach(btn => btn.classList.remove('active'));
        e.target.classList.add('active');
        renderMovies(genre);
    }
});

// Initial render
renderMovies();

// Theme Toggle Logic
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Check for saved theme in localStorage
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
}

themeToggle.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    
    // Save theme preference
    if (body.classList.contains('light-mode')) {
        localStorage.setItem('theme', 'light');
    } else {
        localStorage.setItem('theme', 'dark');
    }
});
