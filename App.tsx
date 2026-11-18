import { Pressable, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
} from "@expo-google-fonts/inter";
import { AuthProvider } from "./contexts/AuthContext";
import { LoginScreen } from "./screens/LoginScreen";
import { MapScreen } from "./screens/MapScreen";
import { ScootersListScreen } from "./screens/ScootersListScreen";
import { TripScreen } from "./screens/TripScreen";

export type RootStackParamList = {
  Login: undefined;
  Map: undefined;
  ScootersList: undefined;
  Trip: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <AuthProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Map"
            component={MapScreen}
            options={({ navigation }) => ({
              title: "Карта",
              headerBackVisible: false,
              headerRight: () => (
                <Pressable
                  onPress={() => navigation.navigate("ScootersList")}
                  style={{ marginRight: 8 }}
                >
                  <Text
                    style={{
                      color: "#1DB584",
                      fontSize: 16,
                      fontFamily: "Inter_600SemiBold",
                    }}
                  >
                    Все самокаты
                  </Text>
                </Pressable>
              ),
            })}
          />
          <Stack.Screen
            name="ScootersList"
            component={ScootersListScreen}
            options={{ title: "Все самокаты" }}
          />
          <Stack.Screen
            name="Trip"
            component={TripScreen}
            options={{ title: "Поездка" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthProvider>
  );
}
