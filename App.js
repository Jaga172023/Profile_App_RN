import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./Pages/LoginPage";
import Registration from "./Pages/Registration";
import HomePage from "./Pages/HomePage";
import ForgotPassword from "./Pages/ForgotPassword";
import Education from "./components/Education";
import Professional from "./components/Professional";
import Personal from "./components/Personal";
import About from "./components/About";
import College from "./Modals/College";
import Profinch from "./Modals/Profinch";
import RepcoHFL from "./Modals/RepcoHFL";
import ShriramCUF from "./Modals/ShriramCUF";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Screen
					options={{ headerShown: false }}
					name="Login"
					component={LoginPage}
				/>
				<Stack.Screen name="Registration" component={Registration} />
				<Stack.Screen name="ForgotPassword" component={ForgotPassword} />
				<Stack.Screen name="Home" component={HomePage} />
				<Stack.Screen name="Education" component={Education} />
				<Stack.Screen name="Professional" component={Professional} />
				<Stack.Screen name="Personal" component={Personal} />
				<Stack.Screen name="About" component={About} />
				<Stack.Screen name="College" component={College} />
				<Stack.Screen name="Profinch" component={Profinch} />
				<Stack.Screen name="RepcoHFL" component={RepcoHFL} />
				<Stack.Screen name="ShriramCUF" component={ShriramCUF} />
			</Stack.Navigator>
		</NavigationContainer>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
