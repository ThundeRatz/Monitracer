import React, {useState} from 'react';
import {
    FlatList,
    View,
    StyleSheet,
    Switch
} from 'react-native';

import {Header, CellContainer, CellTitleContainer, VBox, VSeparator, ListSeparator} from './cell'
import {H1,H2,H3,Body,BodySecondary} from './typography'
import {PrimaryButton, SecondaryButton} from './button'

export const BTList = (props) => {
    const renderEmpty = () => {
        return (
          <VBox>
            <VSeparator/>
            <Body> Não há dispositivos disponíveis</Body>  
          </VBox>
        )
      }
    
    //se quiser que a função receba o id do item mudar o atributo onPress da função renderItem
    const conectPress = (name) => { 
      console.log("Conectando ao " + name)
    }

    const renderItem = ({item}) => {
         return(
          <View style={styles.wrapper}> 
            <View>
              <H3> {item.name} </H3>
              <BodySecondary> {item.id}</BodySecondary>      
            </View>
            <View>
              <PrimaryButton title="conectar" onPress={() => conectPress(item.name)}/>    
            </View>                               
          </View>
        ) 
      }

    return (
        <FlatList 
            ListEmptyComponent = {renderEmpty}
            data = {props.data}
            ItemSeparatorComponent = {ListSeparator}
            ListFooterComponent = {ListSeparator}
            ListHeaderComponent = {ListSeparator}
            renderItem = {renderItem}> 
        </FlatList>
    );
}

export const BluetoothEnableButton = () =>{

  const [bolEnable, setbolEnable] = useState(false);

  const toggleBluetooth = () => {
    setbolEnable(!bolEnable)
    console.log("O bluetooth está ", bolEnable? "ligado":"desligado")
  }

  return(
    <View style={styles.enable}>
      <BodySecondary>Ligar Bluetooth</BodySecondary>
      <Switch onValueChange={toggleBluetooth}></Switch>
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
    }
})
