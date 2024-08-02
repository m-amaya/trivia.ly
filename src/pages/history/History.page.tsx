import { AppShell } from "@mantine/core";
import { Helmet } from "react-helmet";

export function HistoryPage() {
  return (
    <>
      <Helmet>
        <title>History | Trivia.ly</title>
      </Helmet>
      <AppShell.Main>History Page</AppShell.Main>
    </>
  );
}
