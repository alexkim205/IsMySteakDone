import React, { Fragment } from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";

import TitleSection from "../../components/TitleSection.component";
import Section from "../../components/Section.component";
import TwoCol from "../../components/TwoColumn.layout";
import Scrollbar from "../../components/Scrollbar.component";
import { ButtonLink } from "../../components/Button.component";
import QuestionSection from "./QuestionsSection.component";

import { questions } from "./questions";

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

const QuizRoot = () => {
  const { path, url } = useRouteMatch();
  console.log("QuizRoot -> path, url", path, url);

  return (
    <Fragment>
      <Switch>
        <Route exact path={`${path}/start`}>
          <TitleSection>
            <h1>Quiz</h1>
            <p>No pressure, only your pride is at steak!</p>
          </TitleSection>
          <Section center>
            <h2>Ready?</h2>
            <ButtonLink to={`${url}/1/1`}>Start the quiz!</ButtonLink>
          </Section>
          <Section center>
            <h2>Need to review?</h2>
            <ButtonLink to="/cheat-sheet">Cheat Sheet</ButtonLink>
          </Section>
        </Route>
        <Route exact path={`${path}/end`}>
          <TitleSection>
            <h1>Quiz</h1>
            <p>No pressure, only your pride is at steak!</p>
          </TitleSection>
          <h2>Quiz Finished</h2>
        </Route>
        <Route path={`${path}/:scenario(\\d+)/:part(\\d+)`}>
          <QuizQuestions />
        </Route>
      </Switch>
    </Fragment>
  );
};

export default QuizRoot;
