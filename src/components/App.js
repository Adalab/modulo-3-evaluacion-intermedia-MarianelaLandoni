import '../styles/App.scss';
// import friendsQuotes from '../data/friends_quotes.json';
import { useState, useEffect } from 'react';
import getDataApi from '../services/friendsAPI';

function App() {
  //Variables de estado

  const [data, setData] = useState([]);
  const [newQuote, setNewQuote] = useState({
    quote: '',
    character: '',
  });
  const [searchQuote, setSearchQuote] = useState('');
  const [searchCharacter, setSearchCharacter] = useState('all');
  const [fillText, setFillText] = useState('');

  //API
  useEffect(() => {
    getDataApi().then((data) => {
      setData(data);
    });
  }, []);

  //Evento para filtrar por frase

  const handleSearchQuote = (ev) => {
    setSearchQuote(ev.target.value);
  };

  //Evento para filtrar por personaje

  const handleSearchCharacter = (ev) => {
    setSearchCharacter(ev.target.value);
  };

  //Pintar las frases y filtrar

  const htmlData = data
    .filter((quoteItem) => {
      return quoteItem.quote.toLowerCase().includes(searchQuote.toLowerCase());
    })

    .filter((quoteItem) => {
      if (searchCharacter === 'all') {
        return true;
      } else if (quoteItem.character === searchCharacter) {
        return true;
      } else {
        return false;
      }
    })

    .map((quoteItem, index) => {
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
    if (newQuote.quote === '' || newQuote.character === '') {
      setFillText('Tienes que rellenar todos los campos');
    } else {
      setFillText('');
      setData([...data, newQuote]);
    }

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
          <form>
            <label htmlFor="filterQuote"> Filtrar por frase </label>
            <input
              type="text"
              name="filterQuote"
              id="filterQuote"
              value={searchQuote}
              onChange={handleSearchQuote}
            />
            <label htmlFor="filterCharacter"> Filtrar por personaje </label>
            <select
              name="filterCharacter"
              id="filterCharacter"
              value={searchCharacter}
              onChange={handleSearchCharacter}
            >
              <option value="all">Todos</option>
              <option value="Ross">Ross</option>
              <option value="Monica">Monica</option>
              <option value="Joey">Joey</option>
              <option value="Phoebe">Phoebe</option>
              <option value="Chandler">Chandler</option>
              <option value="Rachel">Rachel</option>
            </select>
          </form>
        </section>
        <section>
          <ul className="listQuotes">{htmlData}</ul>
        </section>
        <section>
          <h2>Añadir una nueva frase</h2>
          <p>{fillText}</p>
          <form className="form">
            <label htmlFor="quote">Frase</label>
            <input
              type="name"
              name="quote"
              id="quote"
              placeholder="Ej: Mi poo poo"
              value={newQuote.quote}
              onChange={handleNewQuote}
            />

            <label htmlFor="character">Personaje</label>
            <input
              type="name"
              name="character"
              id="character"
              placeholder="Ej: Joey"
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
