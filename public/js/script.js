
fetch('/api/v0/gallery')
.then(function(response){
  if(!response.ok) {
    throw new Error('Not OK');
  }
  return response.json();
})
.then( function(data) {
  const imgArr = data;

  console.log(imgArr);
  const gallery = document.querySelector('#gallery');

  let output= '';




const imageContainer = document.querySelector(".image-gallery");

// the loop

for (let i = 0; i < image.length; i++) {

  //container 
  const figure = document.createElement('figure');
  imageContainer.appendChild(figure);


  //image 

  const figImage = document.createElement('img')
  figImage.src = `${image[i].pathURL}`;
  figImage.alt = `${image[i].description}`;
  figImage.style.maxWidth = `${image[i].width}`;
  // realized I hadn't linked these. 
  figImage.credit =  `${image[i].credit}`;
  figImage.creditURL = `${image[i].creditURL}`;
  figure.appendChild(figImage);

  //title 
  const caption = document.createElement('h2');
  caption.innerText = `${image[i].title}`;
  figure.appendChild(caption);


  const figCaption = document.createElement('figcaption');
  figCaption.innerText = `${image[i].description}`;
  figure.appendChild(figCaption)
};

 //this is the third place i've tried 

 gallery.innerHTML = output; 
})
.catch(function(err){
  console.log(err);
});

// none of this is working. I think I installed my dependancies wrong? 
