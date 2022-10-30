import { StyleSheet, Text, View } from 'react-native';
import {  MD3LightTheme as DefaultTheme, Provider as PaperProvider} from "react-native-paper";
import DriverDetails from './components/DriverDetails';
import CameraModule from './components/supportComponents/Camera';
import TopBar from './components/TopBar';

const theme = {
  ...DefaultTheme,
  // Specify custom property
  myOwnProperty: true,
  // Specify custom property in nested object
  colors: {
    darkPurple: '#4C243B',
    middlePurple: "#785B6B",
    lightPurple: "#A4919B",
    verylightPurple: "#FAF9F9",
    whiteBackground: "#FBFEFB",
    lightYellow:"#FCEBB1",
    middleYellow:"#FBDA60",
    darkYellow:"#F9C80E"
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
    <View style={styles.container}>
    <TopBar />
    <DriverDetails />
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FBFEFB',
  },
});
