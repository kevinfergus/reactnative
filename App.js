import React, { useState } from 'react';
import { useDimensions, useDeviceOrientation } from '@react-native-community/hooks';
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
	const [ welcome, setWelcome ] = useState(true);
	function handlePress() {
		console.log('Button pressed');
	}
	const { landscape } = useDeviceOrientation();
	console.log(welcome);
	return !welcome ? (
		<View
			style={{
				backgroundColor: 'white',
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'center',
				alignItems: 'center'
			}}
		>
			<Button title={'click me'} onPress={() => setWelcome(!welcome)} />
			<View
				style={{
					backgroundColor: 'pink',
					width: 100,
					height: 100,
					top: -20
				}}
			/>
			<View
				style={{
					backgroundColor: 'gold',
					width: 100,
					height: 100
				}}
			/>
		</View>
	) : (
		<View style={{ top: 200 }}>
			<Button title={'click me'} onPress={() => setWelcome(!welcome)} />
		</View>
	);
}

const containerStyle = { backGroundColor: 'orange' };

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		width: '100%',
		height: App.landscape ? '100%' : '30%',
		paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0
	}
});
