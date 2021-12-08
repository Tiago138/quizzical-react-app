import { useState } from "react";

import LandingPage from "./components/LandingPage";
import GamePage from "./components/GamePage";

function App() {
  const [isQuizON, setIsQuizON] = useState(false);

  function startQuiz() {
    setIsQuizON(true);
  }

  return (
    <main className="main">
      {isQuizON ? (
        <GamePage isQuizON={isQuizON} />
      ) : (
        <LandingPage handleClick={startQuiz} />
      )}
    </main>
  );
}

export default App;
