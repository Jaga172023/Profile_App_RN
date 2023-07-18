import {
	Pressable,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import React, { useLayoutEffect } from "react";
import { Image } from "@rneui/base";
import { SafeAreaView } from "react-native-safe-area-context";

const Professional = ({ navigation }) => {
	useLayoutEffect(() => {
		navigation.setOptions({
			title: "Professional Details",
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

	const professionalDet = [
		{
			id: 1,
			organization: "Profinch Solutions",
			location: "Bengaluru",
			jobRole: "Inside Sales Executive",
			timeperiod: "July 2022 - July 2023",
			duration: "1 yr 1 mo",
			url: "Profinch",
		},
		{
			id: 2,
			organization: "Repco Home Finance Ltd",
			location: "Kottayam, Kerala",
			jobRole: "Executive - Sales & Credit Ops",
			timeperiod: "Aug 2019 - Jan 2022",
			duration: "2 yrs 4 mos",
			url: "RepcoHFL",
		},
		{
			id: 3,
			organization: "Shriram City Union Finance Ltd",
			location: "Avinashi, Tiruppur",
			jobRole: "Product Manager - SME & Personal Loan",
			timeperiod: "Aug 2017 - Oct 2019",
			duration: "2 yrs 3 mos",
			url: "ShriramCUF",
		},
		{
			id: 4,
			organization: "ICICI Bank Ltd",
			location: "Thiruvarur, Tamilnadu",
			jobRole: "Senior Officer - Branch Operations",
			timeperiod: "Aug 2015 - Aug 2017",
			duration: "2 yrs 1 mo",
			url: "ShriramCUF",
		},
	];

	return (
		<SafeAreaView>
			{professionalDet.map((item) => (
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
						Role : {item.jobRole}
					</Text>
					<Text style={{ fontSize: 14, fontWeight: 400 }}>
						Organization : {item.organization}
					</Text>
					<Text style={{ fontSize: 14, fontWeight: 400 }}>
						Location : {item.location}
					</Text>
					<Text style={{ fontSize: 14, fontWeight: 400 }}>
						Time Period: {item.timeperiod}, Duration :{""}
						{item.duration}
					</Text>
				</TouchableOpacity>
			))}
		</SafeAreaView>
	);
};

export default Professional;

const styles = StyleSheet.create({});
