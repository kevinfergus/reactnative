import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	console.log('App executed');
	let x = 1;
	console.log('testing');
	return (
		<View style={styles.container}>
			<Text>Sell sell sell</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
