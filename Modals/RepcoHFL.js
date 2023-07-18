import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const RepcoHFL = ({ navigation }) => {
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
					Role : Executive - Credit & Sales
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Organization : Repco Home Finance Ltd
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Location : Kottayam, Kerala
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Time Period: Oct 2019 - Jan 2022
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
					Worked as a Credit Analyst for the Branch at Kottayam District in
					Kerala. Proven knowledge and Credit assessment in BFSI Domain.
				</Text>
			</View>
		</View>
	);
};

export default RepcoHFL;

const styles = StyleSheet.create({});
