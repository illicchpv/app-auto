import './App.scss';

import { Header } from "../Header";
import { About } from "../About";
import { Catalog } from "../Catalog";
import { GetPrice } from "../GetPrice";
import { Footer } from "../Footer";

function App() {
  return (
    <div className={'root'}>
      <Header />

      <main>
        <section>
          <About></About>
        </section>

        <section>
          <Catalog></Catalog>
        </section>

        <section>
          <GetPrice></GetPrice>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
