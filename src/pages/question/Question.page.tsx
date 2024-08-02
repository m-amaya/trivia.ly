import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function QuestionPage() {
  return (
    <>
      <Helmet>
        <title>Question | Trivia.ly</title>
      </Helmet>
      <AppShell.Main>Question Page</AppShell.Main>
    </>
  );
}
