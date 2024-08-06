import {
  AppShell,
  Button,
  Flex,
  Grid,
  Group,
  Image,
  Text
} from "@mantine/core";
import { Helmet } from "react-helmet";
import classes from "./Login.module.css";

export function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Login | Trivia.ly</title>
      </Helmet>
      <AppShell className={classes.shell} p="lg">
        <Flex flex={1} justify="center">
          <Group>
            <Image h={70} src="/logo.png" alt="Logo image" />
            <Text
              c="turquoise.1"
              className={classes.title}
              ff="heading"
              fw={700}
            >
              Trivia.ly
            </Text>
          </Group>
        </Flex>
        <Flex bg="ocean.6" className={classes.bottom} flex={1} p="lg">
          <Grid columns={4} w="100%">
            <Grid.Col span={{ base: 4, sm: 2, md: 1 }}>
              <Button fullWidth size="lg">
                Login with Google
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 4, sm: 2, md: 1 }}>
              <Button fullWidth size="lg">
                Login with Microsoft
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 4, sm: 2, md: 1 }}>
              <Button fullWidth size="lg">
                Login with Apple
              </Button>
            </Grid.Col>
            <Grid.Col span={{ base: 4, sm: 2, md: 1 }}>
              <Button fullWidth size="lg">
                Login with GitHub
              </Button>
            </Grid.Col>
          </Grid>
        </Flex>
      </AppShell>
    </>
  );
}
