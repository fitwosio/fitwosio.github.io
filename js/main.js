
window.onscroll = function () {
  const opacity = Math.max((window.scrollY-50)/100,0);
  document.getElementById('navbar').style.backgroundColor=`rgb(255,255,255,${opacity})`;
  document.getElementById('white-logo').style.opacity=1-opacity;
  document.getElementById('color-logo').style.opacity=opacity;
  document.getElementById('nav-white-button').style.opacity=1-opacity;
  document.getElementById('nav-color-button').style.opacity=opacity;
  
  let parent = document.getElementById('nav-right-text-container');
  for (let index = 0; index < parent.childElementCount; index++) {
    const children = parent.children.item(index);
    children.style.color=opacity>0.5?`rgb(0,0,0,${opacity}`:`rgb(255,255,255,${1-opacity})`;
  }
}
