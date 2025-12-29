import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Summarist",
  description: "Understand books in few minutes",
};

export default function RootLayout({ children }: Readonly<{children: React.ReactNode;}>) {
  return (
      <html lang="en">
        <head>
          <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
            rel="stylesheet"
          />
          <title>Summarist Home Page</title>
        </head>
        <body className="flex flex-col min-h-screen">
          {children}
        </body>
      </html>
  )
}