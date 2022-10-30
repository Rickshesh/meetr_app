import * as React from 'react';
import { Text, Surface, List, Avatar, useTheme, Portal, Modal, IconButton } from 'react-native-paper';
import { StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import CameraModule from "./supportComponents/Camera"

const driver_information = {
  first_name: "Rickshesh",
  last_name: "Manchanda",
  gender: "Male",
  mobile: "8447848609",
  age: "25",
  auto_number: "HR12MH5660",
  device_mac: "DAS21312",
  upi_address: "rickshesh.iitd@okaxis",
  aadhar: "2131 2312 3123 2312",
  days_onboarded: "29/09/2021 (1 Year, and 1 Month)",
}

const information_labels = {
  first_name: "First Name",
  last_name: "Last Name",
  gender: "Gender",
  mobile: "Phone Number",
  age: "Age (in Years)",
  auto_number: "Vehicle Number",
  device_mac: "Driver Device Id",
  upi_address: "UPI Address",
  aadhar: "Aadhar Number",
  days_onboarded: "Onboarded Since",
}

export default function DriverDetails(){
  const [visible, setVisible] = React.useState(false);
  const [startCamera, setStartCamera] = React.useState(false);


  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const __setStartCamera = () => {
    setStartCamera(!startCamera);
  }

  return(
    <Surface style={styles.surface} elevation={2}>
    <Portal>
      <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
      {startCamera ? <CameraModule/> : 
      <Image source={require('../assets/profile.jpg')} style={styles.modalImageStyle}/> 
      }
        <IconButton
        icon="camera"
        onPress={__setStartCamera}
        style={styles.cameraButtonStyle}
        />
      </Modal>
    </Portal>
    <List.Section style={styles.avatar}>
    <Pressable onPress={()=>{showModal()}} >
    <Avatar.Image size={96} source={require('../assets/profile.jpg')}/>
    </Pressable>
    </List.Section>
    <ScrollView showsVerticalScrollIndicator={false} showsHorizontalScrollIndicator={false}>
    <List.Section>
      {Object.keys(information_labels).map((key, index) => {
        return (
          <List.Item key={index} title={information_labels[key]} description={driver_information[key]} titleStyle={styles.title} descriptionStyle={styles.description} right={props => <List.Icon {...props} icon="idcard" />}
          />
        )
      })}
      </List.Section>
      </ScrollView>
    </Surface>
)};

const styles = StyleSheet.create({
  surface: {
    flex: 1,
    margin: 10,
  },
  title: {
    fontSize: 16,
    color: "#A4919B",
  },
  description: {
    fontSize: 18
  },
  avatar:{
    backgroundColor: "#FAF9F9",
    alignItems:"center",
    padding:5
  },
  containerStyle: {
    flex: 0.75, 
    margin: 10,
    backgroundColor:"white"
  },
  modalImageStyle: {
    width: "100%", 
    height: "100%", 
  },
  cameraButtonStyle: {
    backgroundColor: "white",
    position:"absolute",
    top:0,
    right:0
  }
});