import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [words, setwords] = useState([]);
  const [phase, setphase] = useState(0);
  const [keys, setkeys] = useState([]);
  const answer = "HELLO";

  const addKey = (e) => {
    if (keys.length < 5) {
      e.preventDefault();
      const value = e.target.innerHTML;
      // let list = keys;
      keys.push(value);
      console.log("keys: " + keys);
    }
  };

  const addWord = () => {
    if (keys.length == 5) {
      words.push(keys);
      setphase((phase += 1));
      setkeys([]);
      displayWord(words);
    }
  };

  const removeKey = () => {
    keys.pop();
    console.log("keys: " + keys);
  };

  const displayWord = (words) => <>{words}</>;

  return (
    <>
      {words.map((word) => (
        <>
          <div className="word">
            {word.map((letter, index) => (
              <>
                <div
                  className={
                    "blank letter " +
                    (answer[index] === letter
                      ? "right"
                      : answer.includes(letter)
                      ? "inside"
                      : "")
                  }
                >
                  {console.log(`Answer: ${answer}, Letter: ${letter}`)}
                  <span>{letter}</span>
                </div>
              </>
            ))}
          </div>
          <br />
        </> // display word element
      ))}

      {[...Array(6 - words.length)].map((x, i) => (
        <>
          <div className="word">
            <div className="blank"></div>
            <div className="blank"></div>
            <div className="blank"></div>
            <div className="blank"></div>
            <div className="blank"></div>
          </div>
          <br />
        </>
      ))}

      <div id="keyboard">
        <div id="row1">
          <button className="key" onClick={addKey}>
            Q
          </button>
          <button className="key" onClick={addKey}>
            W
          </button>
          <button className="key" onClick={addKey}>
            E
          </button>
          <button className="key" onClick={addKey}>
            R
          </button>
          <button className="key" onClick={addKey}>
            T
          </button>
          <button className="key" onClick={addKey}>
            Y
          </button>
          <button className="key" onClick={addKey}>
            U
          </button>
          <button className="key" onClick={addKey}>
            I
          </button>
          <button className="key" onClick={addKey}>
            O
          </button>
          <button className="key" onClick={addKey}>
            P
          </button>
        </div>
        <div id="row2">
          <button className="key" onClick={addKey}>
            A
          </button>
          <button className="key" onClick={addKey}>
            S
          </button>
          <button className="key" onClick={addKey}>
            D
          </button>
          <button className="key" onClick={addKey}>
            F
          </button>
          <button className="key" onClick={addKey}>
            G
          </button>
          <button className="key" onClick={addKey}>
            H
          </button>
          <button className="key" onClick={addKey}>
            J
          </button>
          <button className="key" onClick={addKey}>
            K
          </button>
          <button className="key" onClick={addKey}>
            L
          </button>
        </div>
        <div id="row3">
          <button className="key special" onClick={addWord}>
            ENTER
          </button>
          <button className="key" onClick={addKey}>
            Z
          </button>
          <button className="key" onClick={addKey}>
            X
          </button>
          <button className="key" onClick={addKey}>
            C
          </button>
          <button className="key" onClick={addKey}>
            V
          </button>
          <button className="key" onClick={addKey}>
            B
          </button>
          <button className="key" onClick={addKey}>
            N
          </button>
          <button className="key" onClick={addKey}>
            M
          </button>
          <button className="key special" onClick={removeKey}>
            ⌫
          </button>
        </div>
      </div>

      <style jsx>{`
        .word {
          display: inline-flex;
        }
        .blank {
          padding: 1em;
          width: 3em;
          height: 3em;
          margin: 0.2em;
          border: 2px #bababa solid;
        }
        .letter {
          text-align: center;
          vertical-align: middle;
          background-color: gray;
          color: white;
          font-weight: 700;
          border: none;
        }
        .inside {
          background-color: #b49f3a;
        }
        .right {
          background-color: green;
        }

        #keyboard {
          margin: 3em;
        }

        .key {
          width: 3em;
          height: 3em;
          text-align: center;
          vertical-align: middle;
          background-color: gray;
          color: white;
          margin: 0.2em;
          border: 0;
        }
        .special {
          width: fit-content;
          padding-left: 1em;
          padding-right: 1em;
        }
      `}</style>
    </>
  );
}

// export async function getServerSideProps() {
//   let { word } = await (
//     await fetch(`https://random-word-api.herokuapp.com/word?length=5`)
//   ).json();
//   console.log(word);
//   return {
//     props: {
//       word,
//     },
//   };
// }
