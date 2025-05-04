"use client";

import { useState, useRef, useEffect } from 'react';
import Header from "@/components/Header";
import AnimeCard from "@/components/AnimeCard";
import HeroSection from '@/components/Hero';
import Footer from "@/components/Footer";
import "../app/style.css";
import ServiceAnime from '@/service/serviceAnime.js';

export default function Home() {
    const sliderRef = useRef(null);

    const scrollLeft = () => {
        sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    };

    const scrollRight = () => {
        sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    };

    const service = new ServiceAnime();
    const [darkMode, setDarkMode] = useState(false);
    const [animes, setAnimes] = useState([]);

    useEffect(() => {
        async function buscarAnimes() {
            const animeList = await service.getPop();
            setAnimes(animeList.animes);
        }

        buscarAnimes();
    });

    const toggleFavorite = (id) => {
        setAnimes(animes.map(anime =>
            anime.mal_id === id ? { ...anime, isFavorite: !anime.isFavorite } : anime
        ));
    };

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-dark-mode' : 'bg-light-mode'}`}>
            <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <HeroSection darkMode={darkMode} />
            <main className="max-w-6xl mx-auto px-4 py-8">
                <h2 className={`text-2xl font-bold mb-6 ${darkMode ? 'text-white' : ''}`}>Animes Populares</h2>
                <div className="anime-slider">
                    {animes.map((anime) => (
                        <div key={anime.mal_id} className="anime-card">
                            <AnimeCard
                                anime={anime}
                                darkMode={darkMode}
                                toggleFavorite={() => toggleFavorite(anime.mal_id)}
                            />
                        </div>
                    ))}
                </div>

                <div style={{ marginTop: "2rem" }}>
                    <img src={animes[0].Trailer.Images.maximum_image_url} alt="" />
                </div>
            </main>
            <Footer darkMode={darkMode} />
        </div>
    );
}