import { useState } from "react";

import Quiz from "./Quiz";
import Button from "./Button";

function QuizPage(props) {
  const [questionsArray, setQuestionsArray] = useState(props.quizData);
  const [check, setCheck] = useState(false);
  const [counter, setCounter] = useState(0);

  // Select answer
  function selectAnswer(id, answerId) {
    setQuestionsArray(prevQuestions => {
      let array = [];
      prevQuestions.forEach(question => {
        if (question.id !== id) {
          array.push(question);
        } else {
          let anserArr = [];

          question.answers.forEach(answer => {
            if (answerId === answer.id) {
              anserArr.push({ ...answer, selected: !answer.selected });
            } else {
              anserArr.push({ ...answer, selected: false });
            }
          });

          array.push({ ...question, answers: anserArr });
        }
      });
      return array;
    });
  }

  // Checks how many questions you answered right
  function CheckAnswers() {
    setCounter(0);
    questionsArray.forEach(questions => {
      questions.answers.forEach(answer => {
        if (answer.selected) {
          answer.answer === questions.correct_answer
            ? setCounter(prev => prev + 1)
            : setCounter(prev => prev + 0);
        }
      });
    });
    console.log(counter);
    setCheck(true);
  }

  const quizElements = questionsArray.map(question => (
    <Quiz
      key={question.id}
      id={question.id}
      question={question.question}
      answers={question.answers}
      selectAnswer={selectAnswer}
      check={check}
      correct={question.correct_answer}
    />
  ));

  return (
    <div className="quiz--container">
      {quizElements}
      <div className="center-btn">
        {check && (
          <p className="score">You scored {counter}/5 correct answers</p>
        )}

        {!check ? (
          <Button btnText="Check answers" handleClick={CheckAnswers} />
        ) : (
          <Button btnText="Play again" handleClick={props.newGame} />
        )}
      </div>
    </div>
  );
}

export default QuizPage;
