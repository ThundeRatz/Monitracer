/**
 * @file ConstantsPage.js
 *
 * @brief Page to send and receive constants
 *
 * @author Lucas Guedes <lucas.guedes@thunderatz.org>
 * @author Vanderson Santos <vanderson.santos@thunderatz.org>
 *
 * @date 06/2022
 */

import React, {useState, useEffect} from 'react';
import {
    SafeAreaView,
    ScrollView,
    StyleSheet,
    View,
    TextInput,
    Dimensions,
} from 'react-native';
import {Body, H3} from '../components/typography';
import {COLORS} from '../components/colors';
import {
    PrimaryButton,
    SecondaryButton,
    ActionButton,
    RedActionButton,
    GreenActionButton,
} from '../components/button';
import {ROTATION} from '../components/rotation.js';
import {PROPOTION} from '../components/trigonometry';
import {
    GetConstantsList,
    GetConstantsLabels,
} from '../server_communication/constants_api';
import {BTPostData,BTPostHex} from '../bt_communication/bt_data_sender';
import { hex_to_ascii, int_to_ascii, int_to_hex } from '../utils/VariableFormat';
import { constants_default_values } from '../utils/DefaultValues';

export const ConstantsPage = props => {
    const USE_ROBONITOR_PROTOCOL = true;

    const [constantList, setConstantList] = useState(constants_default_values);

    useEffect(() => {
        async function getConstant() {
            const constant = await GetConstantsLabels();
            constant = constant == null ? constants_default_values : constant;
            setConstantList(constant);
        }
        getConstant();
    }, []);

    const ConstantInput = ({constant}) => {
        // useState[]
        return (
            <View style={styles.tableCell}>
                <View style={styles.textView}>
                    <Body>{constant.description}</Body>
                </View>

                <View style={styles.textInputView}>
                    <TextInput
                        style={styles.textInput}
                        onChangeText={e => {
                            // (constant.value = e);
                            var foundIndex = constantList.findIndex(
                                x => x.id == constant.id,
                            );
                            // console.log(constantList[foundIndex].value);
                            constantList[foundIndex].value = e;
                        }}
                    />
                </View>
            </View>
        );
    };

    const enviarButtonHandler = () => {
        console.log("enviarButtonHandler");
        constantList.forEach(({id,description,value}) => {
            if(USE_ROBONITOR_PROTOCOL){
                sendOneDataRobonitor(id,value);
            } else {
                sendOneDataMonitracer(id,value);
            }
        })
    };

    const salvarButtonHandler = () => {
        console.log("salvarButtonHandler");
    };

    const clearButtonHandler = () => {
        console.log("clearButtonHandler");
        for (const v of constantList) {
            v.value = 0
        }
    }

    const runButtonHandler = () => {
        if(USE_ROBONITOR_PROTOCOL){
            let data_msg = "c9000000";
            BTPostHex(data_msg)
        } else {
            sendOneDataMonitracer(201,"00");
        }
    };

    const stopButtonHandler = () => {
        if(USE_ROBONITOR_PROTOCOL){
            let data_msg = "c8000000";
            BTPostHex(data_msg)
        } else {
            sendOneDataMonitracer(200,"00");
        }
    };

    const sendOneDataRobonitor = (id, value) => {
        let data_msg = '';

        let new_id = (id-1);
        data_msg += int_to_hex(parseInt(new_id/3));
        data_msg += int_to_hex(new_id%3);
        let data_int = parseInt(value,10);
        data_msg += int_to_hex(parseInt(data_int/256))
        data_msg += int_to_hex(data_int%256)

        BTPostHex(data_msg)

    }

    const sendOneDataMonitracer = (id, value) => {
        let data_msg = '';
        // set id
        data_msg += int_to_hex(id);

        // set data to send
        let data_int = parseInt(value,10);
        data_msg += int_to_hex(parseInt(data_int/256))
        data_msg += int_to_hex(data_int%256)

        BTPostHex(data_msg)
    }

    //Server constants simulation
    let constantTypes = constantList;

    const arrayToMatrix = () => {
        let constantCouples = [];

        constantTypes.forEach((element, index, array) => {
            if (index % 3 == 0) {
                if (index == array.length - 1) {
                    constantCouples.push([array[index], null, null]);
                } else if (index == array.length - 2) {
                    constantCouples.push([
                        array[index],
                        array[index + 1],
                        null,
                    ]);
                } else {
                    constantCouples.push([
                        array[index],
                        array[index + 1],
                        array[index + 2],
                    ]);
                }
            }
        });

        return constantCouples;
    };

    let constantCouples = arrayToMatrix(constantTypes);

    return (
        <SafeAreaView style={styles.container}>
            <View backgroundColor={COLORS.gray4}>
                <View style={ROTATION.OitoEMeia}>
                    <View style={styles.titleContainer} paddingLeft={20}>
                        <H3 color="white">SETUP</H3>
                    </View>
                </View>
            </View>

            {/* Dinamic constants table*/}
            <View style={styles.constantsInputContainer}>
                <ScrollView>
                    {constantCouples.map((element, index) => {
                        return (
                            <View style={styles.tableRow} key={index}>
                                <ConstantInput constant={element[0]} />
                                <ConstantInput constant={element[1]} />
                                <ConstantInput constant={element[2]} />
                            </View>
                        );
                    })}
                </ScrollView>
            </View>

            <View style={styles.buttonsContainer}>
                <View style={styles.buttonRow}>
                    <View style={styles.buttonCell}>
                        <ActionButton title="Enviar" onPress={enviarButtonHandler} />
                    </View>
                    <View style={styles.buttonCell}>
                        <GreenActionButton title="Salvar" onPress={salvarButtonHandler} />
                    </View>
                    <View style={styles.buttonCell}>
                        <RedActionButton title="Clear" onPress={clearButtonHandler} />
                    </View>
                </View>
                <View style={styles.buttonRow}>
                    <View style={styles.buttonCell}>
                        <PrimaryButton title="RUN"  onPress={runButtonHandler}/>
                    </View>
                    <View style={styles.buttonCell}>
                        <SecondaryButton
                            title="STOP"
                            onPress={stopButtonHandler}
                        />
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
    constantsInputContainer: {
        flex: 1.5,
        backgroundColor: COLORS.gray4,
    },
    titleContainer: {
        backgroundColor: COLORS.thunderBlue,
        width: PROPOTION.width(Dimensions.get('window').width),
        top: PROPOTION.top(Dimensions.get('window').width),
        height: PROPOTION.height(Dimensions.get('window').width),
        left: PROPOTION.left(Dimensions.get('window').width),
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: COLORS.gray5,
    },
    tableRow: {
        flexDirection: 'row',
    },
    buttonRow: {
        flexDirection: 'row',
        paddingVertical: 20,
    },
    tableCell: {
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        borderLeftColor: COLORS.gray3,
        borderLeftWidth: 1,
        paddingLeft: 5,
        justifyContent: 'center',
    },
    buttonCell: {
        flexDirection: 'row',
        flex: 1,
        padding: 1,
        justifyContent: 'center',
    },
    textView: {
        flex: 3,
    },
    textInputView: {
        flex: 2,
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
    },
    textInput: {
        backgroundColor: 'white',
        borderRadius: 8,
        flex: 1,
        height: 25,
        fontSize: 15,
        paddingVertical: 0,
        textAlign: 'center',
    },
});
