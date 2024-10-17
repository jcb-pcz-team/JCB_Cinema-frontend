import React, { useRef } from 'react';
import "./MovieSection.scss";
import {MoviePoster} from "../MoviePoster/MoviePoster.tsx";

interface MovieSectionProps {
    title: string;
    movies: { id: number; title: string; imageUrl: string }[];
}

export const MovieSection: React.FC<MovieSectionProps> = ({title, movies}) => {
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -200 : 200;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="movie-section">
            <h2 className="secondary-heading">
                <span className="yellow-column"></span> {title}</h2>
            <div className="scroll-wrapper">
                <div className="scroll-container" ref={scrollContainerRef}>
                    {movies.map((movie) => (
                        <MoviePoster key={movie.id} title={movie.title} imageUrl={movie.imageUrl} />
                    ))}
                </div>
                <button className="scroll-button left" onClick={() => scroll('left')}>&lt;</button>
                <button className="scroll-button right" onClick={() => scroll('right')}>&gt;</button>
            </div>
        </section>
    );
}