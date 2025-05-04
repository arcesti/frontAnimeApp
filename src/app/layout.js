import './styles/globals.css'

export const metadata = {
  title: 'AnimeApp',
  description: 'Descubra e acompanhe seus animes favoritos',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}