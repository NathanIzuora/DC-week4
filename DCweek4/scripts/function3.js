var cities = [
    { name: "Dallas", temperature: 60.0 },
    { name: 'Atlanta', temperature: 52.0 },
    { name: 'Detroit', temperature: 48.0 },
    { name: 'New York', temperature: 80.0 },
    { name: "Houston", temperature: 85.0},
  ];
  



  var coolcities = cities.filter(function(element){

    if(element.temperature < 70)
    {

        return element;
    }
    
  })
  console.log(coolcities);

  var newArr = coolcities.forEach(function(element)
  {

    console.log(element.name);
  })

  
