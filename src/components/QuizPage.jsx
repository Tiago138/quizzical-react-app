import { useEffect, useState } from "react";
import Quiz from "./Quiz";
import Button from "./Button";

function QuizPage(props) {
  const [quizData, setQuizData] = useState();
  //const [questionsArray, setQuestionArray] = useState([]);
  useEffect(() => {
    async function getQuiz() {
      const res = await fetch(
        "https://opentdb.com/api.php?amount=5&category=31"
      );
      const data = await res.json();
      setQuizData(data);
    }
    getQuiz();
  }, [props.isQuizON]);

  let arrayShuffle = function (arr) {
    let newPos, temp;

    for (let i = arr.length - 1; i > 0; i--) {
      newPos = Math.floor(Math.random() * (i + 1));
      temp = arr[i];
      arr[i] = arr[newPos];
      arr[newPos] = temp;
    }
    return arr;
  };

  let quizElements = [];

  if (quizData) {
    quizData.results.forEach(item => {
      const questionsArray = [item.correct_answer, ...item.incorrect_answers];
      const answers = arrayShuffle(questionsArray);

      quizElements.push(
        <Quiz key={item.question} question={item.question} answers={answers} />
      );
    });
  }

  return (
    <div className="quiz--container">
      {quizData ? quizElements : ""}
      <div className="center-btn">
        <Button btnText="Check answers" />
      </div>
    </div>
  );
}

export default QuizPage;
