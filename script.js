function toggleMode(){
  const body = document.body;
  const icon = document.querySelector('.switch-icon')

  body.classList.toggle('light')

  if(body.classList.contains("light")){
    icon.setAttribute("name", "moon-outline")
  } else {
    icon.setAttribute("name", "sunny-outline")
  }
}