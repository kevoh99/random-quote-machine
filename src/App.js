import React, { useState, useEffect } from 'react'
import fetch from 'cross-fetch'
import { FaHeart, FaQuoteLeft, FaTwitter } from 'react-icons/fa'
import './App.css'

const COLORS = [
  'green',
  'teal',
  'black',
  'rgb(0, 120, 64)',
  'rgb(255, 208, 43)',
  'rgb(66, 184, 131)',
  'orange',
  'purple',
  'brown',
  'magenta',
  'maroon',
  '#7b61ff',
  '#2250f4',
  '#4f30d2',
  '#2e0d77',
  '#151a1e',
  '#7d248e',
  '#008b8b',
  '#b8860b',
  '#ffa07a',
  '#4b2ca3',
  '#f87fa0',
  '#42b883',
  '#5cebdf',
  '#4b9bbe',
  '#00adf2',
  '#031b4e',
  '#f08080',
  '#FF5733',
  '#20b2aa',
  '#006400',
  '#bdb76b',
  '#ff8c00',
  '#9932cc',
  '#8b0000',
  '#556b2f',
  '#778899',
  '#8B0000', // Dark-red
  '#DC143C', // Crimson
  '#B22222',
  '#FF1493',
  '#C71585',
  '#FF4500',
  '#FF8C00',
  '#FF6347',
  '#EE82EE',
  '#DA70D6',
  '#FF00FF',
  '#9370DB',
  '#BA55D3',
  '#663399',
  '#8A2BE2',
  '#9400D3',
  '#9932CC',
  '#8B008B',
  '#00FF00',
  '#00FA9A',
  '#00FFFF',
  '#00CED1',
  '#00BFFF',
  '#D2691E',
  '#800000',
  '#A52A2A',
  '#581845',
  '#c70039',
  '#aaafff',
  '#ff0033',
  '#ff0000',
  '#80ff00',
  '#0080ff',
  '#8000ff',
  '#ff8000',
  '#ff0080',
  '#0000ff',
  '#00ff80',
  '#ff5500',
  '#5500ff',
  '#aaff00',
  '#ff00aa',
  '#ffd500',
  '#2bff00',
  '#1a2700',
  '#001a27',
  '#270007',
  '#072700',
  '#740015',
  '#5a0010',
  '#41000c',
  '#0e0002',
  '#27001b',
  '#002720',
  '#ff133e',
  '#130003',
  '#ff002e',
  '#eb002a',
  '#333333',
  '#222222',
  '#333fff',
  '#333000',
  '#ff333f',
  '#3fff33',
  '#ff8d33',
  '#a5ff33',
  '#8d33ff',
  '#fff333'
]

/*
    Structure of the API response:
    [
      {
        "text": "Genius is one percent inspiration and ninety-nine percent perspiration.",
        "author": "Thomas Edison"
      },
      {
        "text": "You can observe a lot just by watching.",
        "author": "Yogi Berra"
      }
    ]
 */

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [quote, setQuote] = useState('')
  const [author, setAuthor] = useState('')
  const [currentColor, setCurrentColor] = useState(
    COLORS[Math.floor(Math.random() * COLORS.length)]
  )

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then((response) => response.json()) // Parse into a json object that we can read from
      .then((data) => {
        // data refers to the overall quotes array after parsing it into json object
        let randomIndex = Math.floor(Math.random() * data.length)
        let currentQuote = data[randomIndex] // An object containing the random quote chosen and its author
        setQuote(currentQuote.text)
        setAuthor(currentQuote.author)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    getQuote()
    // Set --primary-color custom variable that defines text-color and background-color
    document.documentElement.style.setProperty('--primary-color', currentColor)
  }, [currentColor])

  const handleChange = () => {
    setIsLoading(true)
    setCurrentColor(
      COLORS[Math.floor(Math.random() * COLORS.length)]
    )
    /* Note that we are not making a call to the API using
    the getQuote function. This is because a change in
    currentColor triggers the useEffect, which in turn
    changes the --primary-color (for bg and text) and
    then makes a call to the getQuote function. */
  }

  return isLoading ? (
    <div className='app'>
      <div className='wrapper'>
        <div
          id='quote-box'
          style={{
            minHeight: '150px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          Loading...
        </div>
        <footer>
          Made with <FaHeart /> by{' '}
          <a
            href='https://twitter.com/kevinnjoroge'
            target='_blank'
            rel='noopener noreferrer'
          >
            Kevin Nganga
          </a>
        </footer>
      </div>
    </div>
  ) : (
    <div className='app'>
      <div className='wrapper'>
        <div id='quote-box'>
          <div id='text'>
            <FaQuoteLeft aria-hidden='true' /> {' ' + quote}
          </div>
          <div id='author'>{author === null ? '- Unknown' : '- ' + author}</div>
          <div className='social-plus-controller'>
            <div className='social'>
              <div>
                <button id='tweet-btn'>
                  <a
                    href={'https://twitter.com/intent/tweet?hashtags=quotes&text="' + quote + '" ' + author}
                    target='_blank'
                    title='Tweet this quote'
                    rel='noreferrer'
                    id='tweet-quote'
                  >
                    <FaTwitter />
                  </a>
                </button>
              </div>
            </div>
            <div className='controller'>
              <div>
                <button id='new-quote' onClick={handleChange}>
                  <span id='ctrl-btn-text'>Next Quote</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <footer>
          Made with <FaHeart /> by{' '}
          <a
            href='https://twitter.com/kevinnjoroge'
            target='_blank'
            rel='noopener noreferrer'
          >
            Kevin Nganga
          </a>
        </footer>
      </div>
    </div>
  )
}

export default App
