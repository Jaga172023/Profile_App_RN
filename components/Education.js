import {
	Linking,
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { Image } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";

const Education = ({ navigation }) => {
	const educationQ = [
		{
			id: 1,
			instuition: "NIIT Institute of Finance Banking and Insurance Training",
			location: "Coimbatore",
			course: "Post Graduate Diploma in Banking Operations",
			passYear: "2015",
			percentage: "NA",
			url: "College",
		},
		{
			id: 2,
			instuition: "Nehru Institute of Engineering and Technology",
			location: "Coimbatore",
			course: "Bechelor of Electrical and Electronics Engineering",
			passYear: "2015",
			percentage: "CGPA - 7.3",
			url: "College",
		},
		{
			id: 3,
			instuition: "V.K Government Higher Secondary Scool",
			location: "Tiruppur",
			course: "Heigher Secondary Education",
			passYear: "2010",
			percentage: "78 %",
			url: "College",
		},
		{
			id: 4,
			instuition: "V.K Government Higher Secondary Scool",
			location: "Tiruppur",
			course: "SSLC",
			passYear: "2008",
			percentage: "85 %",
			url: "College",
		},
	];

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Education Details",
			headerTitleStyle: { Text: "Gray" },
			headerTintColor: "black",
			headerLeft: () => (
				<View style={{ marginLeft: 15, marginRight: 15 }}>
					<Pressable
						onPress={() => navigation.navigate("Home")}
						activeOpacity={0.3}>
						<Image
							source={require("../assets/back.png")}
							style={{ width: 25, height: 25 }}
						/>
					</Pressable>
				</View>
			),
		});
	}, [navigation]);

	return (
		<SafeAreaView>
			{educationQ.map((item) => (
				<TouchableOpacity
					key={item.id}
					onPress={() => {
						navigation.navigate(item.url);
					}}
					style={{
						backgroundColor: "#f8f8f8",
						borderRadius: 8,
						padding: 15,
						flexDirection: "column",
						marginBottom: 4,
					}}>
					<Text style={{ fontSize: 17, fontWeight: 600 }}>
						Course : {item.course}
					</Text>
					<Text style={{ fontSize: 14, fontWeight: 400 }}>
						Institute : {item.instuition}
					</Text>
					<Text style={{ fontSize: 14, fontWeight: 400 }}>
						Location : {item.location}
					</Text>
					<Text style={{ fontSize: 14, fontWeight: 400 }}>
						Scored: {item.percentage}, Passed Out :{""}
						{item.passYear}
					</Text>
				</TouchableOpacity>
			))}
		</SafeAreaView>
	);
};

export default Education;

const styles = StyleSheet.create({});
