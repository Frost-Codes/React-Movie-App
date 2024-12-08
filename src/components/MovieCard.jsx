import React from 'react'

const MovieCard = ({ movies }) => {

    return (
        <div>

            {movies ? (
                <div className='container'>

                    {movies.map((movie, index) => (

                        <div className='movie' key={index}>
                            <div>
                                <p>{movie.Year}</p>
                            </div>

                            <div>
                                <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400'} alt={movie.Title} />
                            </div>

                            <div>
                                <span>{movie.Type}</span>
                                <h3>{movie.Title}</h3>
                            </div>
                        </div>

                    ))}


                </div>
            )
                : (
                    <div className="empty">
                        <h2>No movies found</h2>
                    </div>
                )

            }

        </div>



    )
}

export default MovieCard
