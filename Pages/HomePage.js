import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, Image, ListItem } from "@rneui/base";
import { auth } from "../firebase";

const HomePage = ({ navigation }) => {
	const HomeScreenList = [
		{
			id: 1,
			name: "Education",
			image: require("../assets/book-stack.png"),
			url: "Education",
		},
		{
			id: 2,
			name: "Professional",
			image: require("../assets/briefcase.png"),
			url: "Professional",
		},
		{
			id: 3,
			name: "Personal",
			image: require("../assets/man.png"),
			url: "Personal",
		},
		{
			id: 4,
			name: "About",
			image: require("../assets/info.png"),
			url: "About",
		},
	];

	const signOutUser = () => {
		auth
			.signOut()
			.then(() => {
				navigation.replace("Login");
			})
			.then(() => {
				console.log("Signing out...");
				alert("Signing out...");
			});
	};

	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Home Page",
			headerTitleStyle: { Text: "Gray" },
			headerTintColor: "black",
			headerLeft: () => (
				<View style={{ margin: 15 }}>
					<Pressable onPress={signOutUser} activeOpacity={0.3}>
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
			{HomeScreenList.map((item) => (
				<View
					key={item.id}
					style={{
						backgroundColor: "#f8f8f8",
						borderRadius: 8,
						padding: 10,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						margin: 14,
					}}>
					<Image source={item.image} style={{ width: 45, height: 45 }} />
					<Text style={{ fontSize: 17, fontWeight: 600 }}>{item.name}</Text>
					<Pressable onPress={() => navigation.navigate(item.url)}>
						<Image
							source={require("../assets/right.png")}
							style={{ width: 25, height: 25 }}
						/>
					</Pressable>
				</View>
			))}
		</SafeAreaView>
	);
};

export default HomePage;

const styles = StyleSheet.create({
	container: {
		flexDirection: "column",
		width: "95%",
	},
});
