import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { Image } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";

const Personal = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Personal Details",
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
			<View
				style={{
					backgroundColor: "#f8f8f8",
					borderRadius: 8,
					padding: 15,
					flexDirection: "column",
					marginBottom: 4,
				}}>
				<Text style={{ fontSize: 17, fontWeight: 600 }}>
					Name : Jagadeeshwaran Eswaran
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>DOB : 17-12-1991</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Location : Coimbatore
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Marital Status : Married
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
				<Text style={{ fontSize: 17, fontWeight: 600 }}>Family Members :</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>Wife : Priya,</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>Mother : Mohana,</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>
					Brother : Jagaprakash
				</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>
					Son : Hridhay Pradheesh
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
				<Text style={{ fontSize: 17, fontWeight: 600 }}>Contact Details :</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>
					Phone : 99438-44434 / 9080 444 503
				</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>
					Email : jagadeeshwaran.eswaran@gmail.com
				</Text>
				<Text style={{ fontSize: 14, fontWeight: 400 }}>
					Website : www.jagadeeshwar.net
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
				<Text style={{ fontSize: 17, fontWeight: 600 }}>Hobbies : </Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>
					Sport : Cycling & Swimming
				</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>
					Leisure : Books & Photography
				</Text>
				<Text style={{ fontSize: 16, fontWeight: 400 }}>
					Investment : Market Analysis and Investment Advisory
				</Text>
			</View>
		</SafeAreaView>
	);
};

export default Personal;

const styles = StyleSheet.create({});
