const title1 =  document.getElementById('info1');
const title2 = document.getElementById('info2') ;
const title3 =  document.getElementById('info3');
function displayAbout1() {
     console.log('1');
     title1.style.display= "block";
     title2.style.display= "none";
     title3.style.display= "none";
}
function displayAbout2(){
     title1.style.display= 'none';
     title2.style.display= "block";
     title3.style.display= "none";
     console.log('2');
}
function displayAbout3()
{
     title1.style.display= "none";
     title2.style.display= "none";
     title3.style.display= "block";
     console.log('3');
     
}
