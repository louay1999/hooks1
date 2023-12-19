import React from 'react'
import "./MovieCard.css"

export default function MovieCard(props) {
	const{Title,Plot,imdbRating,Images}=props.movie
  return (
    <div className="hero-container">
		
		<div className="main-container">
			<div className="poster-container">
				<a href="#"><img src={Images[0]} className="poster" /></a>
			</div>
			<div className="ticket-container">
				<div className="ticket__content">
					<h4 className="ticket__movie-title">{Title}</h4>
					<p className="ticket__movie-slogan">{Plot}</p>
					<p className="ticket__current-price">{imdbRating}</p>
					
					
				</div>
			</div>
		</div>
	</div>
  )
}
