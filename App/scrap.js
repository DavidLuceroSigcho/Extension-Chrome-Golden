let btnscrap = document.getElementById ('scrap-profile');

console.log (btnscrap, 'btnscrap');

btnscrap.addEventListener ('click', async () => {const [tab] = await chrome.tabs.query ({ active: true, currentWindow: true});

if (tab !== null) {
    chrome.scripting.executeScript ({target: { tabId: tab.id }, 
    function: scarpingProfile,});
}
});

const scrapingProfile = () => 
{
    const wait = function (milliseconds) 
    {
        return new Promise (function (resolve) 
        {
            setTimeout (function () 
            {resolve ();}, milliseconds);
        });
    };

// (Informacion personal - Inicio)
const elementNombre = document.querySelector ('div.display-flex > div.mr5 > div > h1');
const elementPuesto = document.querySelector ('div.display-flex > div.mr5 > div:nth-child (2)');
const elementUbicacion = document.querySelector ('div.display-flex > div.mr5 > div.pb2 > span');
const elementAboutMe = document.querySelector ('section.pv-about-section > div.inline-show-more-text');

const Nombre = elementNombre ? elementNombre.innerText : null;
const Puesto = elementPuesto ? elementPuesto.innerText : null;
const Ubicacion = elementUbicacion ? elementUbicacion.innerText : null;
const AboutMe = elementAboutMe ? elementAboutMe.innerText : null;

// creacion de objetos con toda la informacion recolectada
const info = 
  {
    'Informacion personal': { Nombre, Puesto, Ubicacion, AboutMe},
    'Informacion de Educacion': [],
    'Experiencias laborales': [],
  }

// Experiencias Laborales - INICIO
// Apertura ver mas boton de experiencia laborales
const elementWorkOpen = document.querySelector 
('section.pv-profile-section > div.pv-experience-section_see-more > button');
if (elementWorkOpen) elementWorkOpen.click ();

// creacion de array con cada una de las experiencias
let experienciasLaborales = document.querySelectorAll ('section.pv-profile-section > div:nth-child (1) > section > ul li');










































};
