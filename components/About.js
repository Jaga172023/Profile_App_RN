import { Linking, Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "@rneui/base";

const About = ({ navigation }) => {
	const CopyrightYear = new Date().getFullYear();

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "About",
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

	const mySocialMedia = [
		{
			id: 1,
			name: "github",
			url: "https://github.com/Jaga172023",
			image: require("../assets/github.png"),
		},
		{
			id: 2,
			name: "LinkedIn",
			url: "https://www.linkedin.com/in/jagadeeshwaran-eswaran-998904b5/",
			image: require("../assets/linkedin.png"),
		},
		{
			id: 3,
			name: "WhatsApp",
			url: `whatsapp://send?phone=${+919943844434}&text=${encodeURIComponent(
				"Hello!"
			)}`,
			image: require("../assets/whatsapp.png"),
		},
	];

	const handlePress = (item) => {
		Linking.openURL(item.url);
	};

	return (
		<SafeAreaView>
			<View
				style={{
					backgroundColor: "#f8f8f8",
					borderRadius: 8,
					padding: 15,
					flexDirection: "column",
					marginBottom: 4,
				}}>
				<Text style={{ fontSize: 17, fontWeight: 600 }}>My Portfolio App</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>Version : 1.0.0</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>GitHub :</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>
					<Text>
						Jagadeeshwaran Eswaran {"\u00A9"} {CopyrightYear}
					</Text>
				</Text>
			</View>

			{mySocialMedia.map((item) => (
				<View
					key={item.id}
					style={{
						backgroundColor: "#f8f8f8",
						borderRadius: 8,
						padding: 15,
						flexDirection: "row",
						justifyContent: "space-around",
						marginBottom: 4,
					}}>
					<Pressable onPress={() => handlePress(item)}>
						<Image source={item.image} style={{ width: 36, height: 36 }} />
					</Pressable>
				</View>
			))}
		</SafeAreaView>
	);
};

export default About;

const styles = StyleSheet.create({});
