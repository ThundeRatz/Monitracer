import React, {useState} from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet,
    Switch
} from 'react-native';

import {Header, CellContainer, CellTitleContainer, VBox, VSeparator, ListSeparator} from '../cell'
import {H1,H2,H3,Body,BodySecondary} from '../typography'
import {PrimaryButton, SecondaryButton} from '../button'

import BluetoothSerial from 'react-native-bluetooth-serial-next'

export const BTList = (props) => {

    const _renderItem = ({item}) => {
         return(
          <View style={styles.wrapper}> 
            <View>
              <H3> {item.name} </H3>
              <BodySecondary> {item.id}</BodySecondary>      
            </View>
            <View>
              <PrimaryButton title="conectar" onPress={() => conectPress(item)}/>    
            </View>                               
          </View>
        ) 
      }

    //se quiser que a função receba o id do item mudar o atributo onPress da função renderItem
    const conectPress = async (device) => { 
      try{
        connecting = true;
        await BluetoothSerial.connect(device.id);
        console.log(`Connected to device ${device.name}`);  
        ToastAndroid.show(`Connected to device ${device.name}`, ToastAndroid.SHORT);
      } catch{
          console.log((err.message));
      } 
    }

    const renderEmpty = () => {
      return (
        <VBox>
          <VSeparator/>
          <Body> Não há dispositivos disponíveis</Body>  
        </VBox>
      )
    }

    return (
        <FlatList 
            ListEmptyComponent = {renderEmpty}
            data = {props.data}
            ItemSeparatorComponent = {ListSeparator}
            ListFooterComponent = {ListSeparator}
            ListHeaderComponent = {ListSeparator}
            keyExtractor={item => item.id}
            renderItem={(item) => _renderItem(item)}>
        </FlatList>
    );
}

export const BluetoothEnableButton = (props) =>{

  const [bolEnable, setbolEnable] = useState(false);

  const toggleBluetooth = (props) => {
    setbolEnable(!bolEnable)
    console.log("O bluetooth está ", props.props.value? "ligado":"desligado")
  }


  return(
    <View style={styles.enable}>
      <BodySecondary >Ligar Bluetooth</BodySecondary>
      <Text style={styles.text}></Text>
      <Switch value = {props.value} onValueChange={props.onValueChange}></Switch>
    </View>
  )
};

const styles = StyleSheet.create({
    wrapper: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: '2%',
    },
    enable: {
      flexDirection:'row', 
      marginTop:'5%',
      marginBottom:'2%'
    },
    text:{
      marginLeft:10,
      fontSize:20,
      fontWeight:'bold',
      flex:1
    },
    switch:{
        width:50
    }
})
