import React from 'react'

import CopyButton from '../common/CopyButton'

import FavouritesError from './FavouritesError'

const Favourites = () => {
  const JSONfavourites = localStorage.getItem('favourites')
  const realfavourites = JSON.parse(JSONfavourites)

  if (!realfavourites) return <FavouritesError />

  return (
    <section className="section favourites">
      <div className="container">
        <div className="columns is-multiline">
          {realfavourites.map((gif, i) => (
            <div key={i} className="column is-fullwidth-mobile is-half-tablet is-one-quarter-desktop card">
              <div className="card">
                <div className="card-image">
                  <figure className="image is-4by3">
                    <img src={gif} alt={'gif'} />
                  </figure>
                </div>
                <CopyButton copy={gif}/>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Favourites