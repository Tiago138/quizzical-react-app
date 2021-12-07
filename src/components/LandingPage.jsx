import Button from "./Button";

function LandingPage(props) {
  return (
    <div className="landing-page">
      <h1>Quizzical</h1>
      <Button btnText="Start quiz" handleClick={props.handleClick} />
    </div>
  );
}

export default LandingPage;
