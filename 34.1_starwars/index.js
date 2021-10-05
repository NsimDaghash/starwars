const getallpeople=async () => {
    let all=[];
    const URL='https://swapi.dev/api/people/';
    for(let i=1; i<=10;i++){
  const request=await (await fetch(`https://swapi.dev/api/people/${i}`)).json();
  const homeWorld = await ( await fetch(request.homeworld)).json()
  let person={
    name:request.name,
    height:request.height,
    hair_color:request.hair_color,
    planet:{
      homeWorld:homeWorld.name,
      population:homeWorld.population,
    }
  }
  all.push(person);
    }
    return all;
  }
  const war=[];
  async function createTable(){
  let add=await getallpeople();
  let war=`<table style="text-alin:center;border-collapse:collapse;border-spacing:0px;border:1px solid black">`;
  war+=`<caption style="background-color:green;color:white;">star wars</caption>`;
  war+=`<tr>`
  war+=`<td style="border:1px solid black">name</td>`
  war+=`<td style="border:1px solid black">hair</td>`
  war+=`<td style="border:1px solid black">height</td>`
  war+=`<td style="border:1px solid black">planet</td>`
  war+=`<td style="border:1px solid black">planet population</td>`
  war+=`</tr>`
  add.forEach(person=>{
    war+=`<tr style="border:1px solid black">`
    war+=`<td style="border:1px solid black">${person.name}</td>`
    war+=`<td style="border:1px solid black">${person.hair_color}</td>`
    war+=`<td style="border:1px solid black">${person.height}</td>`
    war+=`<td style="border:1px solid black">${person.planet.homeWorld}</td>`
    war+=`<td style="border:1px solid black">${person.planet.population}</td>`
    war+=`</tr>`
  })
  war+=`</table>`
  document.body.innerHTML+=war;
  }
  let starwar= document.querySelector('#btn')
  starwar.addEventListener('click',createTable);

