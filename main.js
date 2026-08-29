import './style.css'
import { supabase } from './supabase.js'
import { cloudflareConfig } from './cloudflare.js'

const content = document.querySelector('#content')
const navButtons = document.querySelectorAll('[data-tab]')

const sampleFilms = [
  { title: 'Beyond the Truth', genre: 'Drama', icon: '🎞️' },
  { title: 'Broken Promises', genre: 'Romance', icon: '🎬' },
  { title: 'The Rescue', genre: 'Action', icon: '📽️' },
  { title: "A Mother's Sacrifice", genre: 'Drama', icon: '⭐' },
]

function renderCards() {
  const cards = document.querySelector('#featuredCards')
  if (!cards) return
  cards.innerHTML = sampleFilms.map(f => `
    <article class="card">
      <div class="poster">${f.icon}</div>
      <div class="card-body">
        <h3>${f.title}</h3>
        <p>${f.genre}</p>
      </div>
    </article>
  `).join('')
}

function setActive(tab) {
  navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.tab === tab))
}

function renderTab(tab) {
  if (tab === 'home') {
    content.innerHTML = `
      <section class="hero">
        <div>
          <p class="eyebrow">VISIONARY SUCCESS GROUP</p>
          <h1>Your Story. Your Screen.</h1>
          <p>Watch films, discover creators, and share your own videos.</p>
          <button class="primary-btn">▶ Watch Now</button>
        </div>
      </section>
      <section>
        <div class="section-head"><h2>Featured Films</h2><button class="link-btn">See all</button></div>
        <div class="cards" id="featuredCards"></div>
      </section>
    `
    renderCards()
    return
  }

  const labels = {
    shorts: ['Shorts', 'Short videos will appear here.'],
    create: ['Create', 'Upload a film, episode, or short video.'],
    subscriptions: ['Subscriptions', 'New videos from creators you follow will appear here.'],
    you: ['You', 'Your profile, uploads, history, playlists, and settings.']
  }

  const [title, text] = labels[tab]
  content.innerHTML = `<section class="empty-state"><div><h2>${title}</h2><p>${text}</p></div></section>`
}

navButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const tab = btn.dataset.tab
    setActive(tab)
    renderTab(tab)
  })
})

renderCards()

console.log('Supabase ready:', Boolean(supabase))
console.log('Cloudflare config loaded:', cloudflareConfig)
