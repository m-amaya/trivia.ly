import { Avatar, Box, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import { useUserStore } from "@src/stores/user.store";
import {
  FaAward as AwardIcon,
  FaChevronDown as ChevronDownIcon,
  FaArrowRightFromBracket as LogoutIcon
} from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export function ProfileMenu() {
  const { displayName, email, logout, photoUrl } = useUserStore();

  return (
    <Menu position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group gap={8}>
            <Avatar src={photoUrl} />
            <Text fw={600}>Hello, {displayName}!</Text>
            <ChevronDownIcon color="var(--mantine-color-dimmed)" />
          </Group>
        </UnstyledButton>
      </Menu.Target>
      <Menu.Dropdown>
        <Group gap={8} px="sm" py="xs">
          <Avatar src={photoUrl} />
          <Box>
            <Text lh={1.25}>{displayName}</Text>
            <Text c="dimmed" lh={1}>
              {email}
            </Text>
          </Box>
        </Group>
        <Menu.Divider />
        <Menu.Item
          component={NavLink}
          leftSection={<AwardIcon />}
          to="/history"
        >
          High Scores
        </Menu.Item>
        <Menu.Item leftSection={<LogoutIcon />} onClick={() => logout()}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}
