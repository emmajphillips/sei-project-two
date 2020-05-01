import React from 'react'

const favourites = []

const FavouritesButton = (favourite) => {
  
  const addToFavourites = () => {
    console.log('this is the url', favourite)
    favourites.push(favourite.favourite)
    localStorage.setItem('favourites', JSON.stringify(favourites))
    console.log('added to:', favourites)
  }

  return (
    <button onClick={addToFavourites} type="button" className="button gif-button">
      <span className="icon">
        <i className="fas fa-heart"></i>
      </span>
      <span>Add to favourites</span>
    </button>
  )
}

export default FavouritesButton