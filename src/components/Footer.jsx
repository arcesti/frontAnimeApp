export default function Footer({ darkMode }) {
    return (
        <footer className={darkMode ? 'footer-dark' : 'footer-light'}>
            <div className="max-w-6xl mx-auto px-4 flex flex-col flex-md-row justify-between items-center">
                <div className="mb-4 mb-md-0">
                    <h3 className={darkMode ? 'footer-title-dark' : 'footer-title-light'}>AnimeApp</h3>
                    <p className="text-sm mt-1">Seu destino para descobrir e acompanhar animes</p>
                </div>
                <div className="flex space-x-8">
                    <div>
                        <h4 className="footer-section-title">Navegar</h4>
                        <ul className="text-sm space-y-1">
                            <li className="footer-link">Animes</li>
                            <li className="footer-link">Categorias</li>
                            <li className="footer-link">Temporadas</li>
                            <li className="footer-link">Top 10</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="footer-section-title">Sobre</h4>
                        <ul className="text-sm space-y-1">
                            <li className="footer-link">Contato</li>
                            <li className="footer-link">Sobre Nós</li>
                            <li className="footer-link">API</li>
                            <li className="footer-link">Ajuda</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className={darkMode ? 'footer-copyright-dark' : 'footer-copyright-light'}>
                © 2025 AnimeApp. Todos os direitos reservados.
            </div>
        </footer>
    );
}