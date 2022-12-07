cl = console.log;

var mobile = [
    { name: 'Apple iPhone 12', price: 999, color: 'Black', storage: 128, camera: 'Dual-lens' },
    { name: 'Samsung Galaxy S21', price: 849, color: 'White', storage: 128, camera: 'Triple-lens' },
    { name: 'Google Pixel 4a', price: 349, color: 'Black', storage: 64, camera: 'Single-lens' },
    { name: 'OnePlus 8T', price: 799, color: 'Aquamarine Green', storage: 128, camera: 'Quad-lens' },
    { name: 'Huawei P40 Pro', price: 799, color: 'Silver Frost', storage: 256, camera: 'Quad-lens' }
  ];

var mobileName = document.getElementById("mobileName");
var result = '';
for(i=0; i< mobile.length; i++){
    result+= "<tr>"

    result+= "<td>"+ [i+1] +"</td>";
    result+= "<td>"+ mobile[i].name +"</td>";
    result+= "<td>"+mobile[i].price +"</td>";
    result+= "<td>"+ mobile[i].color +"</td>";
    result+= "<td>"+ mobile[i].storage +"</td>";
    result+= "<td>"+ mobile[i].camera +"</td>";

    result+= "</tr>"
    
}

mobileName.innerHTML = result;




 var country = [
    {
        name: "USA",
        population: 331002651,
        area: 9833520,
        capital: "Washington, D.C.",
        language: "English"
    },
    {
        name: "Canada",
        population: 37411047,
        area: 9984670,
        capital: "Ottawa",
        language: "English and French"
    },
    {
        name: "Mexico",
        population: 127575529,
        area: 1964375,
        capital: "Mexico City",
        language: "Spanish"
    },
    {
        name: "France",
        population: 66710000,
        area: 640679,
        capital: "Paris",
        language: "French"
    },
    {
        name: "Germany",
        population: 82790000,
        area: 357114,
        capital: "Berlin",
        language: "German"
    }
];

countryInfo = document.getElementById("countryInfo");

result1 = '';

country.forEach(function(countries, i){
    result1 += `<tr>
                    <td>${i + 1}</td>
                    <td>${countries.name}</td>
                    <td>${countries.population}</td>
                    <td>${countries.area}</td>
                    <td>${countries.capital}</td>
                    <td>${countries.language}</td>
                 </tr>`
});

countryInfo.innerHTML = result1;

