let navToggle = document.querySelector('.nav-toggle')
let navToggle2 = document.querySelector('.nav-toggle2')
let bars = document.querySelectorAll('.bar')
let sidebar = document.querySelector('.sidebar')

function toggleHamburger(e) {
  bars.forEach((bar) => bar.classList.toggle('x'))
  sidebar.classList.add('active')
}

function unToggleHamburger(e) {
  bars.forEach((bar) => bar.classList.toggle('x'))
  sidebar.classList.remove('active')
}

navToggle.addEventListener('click', toggleHamburger)
<<<<<<< HEAD
navToggle2.addEventListener('click', unToggleHamburger)
=======
navToggle2.addEventListener('click', unToggleHamburger)
>>>>>>> 30ce70e1fdb05dfa703120b9d3c5227db4eaf1c3
