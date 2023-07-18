import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Image } from "@rneui/base";

const Profinch = ({ navigation }) => {
	return (
		<View>
			<TouchableOpacity
				style={{
					backgroundColor: "#f8f8f8",
					borderRadius: 8,
					padding: 15,
					flexDirection: "column",
					marginBottom: 4,
				}}>
				<Text style={{ fontSize: 17, fontWeight: 600 }}>
					Role : Inside Sales Executive & React Native Developer
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Organization : Profinch Solutions
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Location : Bengaluru
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Time Period: July 2022 - July 2023
				</Text>
			</TouchableOpacity>

			<View
				style={{
					backgroundColor: "#f8f8f8",
					borderRadius: 8,
					padding: 15,
					flexDirection: "column",
					marginBottom: 4,
				}}>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Collaborated closely with the product development team to design and
					implement a robust Loan Origination System and streamline internal
					credit scoring workflows.
				</Text>
			</View>
			<View
				style={{
					backgroundColor: "#f8f8f8",
					borderRadius: 8,
					padding: 15,
					flexDirection: "column",
					marginBottom: 4,
				}}>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Demonstrated a deep understanding of both banking and technology
					domains, providing valuable insights and recommendations to enhance
					efficiency and profitability.
				</Text>
			</View>
			<View
				style={{
					backgroundColor: "#f8f8f8",
					borderRadius: 8,
					padding: 15,
					flexDirection: "column",
					marginBottom: 4,
				}}>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Inside Sales | Product - LOS & Digital | ReactJS | React Native |
					Quick Learner | Solution Oriented Approach & Progressive
				</Text>
			</View>
		</View>
	);
};

export default Profinch;

const styles = StyleSheet.create({});
