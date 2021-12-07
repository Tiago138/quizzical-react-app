import { useState } from "react";

import LandingPage from "./components/LandingPage";
import QuizPage from "./components/QuizPage";

function App() {
  const [isQuizON, setIsQuizON] = useState(true);

  function startQuiz() {
    setIsQuizON(true);
  }

  return (
    <main className="main">
      {isQuizON ? (
        <QuizPage isQuizON={isQuizON} />
      ) : (
        <LandingPage handleClick={startQuiz} />
      )}
    </main>
  );
}

export default App;
