window.addEventListener('scroll', onScroll)

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
}

function showNavOnScroll(){
  navigation.classList.add('scroll')
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll(){
  backToTopButton.classList.add('show')
  if (scrollY < 500) {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home,
  #home img,
  #home .stats,
  #services,
  #services .card,
  #about,
  #about header,
  #about .content
`)
