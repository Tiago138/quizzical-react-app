function Quiz(props) {
  const answersElements = props.answers.map(item => {
    return <span key={item}>{item}</span>;
  });

  return (
    <article className="quiz">
      <p>{props.question}</p>
      <div className="answers">{answersElements}</div>
    </article>
  );
}

export default Quiz;
