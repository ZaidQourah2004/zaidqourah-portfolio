import '../styles/globals.css';
import '../styles/animations.css';

export default function RootLayout({ children }) {
    return (
        <html>
        <head>
            <title>Zaid Qourah</title>
            <meta name="description" content="Zaid Qourah's personal portfolio website" />
            <link rel="icon" href="/favicon.ico" />
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Lora:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        </head>
        <body>
        {children}
        </body>
        </html>
    );
}
