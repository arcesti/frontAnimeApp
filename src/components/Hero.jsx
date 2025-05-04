export default function HeroSection({ darkMode }) {
    return (
        <section className={darkMode ? 'hero-dark' : 'hero-light'}>
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl text-md-4xl font-bold mb-4">Descubra e acompanhe seus animes favoritos</h2>
                <p className="text-lg text-md-xl opacity-90 max-w-2xl mx-auto mb-8">
                    Explore uma vasta coleção de animes, crie sua lista de favoritos e fique por dentro das últimas novidades do mundo anime.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                    <button className={darkMode ? 'hero-primary-btn-dark' : 'hero-primary-btn-light'}>
                        Explorar Catálogo
                    </button>
                    <button className={darkMode ? 'hero-secondary-btn-dark' : 'hero-secondary-btn-light'}>
                        Top Animes
                    </button>
                </div>
            </div>
        </section>
    );
}