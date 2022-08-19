import '../styles/App.scss';
import friendsQuotes from '../data/friends_quotes.json';
import { useState } from 'react';

function App() {
  //Variables de estado

  const [data, setData] = useState(friendsQuotes);

  //Pintar las frases

  const htmlData = data.map((quoteItem, index) => {
    return (
      <li>
        {quoteItem.quote} - <span>{quoteItem.character}</span>
      </li>
    );
  });

  return (
    <div className="App">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <section>
          <ul>{htmlData}</ul>
        </section>
        <section>
          <h2>Añadir una nueva frase</h2>
          <form className="form">
            <label htmlFor="quote"> Frase </label>
            <input type="name" name="quote" id="quote" />
            <label htmlFor="character"> Personaje </label>
            <input type="name" name="character" id="character" />
            <input type="submit" value="Añadir nueva frase" />
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
