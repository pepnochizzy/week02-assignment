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
  //     {
  //         imageName: `value`,
  //         imageSrc: `value`,
  //         imageAlt: `value`,
  //     },
  //     {
  //         imageName: `value`,
  //         imageSrc: `value`,
  //         imageAlt: `value`,
  //     },
  //     {
  //         imageName: `value`,
  //         imageSrc: `value`,
  //         imageAlt: `value`,
  //     },
];

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

//add the createFullscreenImages function as the event handler of the above events (use parameters)
//you call the createThumbnails function
createThumbnails();
