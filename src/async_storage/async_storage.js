import AsyncStorage from '@react-native-async-storage/async-storage';

const CONSTANTS_TOKEN = 'ConstantsList';

export const storeConstants = async (constants) => {
    try {
      await AsyncStorage.setItem(CONSTANTS_TOKEN,JSON.stringify(constants));
    } catch (error) {
      console.log(error);
    }
};

export const getConstants = async () => {
    try {
        const constants = await AsyncStorage.getItem(CONSTANTS_TOKEN);
        return JSON.parse(constants);
    } catch (error) {
        return null;
    }
  };
