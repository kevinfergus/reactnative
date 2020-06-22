import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';

export default function App() {
	function handlePress() {
		console.log('Button pressed');
	}
	return (
		<SafeAreaView style={styles.container}>
			<Text onPress={handlePress()}>I like to app</Text>
			<Image
				source={{
					width: 200,
					height: 300,
					uri: 'https://i.kym-cdn.com/entries/icons/original/000/028/539/DyqSKoaX4AATc2G.jpg'
				}}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'dodgerblue',
		alignItems: 'center',
		justifyContent: 'center'
	}
});
