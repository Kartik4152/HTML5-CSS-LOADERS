const loaders=document.querySelector('#controller').children;
for(loader of loaders)
    loader.addEventListener('click',(e)=>{
        console.log(e.target.innerHTML.split(' ')[1]);
        document.querySelector('#loader').replaceChildren(...loaderTemplates[parseInt(e.target.innerHTML.split(' ')[1])-1]);
    })

const loaderTemplates=[];
let temp=[];
let load=document.createElement('div');
load.id='outer1';
temp.push(load);
load=document.createElement('div');
load.id='inner1';
temp.push(load);
loaderTemplates.push([...temp]);

const cubeFaces=document.querySelector('#cube').children;