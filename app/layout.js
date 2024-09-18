import "./globals.css";
import { Footer, NavBar } from "@/components";




export const metadata = {
  title: "RecipeHaven",
  description: "Easy, elegant recipes you can make any day of the week.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/recipeHaven.jpeg" />
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
