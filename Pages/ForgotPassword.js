import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Button, Input } from "@rneui/base";

const ForgotPassword = ({ navigation }) => {
	const [email, setEmail] = useState("");

	const resetPassword = () => {
		alert("Build in Progress");
		console.log("Reset Password");
	};

	return (
		<View
			style={{
				flex: 1,
				alignItems: "center",
				justifyContent: "space-between",
			}}>
			<View style={styles.container}>
				<View style={styles.inputContainer}>
					<Input
						placeholder="Please provide Registered Email ID"
						value={email}
						onChangeText={(text) => setEmail(text)}
						style={{ borderBottomWidth: 0.8 }}
					/>
					<Input
						placeholder="Enter OTP"
						style={{ borderBottomWidth: 0.8 }}
						onSubmitEditing={resetPassword}
					/>
				</View>

				<View style={{ flexDirection: "row" }}>
					<Button
						style={styles.button}
						raised
						onPress={() => alert("Build in Progress")}>
						<Text style={styles.buttonText}>Reset Password</Text>
					</Button>
				</View>
			</View>
		</View>
	);
};

export default ForgotPassword;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		padding: 20,
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
	},
	buttonText: {
		color: "white",
		textAlign: "center",
		fontWeight: "bold",
		fontSize: 17,
	},
});
