import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://nehasingh.dev"),
  title: {
    default: "Neha Singh — Staff Software Engineer & Fullstack Developer",
    template: "%s | Neha Singh",
  },
  description:
    "Full stack developer crafting digital products with React.js, Angular, JavaScript, Node.js, .NET Core, and Azure. 9+ years experience (since Jul 2016). Staff Software Engineer at Diebold Nixdorf, creator of Cliner. Ex-Deloitte, Capgemini, Cognizant, Mindteck.",
  keywords: [
    "Neha Singh",
    "Fullstack Developer",
    "Staff Software Engineer",
    "Diebold Nixdorf",
    "Cliner",
    "Cliner macOS",
    "Rust",
    "GPUI",
    "React.js",
    "Next.js",
    "Angular",
    "JavaScript",
    "Node.js",
    ".NET Core",
    "ASP.NET MVC",
    "Azure",
    "Microsoft Certified",
    "Deloitte",
    "Capgemini",
    "John Deere",
    "Cognizant",
    "Mindteck",
  ],
  authors: [{ name: "Neha Singh", url: "https://in.linkedin.com/in/neha-singh-670a99178" }],
  creator: "Neha Singh",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nehasingh.dev",
    title: "Neha Singh — Staff Software Engineer & Fullstack Developer",
    description:
      "Full stack developer crafting digital products with React.js, Angular, JavaScript, Node.js, .NET Core, and Azure. Certified by Microsoft. Creator of Cliner.",
    siteName: "Neha Singh Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neha Singh — Staff Software Engineer & Fullstack Developer",
    description:
      "Full stack developer crafting digital products with React.js, Angular, JavaScript, Node.js, .NET Core, and Azure. Certified by Microsoft. Creator of Cliner.",
    creator: "@nehasingh",
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-NEHASINGHDEV";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Neha Singh",
    url: "https://nehasingh.dev",
    jobTitle: "Staff Software Engineer",
    worksFor: {
      "@type": "Organization",
      name: "Diebold Nixdorf",
    },
    sameAs: [
      "https://in.linkedin.com/in/neha-singh-670a99178",
      "https://github.com/neha-singh-43",
    ],
    knowsAbout: [
      "Fullstack Development",
      "React.js",
      "Angular",
      "JavaScript",
      "Node.js",
      ".NET Core",
      "Azure Cloud",
      "Microservices",
      "Rust",
      "macOS Applications",
      "Cliner",
    ],
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
