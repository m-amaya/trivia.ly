import { AppShell, Group, Image, Text } from "@mantine/core";
import { ProfileMenu } from "@src/components/layout/ProfileMenu";
import { useUserStore } from "@src/stores/user.store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

export function Layout() {
  const navigateTo = useNavigate();
  const { uid } = useUserStore();

  useEffect(() => {
    if (!uid) {
      navigateTo("/login", { replace: true });
    }
  }, [navigateTo, uid]);

  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header withBorder={false}>
        <Group h="100%" justify="space-between" px="md">
          <Group gap={8}>
            <Image h={32} src="/logo.png" />
            <Text ff="heading" fw={700} size="lg">
              Trivia.ly
            </Text>
          </Group>
          <ProfileMenu />
        </Group>
      </AppShell.Header>
      <Outlet />
    </AppShell>
  );
}
