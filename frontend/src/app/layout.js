"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import '@mantine/core/styles.css';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';


const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "LLM Chat Manager",
//   description: "LLM Chat Manager",
// };

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
          <MantineProvider withGlobalStyles withNormalizeCSS>
            {children}
          </MantineProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}
