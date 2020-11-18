let textInput = document.querySelector('#inputText').value

let next = document.querySelector('#btn')

let textOutput = document.querySelector('#output')

const article = document.querySelector('#doc1');
let articleMoved = true;

const picture = document.querySelector('#doc2');
let pictureMoved = true;


//The text input will not be used in my final project, this is why I kind of did whatever.

next.onclick = function() {
  let textInput = document.querySelector('#inputText').value

  if (textInput <= 0 || textInput >= 10) {
    textOutput.textContent = `You think you're funny? I said 1 to 10. You're wrong.`
  } else if (textInput >= 5) {
    textOutput.textContent = `Guess what? Still wrong.`
  } else if (textInput < 5) {
    textOutput.textContent = `That's especially wrong.`
  } else {
    textOutput.textContent = `Hey, smarty pants. That's not even a number.`
  }
}


// Colored squares are dummies for future articles/pictures from the brief

article.onclick = function() {
  if (!articleMoved) {
    pictureSmall()
    articleBig()
  } else {
    articleSmall()
  }
}

picture.onclick = function() {
  if (!pictureMoved) {
    articleSmall()
    pictureBig()
  } else {
    pictureSmall()
  }
}

function articleBig() {
  article.style.left = '50%'
  article.style.top = '50%'
  article.style.transform = 'rotate(0deg)'
  article.style.transform = 'scale(2)'
  article.style.zIndex = 1
  articleMoved = true
}

function articleSmall() {
  article.style.left = '70%'
  article.style.top = '10%'
  article.style.transform = 'rotate(20deg)'
  article.style.transform = 'scale(1)'
  article.style.zIndex = -1
  articleMoved = false
}

function pictureBig() {
  picture.style.left = '50%'
  picture.style.top = '50%'
  picture.style.transform = 'scale(2)'
  picture.style.zIndex = 1
  pictureMoved = true
}

function pictureSmall() {
  picture.style.left = '25%'
  picture.style.top = '60%'
  picture.style.transform = 'scale(1)'
  picture.style.zIndex = -1
  pictureMoved = false
}