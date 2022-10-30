import * as React from 'react'
import { Appbar, Avatar, useTheme } from 'react-native-paper'

export default function TopBar() {
  const theme = useTheme()

  return (
    <Appbar.Header mode="center-aligned" elevated={true} style={{ backgroundColor: theme.colors.middleYellow }}>
      <Appbar.Action size={30} icon="menu" onPress={() => { }} color={theme.colors.darkPurple} />
      <Appbar.Content title="" />
      <Appbar.Action size={30} icon="home" onPress={() => { }} color={theme.colors.darkPurple} />
      <Avatar.Text size={30} label="RM" onPress={() => { }} style={{ backgroundColor: theme.colors.darkPurple }} />
    </Appbar.Header>
  )
};
