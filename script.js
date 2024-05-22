function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // pegar tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem

  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar a imagem light
    img.setAttribute('src', './assets/Avatar-light.jpeg')
  } else {
    img.setAttribute("src", "./assets/avatar.jpeg")
  }


  // se tiver sem light mode, manter a imagem normal
}