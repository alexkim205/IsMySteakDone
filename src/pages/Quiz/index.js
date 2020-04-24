import React, { Fragment } from "react";
import { Route, Switch, useRouteMatch, useHistory } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

import TitleSection from "../../components/TitleSection.component";
import Section from "../../components/Section.component";
import TwoCol from "../../components/TwoColumn.layout";
import Scrollbar from "../../components/Scrollbar.component";
import { ButtonLink, Button } from "../../components/Button.component";
import QuestionSection from "./QuestionsSection.component";

import { questions } from "./questions";
import { redirectQuiz } from "../../helper";

const QuizStart = () => {
  redirectQuiz();

  return (
    <Fragment>
      <TitleSection>
        <h1>Quiz</h1>
        <p>No pressure, only your pride is at steak!</p>
      </TitleSection>
      <Section center>
        <h2>Ready?</h2>
        <ButtonLink to={`/quiz/1/1`}>Start the quiz!</ButtonLink>
      </Section>
      <Section center>
        <h2>Need to review?</h2>
        <ButtonLink to="/cheat-sheet">Cheat Sheet</ButtonLink>
      </Section>
    </Fragment>
  );
};

const QuizQuestions = () => {
  return (
    <TwoCol>
      <TwoCol.Left width={80}>
        <QuestionSection />
      </TwoCol.Left>
      <TwoCol.Right minWidth={100} width={20}>
        <Scrollbar sections={questions} />
      </TwoCol.Right>
    </TwoCol>
  );
};

const QuizEnd = () => {
  const history = useHistory();
  redirectQuiz();

  return (
    <Fragment>
      <TitleSection>
        <h1>Quiz Finished!</h1>
      </TitleSection>
      <Section center>
        <h2>
          You got{" "}
          {questions
            .map(({ scenario, part }, i) =>
              JSON.parse(localStorage.getItem(`s${scenario}p${part}`)).isCorrect
                ? 1
                : 0
            )
            .reduce((a, b) => a + b, 0)}{" "}
          out of {questions.length} questions correct.
        </h2>
        <div className="flex-h">
          <Button
            icon
            onClick={() => {
              // remove cached progress
              const lastQ = questions.slice(-1)[0];
              history.push(`/quiz/${lastQ.scenario}/${lastQ.part}`);
            }}
          >
            <IoIosArrowBack />
          </Button>
          <Button
            onClick={() => {
              // remove cached progress
              questions.forEach(({ scenario, part }, i) => {
                localStorage.removeItem(`s${scenario}p${part}`);
              });
              localStorage.removeItem("quiz_progress");
              history.push(`/quiz/start`);
            }}
          >
            Try again
          </Button>
        </div>
      </Section>
    </Fragment>
  );
};

const QuizRoot = () => {
  const { path } = useRouteMatch();
  // redirectQuiz();

  return (
    <Switch>
      <Route exact path={`${path}/start`}>
        <QuizStart />
      </Route>
      <Route exact path={`${path}/end`}>
        <QuizEnd />
      </Route>
      <Route path={`${path}/:scenario(\\d+)/:part(\\d+)`}>
        <QuizQuestions />
      </Route>
    </Switch>
  );
};

export default QuizRoot;
