//TODO create thumbnail images, so the user can click on them and see them in fullscreen
console.log(`hello world`);
//step 1 store img data (only use 2 to start, once you have all logic done and working then go in and add more):
const imageData = [
  {
    imageName: `amanitaMusc`,
    imageSrc: `images/fly-agaric-516281_1280.jpg`,
    imageAlt: `Amanita muscaria`,
  },
  {
    imageName: `inkcap`,
    imageSrc: `images/inkpot-3747301_1280.jpg`,
    imageAlt: `Coprinus comatus`,
  },
  {
    imageName: `bolette`,
    imageSrc: `images/beautiful-foot-boletus-2586702_1280.jpg`,
    imageAlt: `Bolette mushroom`,
  },
  {
    imageName: `jelly ear`,
    imageSrc: `images/judas-ear-4727784_1280.jpg`,
    imageAlt: `jelly ear mushroom`,
  },
  //     {
  //         imageName: `value`,
  //         imageSrc: `value`,
  //         imageAlt: `value`,
  //     },
];

const next = document.getElementById(`next`);
const prev = document.getElementById(`prev`);
let imageIndex = 0;

//I realised that when you first load the page, there is no fullscreen image and so I have to create a window.onload = function
//step 1: function that calls createfullscreenimages function with the argument imageData[imageIndex] (this will set the image to the first image in the object array as I have initialised imageindex as 0)
//Step 2: I can move my createThumbnails call into this function as it will happen upon opening the page.
//step 3: window.onload = start in order to call my createthumbnails etc

function start() {
  createFullscreenImages(imageData[imageIndex]);
  createThumbnails();
}

//step 2 create thumbnail images
function createThumbnails() {
  //select the DOM element (thumbnail container) to contain thumbnail images
  const thumbnailSection = document.getElementById(`thumbnail`);

  for (let i = 0; i < imageData.length; i++) {
    const thumbnail = document.createElement("img");
    thumbnail.src = imageData[i].imageSrc;
    thumbnail.alt = imageData[i].imageAlt;
    thumbnail.className = imageData[i].imageName;
    thumbnail.addEventListener(`click`, function () {
      createFullscreenImages(imageData[i]);
    });
    thumbnailSection.appendChild(thumbnail);
    console.log(`this is thumbnail alt: ${thumbnail.alt}`); //TESTING
  }
}

//step 3 create fullscreen images
function createFullscreenImages(thumb) {
  //this is the event handler
  const fullscreenContainer = document.getElementById(`gallery`);
  fullscreenContainer.innerHTML = "";
  const fullscreen = document.createElement("img");

  //update its values (properties)
  fullscreen.src = thumb.imageSrc;
  fullscreen.alt = thumb.imageAlt;
  fullscreen.className = thumb.imageName;
  //add className for styling (making it fullscreen)
  //append image to container
  fullscreenContainer.appendChild(fullscreen);
}

//TODO: button that selects next and button that selects prev
//step 1: create an eventlistener --> give DOM element listener
//step 2: event handler

//this is step 1
next.addEventListener(`click`, function () {
  selectImage(1); //this passes 1 as the argument meaning in the selectimage function the first line reads: imageIndex += 1. If I was on the 2nd image ([1]), it becomes the 3rd image because it updates imageIndex to [2].
  //handle function next here
});
prev.addEventListener(`click`, function () {
  selectImage(-1); //as above but minus one vs add one
  //handle function prev
});

//I need a way to remember/update the index so my button knows what image comes next or previously
//this is step 2
function selectImage(index) {
  imageIndex += index;

  if (imageIndex >= imageData.length) imageIndex = 0; //if the imageIndex is bigger than or equal to the length, this means you are at the last thumbnail and so you need to wrap around to the first thumbnail
  if (imageIndex < 0) imageIndex = imageData.length - 1; //if the imageIndex is bigger than 0 (you're at the first thumbnail trying to press the previous button), it will take you to the last thumbnail (-1 denotes the final object in array)
  console.log(`${imageIndex}`);
  createFullscreenImages(imageData[imageIndex]);
}

window.onload = start;
