function eventGallery(){
     const gallerydisplay = document.querySelector(".gallerydispimg");
     const smallimgs = document.querySelectorAll(".row img");
     console.log(smallimgs);
     console.log(gallerydisplay);
     smallimgs.forEach(smallimg => {
          smallimg.addEventListener("click", function(){
               const smimgsrc = this.src ;
               gallerydisplay.src = smimgsrc.replace('small','big');
          });
     });
}

eventGallery();