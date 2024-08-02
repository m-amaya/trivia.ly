import { Layout } from "@src/components/layout";
import { HistoryPage } from "@src/pages/history";
import { HomePage } from "@src/pages/home";
import { LoginPage } from "@src/pages/login";
import { QuestionPage } from "@src/pages/question";
import { ResultsPage } from "@src/pages/results";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "trivia/question/:questionNumber",
        element: <QuestionPage />
      },
      {
        path: "trivia/results",
        element: <ResultsPage />
      },
      {
        path: "history",
        element: <HistoryPage />
      }
    ]
  },
  {
    path: "/login",
    element: <LoginPage />
  }
]);
