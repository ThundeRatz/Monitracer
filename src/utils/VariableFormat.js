/**
 * @file VariableFormat.js
 *
 * @brief format variable functions implementations
 *
 * @date 06/2022
 */

export const hex_to_ascii = (str1) => {
	let hex  = str1.toString();
	let str = '';
	for (let n = 0; n < hex.length; n += 2) {
		str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
	}
	return str;
 }
 
export const int_to_hex = (int1) => {
	let yourNumberHex = parseInt(int1, 10).toString(16);
	if(yourNumberHex.length == 1){
		yourNumberHex = '0' + yourNumberHex;
	}
	return yourNumberHex;
}

export const int_to_ascii = (int1) => {
    let yourNumberHex = parseInt(int1, 10).toString(16);
    return hex_to_ascii(yourNumberHex);
}
