import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const ShriramCUF = ({ navigation }) => {
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
					Role : Product Manager - SME &PL
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Organization : SHRIRAM CITY UNION FINANCE
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Location : Tiruppur Area, India
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Time Period: Aug 2017 - Oct 2019
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
					Responsible for SME Business Loan & PL Loan books. Handled a Branch
					Product and a young and energitic team. Over achieving Tergets and
					maintaining asset quality and Overall Branch Management.
				</Text>
			</View>
		</View>
	);
};

export default ShriramCUF;

const styles = StyleSheet.create({});
