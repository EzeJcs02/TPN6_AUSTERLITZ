import Header from "./components/Header.jsx";
import EjemploBlobs from "./components/EjemploBlobs.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  return (
    <div className="aplicacion">
      <Header />
      <main className="principal">
        <EjemploBlobs />
      </main>
      <Footer />
    </div>
  );
}
