import '../styles/globals.css';

export default function RootLayout({ children }) {
  return (
      <html>
      <head>
        <title>Zaid Qourah Portfolio</title>
        <meta name="description" content="Zaid Qourah's personal portfolio website" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
      {children}
      </body>
      </html>
  );
}
