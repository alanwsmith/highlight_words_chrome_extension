// Look at everything
const els = document.getElementsByTagName('*')

// Setup an array to hold stuff to mess with
const itemsToUpdate = []

// Find all the things (very niave)
for (let i = 0; i < els.length; i++) {
  const children = els[i].childNodes
  for (let x = 0; x < children.length; x++) {
    if (children[x].nodeType === 3) {
      if (children[x].nodeValue) {
        if (children[x].nodeValue.match(/examples/)) {
          itemsToUpdate.push([i, x])
        }
      }
    }
  }
}

// Funciton to build and do the replacement
const highlight = (target) => {
  console.log(target)
  const eIndex = target[0]
  const cIndex = target[1]

  const initialValue =
    els[eIndex].childNodes[cIndex].nodeValue.split(/examples/)
  console.log(initialValue)

  const wrapper = document.createElement('span')

  const firstPart = document.createElement('span')
  firstPart.innerText = initialValue[0]

  const theHighlight = document.createElement('span')
  theHighlight.innerText = 'examples'
  theHighlight.style.backgroundColor = 'red'

  const lastPart = document.createElement('span')
  lastPart.innerText = initialValue[1]

  wrapper.appendChild(firstPart)
  wrapper.appendChild(theHighlight)
  wrapper.appendChild(lastPart)

  els[eIndex].childNodes[cIndex].replaceWith(wrapper)
}

// start from the bottom so the updates don't
// change things out from under you.
itemsToUpdate.reverse()

// Fire things off
itemsToUpdate.forEach((target) => {
  highlight(target)
})
