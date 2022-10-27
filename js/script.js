//MY OBJECT

const cities = [
  {
    name :'San Francisco',
    country: 'USA',
    dimension: '122 km²',
    image: 'San Francisco.jpg'
  },
  {
    name :'Lisbon',
    country: 'Portugal',
    dimension: '100,05km²',
    image: 'Lisbon.jpg'
  },
  {
    name :'Rome',
    country: 'Italy',
    dimension: '1287,36km²',
    image: 'Rome.jpg'
  },
  {
    name :'Chicago',
    country: 'USA',
    dimension: '606,34km²',
    image: 'Chicago.jpg'
  },
  {
    name :'Madrid',
    country: 'Spain',
    dimension: '604,3km²',
    image: 'Madrid.jpg'
  },

];


// VARIABLES DECLARATION AND INITIALIZATION

//add images to html file
const slider = document.querySelector('.slider');
const thumbs = document.querySelector('.thumbs');
const next = document.querySelector('.right');
const prev = document.querySelector('.left');

const numImages = 5;
let counterImages = 0;
let sliderHtml = '';
let thumbsHtml = '';

next.addEventListener('click',nextFunction);
prev.addEventListener('click',prevFunction);

//FUNCTIONS

//add all countries to file
worldCreation();

function worldCreation(){
  
  slider.innerHTML = '';

  cities.forEach( (city) => cityCreation(city) );

}

//add objects values to city
function cityCreation(city){
  
  const name = city.name;
  const country = city.country;
  const dimension = city.dimension;
  const image = city.image;
  
    sliderHtml += `
    <div class="item">
      <img class="" src="img/${image}" alt="">
      <div class="city-informations bg-dark bg-opacity-25 p-2 border border-dark border-opacity-10 rounded">
        <div class="city-name">${name}</div>
        <div class="country-name">${country}</div>
        <p class="dimension m-0">${dimension}</p>
      </div>
    </div>
`;
    thumbsHtml += `
    <img  class="item-thumb" src="img/${image}" alt="">
`;
}

slider.innerHTML = sliderHtml;
thumbs.innerHTML = thumbsHtml;

//Button action on image
const listImages = document.getElementsByClassName('item');
const listthumbs = document.getElementsByClassName('item-thumb');

listImages[counterImages].classList.add('active');
listthumbs[counterImages].classList.add('active');

function nextFunction(){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  counterImages++;
  if(counterImages === numImages) counterImages = 0;
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');

};

function prevFunction(){
  listImages[counterImages].classList.remove('active');
  listthumbs[counterImages].classList.remove('active');
  counterImages--;
  if(counterImages < 0) counterImages = numImages - 1;
  listImages[counterImages].classList.add('active');
  listthumbs[counterImages].classList.add('active');
};

//CAROUSEL AUTOPLAY

slider.addEventListener('mouseenter', autoPlayStop);
slider.addEventListener('mouseleave', autoPlayStart);

//AutoPlay when opening page
let playCarousel;
playCarousel = setInterval(nextFunction, 4000);

//Stop play when mouse over slider
function autoPlayStop(){
  clearInterval(playCarousel);
};

//Start again when mouse out of slider
function autoPlayStart(){
  playCarousel = setInterval(nextFunction, 4000);
};