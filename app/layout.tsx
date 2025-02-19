import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";

import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
} from '@clerk/nextjs'

const IBMPlex =IBM_Plex_Sans({
  variable: "--font-ibm-plex",
  subsets: ["latin"],
  weight: ['400', '500', '600', '700']
});

export const metadata: Metadata = {
  title: "Imagineer",
  description: "AI-powered image engineer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{
      variables: { colorPrimary: '#624cf5'}
    }}>
      <html lang="en">
        <body
          className={ cn("font-IBMPlex antialiased", IBMPlex.variable) }>
            {/* <SignedOut> */}
              {/* <SignInButton /> */}
              {/* <SignUpButton /> */}
            {/* </SignedOut> */}
            {/* <SignedIn> */}
              {/* <UserButton /> */}
            {/* </SignedIn> */}
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
