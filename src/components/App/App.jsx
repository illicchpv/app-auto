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

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="no opener no referrer"
    //     >
    //       Learn React
    //     </a>
    //     <h1>-------------------</h1>
    //     <Button text='Click Me' />
    //     <Input type='text' />
    //
    //
    //   </header>
    // </div>
  );
}

export default App;
