import React, { useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, View } from "react-native";
import { Button, Input, Text } from "@rneui/base";
import { StatusBar } from "expo-status-bar";
import {
	getAuth,
	createUserWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import { StyleSheet } from "react-native";

const RegisterScreen = ({ navigation }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [imageUrl, setImageUrl] = useState("");

	useLayoutEffect(() => {
		navigation.setOptions({
			headerBackTitle: "Back to Login",
		});
	}, [navigation]);

	const register = () => {
		const auth = getAuth();
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				const user = userCredential.user;
				return updateProfile(user, {
					displayName: name,
				});
			})
			.then(() => {
				// Profile updated successfully
				console.log("Profile updated successfully");
				console.log("User displayName:", user.displayName);
				console.log("User email:", user.email);
				console.log("User email:", user.photoURL);
				console.log("Registration successfully");
			})
			.catch((error) => console.log(error.message));
	};

	return (
		<KeyboardAvoidingView behavior="margin" style={styles.container}>
			<StatusBar style="auto" />

			<Text h3 style={{ marginBottom: 50, color: "rgba(0, 0, 0, 0.5)" }}>
				Create a TexToo Account
			</Text>
			<View style={styles.inputContainer}>
				<Input
					placeholder="Full Name"
					autoFocus
					type="text"
					value={name}
					onChangeText={(text) => setName(text)}
				/>
				<Input
					placeholder="Email"
					type="email"
					value={email}
					onChangeText={(text) => setEmail(text)}
				/>
				<Input
					placeholder="Password"
					type="password"
					secureTextEntry
					value={password}
					onChangeText={(text) => setPassword(text)}
				/>
				<Input
					placeholder="Upload Profile Picture (Optional)"
					type="text"
					value={imageUrl}
					onChangeText={(text) => setImageUrl(text)}
					onSubmitEditing={register}
				/>
			</View>
			<Button
				containerStyle={styles.button}
				onPress={register}
				title="Register"
				raised
			/>
			<View style={{ height: 50 }} />
		</KeyboardAvoidingView>
	);
};

export default RegisterScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		justifyContent: "center",
		padding: 10,
		backgroundColor: "whitesmoke",
	},
	button: {
		width: 200,
		marginTop: 10,
	},
	inputContainer: {
		width: 300,
	},
});
