import { useState } from 'react';
import './Para.css';
import data from './Para.json'; // Importing JSON data as default export

function Para() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount <= 0) amount = 1;
    if (amount > 20) amount = 20;
    setText(data.slice(0, amount));
  };

  return (
    <>
      <section className="section-center">
        <h1>Tired of Boring Lorem Ipsum?</h1>
        <form className="lorem-form" onSubmit={handleSubmit}>
          <label>Paragraphs: </label>
          <input
            type="number"
            name="amount"
            id="amount"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />
          <button className="btn">Generate</button>
        </form>
        <article>
          {text.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </article>
      </section>
    </>
  );
}

export default Para;