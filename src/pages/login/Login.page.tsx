import {
  AppShell,
  Button,
  Flex,
  Grid,
  Group,
  Image,
  Text
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { User, useUserStore } from "@src/stores/user.store";
import { auth, githubProvider, googleProvider } from "@src/tokens/firebaseApp";
import { signInWithPopup } from "firebase/auth";
import { Helmet } from "react-helmet";
import { FaGithub as GitHubIcon, FaGoogle as GoogleIcon } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import classes from "./Login.module.css";

export function LoginPage() {
  const navigateTo = useNavigate();
  const store = useUserStore();

  const handleLogin = async (provider: User["provider"]) => {
    const isGoogleProvider = provider === "google";

    try {
      const { user } = await signInWithPopup(
        auth,
        isGoogleProvider ? googleProvider : githubProvider
      );

      store.updateDisplayName(user.displayName ?? "");
      store.updateEmail(user.email ?? "");
      store.updatePhotoUrl(user.photoURL ?? "");
      store.updateProvider(provider);
      store.updateUid(user.uid);
      navigateTo("/");
    } catch (error) {
      notifications.show({
        title: "Login Error",
        message: `${error}`
      });
    }
  };

  return (
    <>
      <Helmet>
        <title>Login | Trivia.ly</title>
      </Helmet>
      <AppShell className={classes.shell} p="lg">
        <Flex flex={1} justify="center">
          <Group>
            <Image h={70} src="/logo.png" alt="Logo image" />
            <Text className={classes.title} ff="heading" fw={700}>
              Trivia.ly
            </Text>
          </Group>
        </Flex>
        <Flex className={classes.bottom} flex={1} p="lg">
          <Grid columns={2} w="100%">
            <Grid.Col span={{ base: 2, sm: 1 }}>
              <Button
                fullWidth
                leftSection={<GoogleIcon />}
                onClick={() => handleLogin("google")}
                size="lg"
              >
                Login with Google
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 2, sm: 1 }}>
              <Button
                fullWidth
                leftSection={<GitHubIcon />}
                onClick={() => handleLogin("github")}
                size="lg"
              >
                Login with GitHub
              </Button>
            </Grid.Col>
            <Grid.Col span={2}>
              <Text size="sm">
                DISCLAIMER: This is a demo environment. No personal information
                is ever stored or shared with a third party.
              </Text>
            </Grid.Col>
          </Grid>
        </Flex>
      </AppShell>
    </>
  );
}
