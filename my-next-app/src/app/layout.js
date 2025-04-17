import './index.css' // If you have global CSS

export const metadata = {
  title: 'My Website',
  description: 'Welcome to my website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
