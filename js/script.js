//MY OBJECT

const countries = [
  {
    name :'Svezia',
    description: 'Freddo',
    image: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg'
  },
  {
    name :'Perù',
    description: 'Caldo',
    image: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg'
  },
  {
    name :'Chile',
    description: 'Caldo',
    image: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c'
  },
  {
    name :'Argentina',
    description: 'Caldo',
    image: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg'
  },
  {
    name :'Columbia',
    description: 'Caldo',
    image: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop'
  },

];


// VARIABLES DECLARATION AND INITIALIZATION

//add images to html file
const slider = document.querySelector('.slider');
const thumbs = document.querySelector('.thumbs');
const next = document.querySelector('.up');
const prev = document.querySelector('.down');

const numImages = 2;
let counterImages = 0;
let sliderHtml = '';
let thumbsHtml = '';

//FUNCTIONS

//add all countries to file
worldCreation();

function worldCreation(){
  
  slider.innerHTML = '';

  countries.forEach( (country) => countryCreation(country) );

}

//add objects values to file
function countryCreation(country){
  // let sliderHtml = slider.innerHTML;
  // let thumbsHtml = thumbs.innerHTML;
  
  const name = country.name;
  const description = country.description;
  const image = country.image;

  for(let i = 1; i <= numImages; i++){
    sliderHtml += `
    <div class="item">
      <img class="" src="${image}" alt="">
      <div class="country-name">${name}</div>
      <p class="description">${description}</p>
    </div>
`;
    thumbsHtml += `
    <img  class="item-thumb" src="${image}" alt="">
`;
  }
  
}

slider.innerHTML = sliderHtml;
thumbs.innerHTML = thumbsHtml;

//clases delcaration for active
const listImages = document.getElementsByClassName('item');
const listthumbs = document.getElementsByClassName('item-thumb');

listImages[counterImages].classList.add('active');
listthumbs[counterImages].classList.add('active');

prev.addEventListener('click',function(){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  counterImages++;
  if(counterImages === numImages) counterImages = 0;
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
})

next.addEventListener('click',function(){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  counterImages--;
  if(counterImages < 0) counterImages = numImages - 1;
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
})