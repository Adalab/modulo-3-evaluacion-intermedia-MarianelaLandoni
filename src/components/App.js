import '../styles/App.scss';
import friendsQuotes from '../data/friends_quotes.json';
import { useState } from 'react';

function App() {
  //Variables de estado

  const [data, setData] = useState(friendsQuotes);
  const [newQuote, setNewQuote] = useState({
    quote: '',
    character: '',
  });

  //Pintar las frases

  const htmlData = data.map((quoteItem, index) => {
    return (
      <li key={index}>
        {quoteItem.quote} - <span>{quoteItem.character}</span>
      </li>
    );
  });

  //Añadir nueva frase
  //Función manejadora de los inputs

  const handleNewQuote = (ev) => {
    setNewQuote({
      ...newQuote,
      [ev.target.id]: ev.target.value,
    });
  };

  //Función manejadora del botón de añadir. A los datos que ya tenía..., le añado estos nuevos (spread)

  const handleClickAddQuote = (ev) => {
    ev.preventDefault();
    setData([...data, newQuote]);

    // Quiero que se borren los inputs cuando ya se ha añadido la frase
    setNewQuote({
      quote: '',
      character: '',
    });
  };

  return (
    <div className="App">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <section>
          <ul className="listQuotes">{htmlData}</ul>
        </section>
        <section>
          <h2>Añadir una nueva frase</h2>
          <form className="form">
            <label htmlFor="quote">Frase</label>
            <input
              type="name"
              name="quote"
              id="quote"
              value={newQuote.quote}
              onChange={handleNewQuote}
            />

            <label htmlFor="character">Personaje</label>
            <input
              type="name"
              name="character"
              id="character"
              value={newQuote.character}
              onChange={handleNewQuote}
            />
            <input
              type="submit"
              value="Añadir nueva frase"
              onClick={handleClickAddQuote}
            />
          </form>
        </section>
      </main>
    </div>
  );
}

export default App;
