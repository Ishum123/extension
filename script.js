fetch("https://catfact.ninja/fact")
 .then(data => data.json())
 .then(catData=>{
    const catFact=catData.fact;
    const e=document.getElementById('ele');

    e.innerHTML=catFact;
 })