import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const BOOKS = [
  {
  id: 1,
  title: "The Siren's Kiss",
  author: "Leslie Vedder",
  genre: ["Young Adult", "Romance", "Fantasy"],
  releaseDate: new Date("01/11/2027"),
  aveStars: 0,
  eBook: true
  },
  {
  id: 2,
  title: "Spells to Mend Broken Hearts",
  author: "Marissa Macy",
  genre: ["Young Adult", "Romance"],
  releaseDate: new Date("12/20/2024"),
  aveStars: 4,
  eBook: true
  },
  {
  id: 3,
  title: "How to Lose a Goblin in 10 Days",
  author: "Jessie Sylva",
  genre: ["Fantasy", "Romance"],
  releaseDate: new Date("03/01/2023"),
  aveStars: 8.5,
  eBook: false
  }
]

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App books={BOOKS}/>
  </StrictMode>,
)
