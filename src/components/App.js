import '../styles/App.scss';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Frases de Friends</h1>
      </header>
      <main>
        <section>
          <ul>
            <li>
              Frase 1 - <span>Personaje</span>
            </li>
            <li>
              Frase 2 - <span>Personaje</span>
            </li>
            <li>
              Frase 3 - <span>Personaje</span>
            </li>
          </ul>
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
