import mediumZoom from 'medium-zoom'

const zoomDefault = mediumZoom('#zoom-default')
const zoomMargin = mediumZoom('#zoom-margin', { margin: 48 })
const zoomBackground = mediumZoom('#zoom-background', { background: '#212530' })
const zoomScrollOffset = mediumZoom('#zoom-scrollOffset', {
  scrollOffset: 0,
  background: 'rgba(25, 18, 25, .9)',
})

// Trigger the zoom when the button is clicked
const zoomToTrigger = mediumZoom('#zoom-trigger')
const button = document.querySelector('#button-trigger')
button.addEventListener('click', () => zoomToTrigger.open())

// Detach the zoom after having been zoomed once
const zoomToDetach = mediumZoom('#zoom-detach')
zoomToDetach.on('closed', () => zoomToDetach.detach())

// Observe zooms to write the history
const observedZooms = [
  zoomDefault,
  zoomMargin,
  zoomBackground,
  zoomScrollOffset,
  zoomToTrigger,
  zoomToDetach,
]

// Log all interactions in the history
const history = document.querySelector('#history')

observedZooms.forEach(zoom => {
  zoom.on('open', event => {
    const time = new Date().toLocaleTimeString()
    history.innerHTML += `<li>Image "<em>${
      event.target.alt
    }</em>" was zoomed at ${time}</li>`
  })

  zoom.on('detach', event => {
    const time = new Date().toLocaleTimeString()
    history.innerHTML += `<li>Image <em>"${
      event.target.alt
    }"</em> was detached at ${time}</li>`
  })
})

// const gitalk = new Gitalk({
//   clientID: '5d5d2ccbdfc905efae38',
//   clientSecret: 'efd34fc1dfa460984be2ac29e7a7fb40a4e2b8ee',
//   repo: 'timuela.github.io',      // The repository of store comments,
//   owner: 'timuela',
//   admin: ['GitHub repo owner and collaborators, only these guys can initialize github issues'],
//   id: location.pathname,      // Ensure uniqueness and length less than 50
//   distractionFreeMode: false  // Facebook-like distraction free mode
// })

// gitalk.render('gitalk-container')
