import React from 'react';
import "./MoviePoster.scss";

interface MoviePosterProps {
    title: string;
    imageUrl: string;
}

export const MoviePoster: React.FC<MoviePosterProps> = ({ title, imageUrl }) => (
    <div className="movie-poster">
        <img src={imageUrl} alt={title} />
    </div>
);