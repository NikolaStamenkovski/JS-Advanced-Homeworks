console.log('Conected');
// Exercise 2
// Create a button When the button is clicked, call the StarWars api for the first person.
// Print the person name in an h1 tag.
// Print the person stats in a table:

// Height
// Birth year
// Eye color
// Hair color
// URL: https://swapi.dev/api/people/1

let starWarsButton = document.getElementById('btn');
let result = document.getElementById('result');
let personName = document.createElement('h1');
result.appendChild(personName);
let tableStats = document.createElement('table');
result.appendChild(tableStats);

starWarsButton.addEventListener('click', function(){
    fetch('https://swapi.dev/api/people/1')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log('Data:', data);
        tableStats.innerHTML = "";
        personName.innerText = data.name;
        personName.style.fontSize = '22px';
        personName.style.backgroundColor = 'yellow'
        tableStats.style.border = '1px solid black';
        tableStats.style.width = '100px';

            let tableItem = document.createElement('tr');
            tableStats.appendChild(tableItem);
            tableItem.style.backgroundColor = 'yellow';

            let tableData1 = document.createElement('td');
            tableData1.innerText = data.height;
            tableData1.style.border ='1px solid black';
            tableItem.appendChild(tableData1);

            let tableData2 = document.createElement('td');
            tableData2.innerText = data.birth_year;
            tableData2.style.border ='1px solid black';
            tableItem.appendChild(tableData2);

            let tableData3 = document.createElement('td');
            tableData3.innerText = data.eye_color;
            tableData3.style.border ='1px solid black';
            tableItem.appendChild(tableData3);

            let tableData4 = document.createElement('td');
            tableData4.innerText = data.hair_color;
            tableData4.style.border ='1px solid black';
            tableItem.appendChild(tableData4);

            tableStats.appendChild(tableItem);
    })
    .catch(function(error){
        console.log('Error:', error)
    })
});

