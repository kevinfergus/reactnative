import React from 'react';
import { useDeminsions } from '@react-native-community/hooks';
import {
	Dimensions,
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	Image,
	TouchableWithoutFeedback,
	TouchableOpacity,
	TouchableNativeFeedback,
	Button,
	Alert,
	Platform,
	StatusBar
} from 'react-native';

export default function App() {
	console.log(useDimensions());
	function handlePress() {
		console.log('Button pressed');
	}
	return (
		<SafeAreaView style={styles.container}>
			<Button
				color="orange"
				title="Click Me"
				onPress={() => Alert.alert('My titlw', '"My massage', [ { text: '1' }, { text: '2' } ])}
			/>
		</SafeAreaView>
	);
}

const containerStyle = { backGroundColor: 'orange' };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		width: '100%',
		height: '30%',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	}
});
