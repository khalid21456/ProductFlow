
import "./globals.css";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>ProductFlow</title>
        <meta name="description" content="ProductFlow is a platform for managing products and inventory." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
