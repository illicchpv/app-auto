import './App.scss';

import { Header } from "../Header";
import { About } from "../About";
import { Catalog } from "../Catalog";
import { GetPrice } from "../GetPrice";
import { Footer } from "../Footer";

function App() {
  return (
    <>
      <Header />

      <main>
        <section>
          <About></About>
        </section>

        <section id='catalog'>
          <Catalog text='Наш автопарк'></Catalog>
        </section>

        <section id='getprice'>
          <GetPrice></GetPrice>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default App;
