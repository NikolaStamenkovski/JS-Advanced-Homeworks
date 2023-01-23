
let movies = ['the bourne ultimatum','A History of Violence','Atonement','The Edge of Heaven','Bloody Sunday','The Hurt Locker', 'distant','The Dark Knight ',
'The Bourne Supremacy',];
let movieInput = document.getElementById('movieInput');
let rentMovieBtn = document.getElementById('rentMovieBtn');
let result = document.getElementById('result');

rentMovieBtn.addEventListener('click', function(){
   let item = 0;
   result.innerText = '';
    for (let movie of movies) {
        if (movieInput.value.toLowerCase() === movie) {
        let inTheList = document.createElement('h1'); 
        inTheList.innerText = 'The movie can be rented';
        inTheList.style.color = 'green';
        result.appendChild(inTheList);
        item++;
        break;
        } 
    };   
    if (movieInput === '') {
      
    } else if (item === 0) {
            let inTheList = document.createElement('h1')
            inTheList.innerText = 'The movie cant be rented'
            inTheList.style.color = 'red';
            result.appendChild(inTheList);
        }
        movieInput.value = '';
});


