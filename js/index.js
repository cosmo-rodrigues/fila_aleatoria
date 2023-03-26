(async function searhCharacters() {
  const response = await fetch('https://api.sampleapis.com/rickandmorty/episodes')
  const data = await response.json()
  const characters = data
  const container = document.getElementById('container')
  
  for (let i = 0; i < characters.length; i++) {
    const card = document.createElement('div')
    card.classList.add('card')

    // Front
    const hDoisF = document.createElement('h2')
    hDoisF.innerText = `Player ${characters[i].id}`

    const cardFaceFront = document.createElement('div')
    cardFaceFront.classList.add('card_face', 'card_face-front')
    cardFaceFront.appendChild(hDoisF)

    // Back
    // Back Header
    const image = document.createElement('img')
    image.classList.add('pp')
    image.src = '../images/dev_icon.jpg'
    const hDoisB = document.createElement('h2')
    hDoisB.innerText = `Player ${characters[i].name}`
    const cardHeader = document.createElement('div')
    cardHeader.classList.add('card_header')
    cardHeader.appendChild(image)
    cardHeader.appendChild(hDoisB)

    // Back Body
    const hTres = document.createElement('h3')
    hTres.innerText = `${characters[i].name}`
    const pText = document.createElement('p')
    hTres.innerText = `${characters[i].air_date}`
    const cardBody = document.createElement('div')
    cardBody.classList.add('card_body')
    cardBody.appendChild(hTres)
    cardBody.appendChild(pText)

    // Back Content
    const cardContent = document.createElement('div')
    cardContent.classList.add('card_content')
    cardContent.appendChild(cardHeader)
    cardContent.appendChild(cardBody)

    const cardFaceBack = document.createElement('div')
    cardFaceBack.classList.add('card_face', 'card_face-back')
    cardFaceBack.appendChild(cardContent)

    //card_inner
    const cardInner = document.createElement('div')
    cardInner.classList.add('card_inner')
    cardInner.appendChild(cardFaceFront)
    cardInner.appendChild(cardFaceBack)
    
    card.appendChild(cardInner)

    container.appendChild(card)
    
    cardInner.addEventListener("click", function (e) {
      cardInner.classList.toggle('is-flipped');
    });
  }
}
)()
