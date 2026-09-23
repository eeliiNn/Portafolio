import "./globals.css";

export const metadata = {
  title: "Elizabeth Navidad | Portafolio",
  description: "Portafolio de Elizabeth Navidad, desarrolladora de software junior.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
