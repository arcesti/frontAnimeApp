import { Heart } from 'lucide-react';

export default function AnimeCard({ anime, darkMode, toggleFavorite }) {
    return (
        <div className={darkMode ? 'card-dark' : 'card-light'}>
            <div className="card-img-container">
                <img
                    src={anime.images.webp.large_image_url}
                    alt={anime.title}
                    className="card-img"
                />
                <div className="card-img-overlay"></div>
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        toggleFavorite();
                    }}
                    className={`${darkMode ? 'favorite-btn-dark' : 'favorite-btn-light'} ${anime.isFavorite ? 'favorite-btn-active' : ''}`}
                >
                    <Heart className={`h-5 w-5 ${anime.isFavorite ? 'fill-current' : ''}`} />
                </button>
            </div>
            <div className="card-content">
                <div className="flex justify-between items-start mb-2">
                    <h2 className={darkMode ? 'card-title-dark scroll-hidden' : 'card-title-light scroll-hidden'} style={{overflowX:"auto",  whiteSpace: "nowrap"}}>{anime.title}</h2>
                    <span className={darkMode ? 'card-year-dark' : 'card-year-light'}>
                        {anime.year}
                    </span>
                </div>
                <div className="scroll-hidden flex gap-2 mb-3" style={{overflowX:"auto",  whiteSpace: "nowrap"}}>
                    {anime?.genres?.map((genre, index) => (
                        <span key={index} className={darkMode ? 'genre-tag-dark' : 'genre-tag-light'}>
                            {genre.name}
                        </span>
                    ))}
                </div>
                <div className={`mb-4 ${getScoreClass(anime.score, darkMode)}`}>
                    {anime.score}
                </div>
                <button className={darkMode ? 'card-btn-dark' : 'card-btn-light'}>
                    Ver Detalhes
                </button>
            </div>
        </div>
    );
}

function getScoreClass(score, darkMode) {
    if (score >= 8) {
        return darkMode ? 'score-high-dark' : 'score-high-light';
    } else if (score >= 7) {
        return darkMode ? 'score-good-dark' : 'score-good-light';
    } else if (score >= 5) {
        return darkMode ? 'score-mid-dark' : 'score-mid-light';
    } else {
        return darkMode ? 'score-low-dark' : 'score-low-light';
    }
}