import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Input } from "@rneui/base";
import { auth } from "../firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const LoginPage = ({ navigation }) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const CopyrightYear = new Date().getFullYear();

	useEffect(() => {
		const unsubscribe = auth.onAuthStateChanged((authUser) => {
			if (authUser) {
				navigation.replace("Home");
			}
		});

		return unsubscribe;
	}, []);

	const signIn = () => {
		// alert("Sign in Attempt");

		const auth = getAuth();

		signInWithEmailAndPassword(auth, username, password)
			.then((userCredentials) => {
				alert("Login Success, Please Wait...");
			})
			.catch((err) => {
				alert("Error: " + err.message);
			});
	};

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "space-between",
			}}>
			<View style={styles.container}>
				<Image
					source={require("../assets/React-icon.svg.png")}
					style={styles.image}
				/>

				<View style={styles.inputContainer}>
					<Input
						placeholder="Username"
						value={username}
						onChangeText={(text) => setUsername(text)}
						style={{ borderBottomWidth: 0.8 }}
					/>
					<Input
						placeholder="Password"
						value={password}
						onChangeText={(text) => setPassword(text)}
						style={{ borderBottomWidth: 0.8 }}
						onSubmitEditing={signIn}
					/>
				</View>

				<View style={{ flexDirection: "row", justifyContent: "space-between" }}>
					<Pressable
						style={styles.button}
						onPress={() => {
							signIn();
						}}
						title="Login">
						<Text style={styles.buttonText}>Log In</Text>
					</Pressable>
					<Pressable
						style={styles.button}
						onPress={() => navigation.navigate("Registration")}>
						<Text style={styles.buttonText}>Register</Text>
					</Pressable>
				</View>

				<Pressable onPress={() => navigation.navigate("ForgotPassword")}>
					<Text style={styles.forgotPasswordText}>Forgot Password?</Text>
				</Pressable>
			</View>

			<View
				style={{
					backgroundColor: "#f1f1f1",
					padding: 10,
					alignItems: "center",
				}}>
				<Text>
					Jagadeeshwaran Eswaran {"\u00A9"} {CopyrightYear}
				</Text>
			</View>
		</View>
	);
};

export default LoginPage;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
	},
	image: {
		width: 240,
		height: 210,
		marginVertical: 5,
	},
	inputContainer: {
		width: 300,
	},
	input: {
		padding: 10,
		marginVertical: 10,
		borderColor: "gray",
		borderRadius: 4,
		width: 300,
	},
	button: {
		borderColor: "gray",
		borderWidth: 0.8,
		marginVertical: 10,
		padding: 5,
		width: 120,
		borderRadius: 5,
		marginLeft: 10,
	},
	buttonText: {
		color: "#018f8f",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 17,
	},
	forgotPasswordText: {
		fontSize: 15,
		marginTop: 10,
		color: "gray",
	},
});
