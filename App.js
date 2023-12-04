import { FavoriteProductsProvider } from "./context/context";
import PhoneContextProvider from "./store/phone-context";
import AuthContextProvider from "./store/auth-context";
import Navigation from "./navigation/AuthStack";
import { SafeAreaView } from "react-native";

export default function App() {
  return (
    <AuthContextProvider>
      <PhoneContextProvider>
        <FavoriteProductsProvider>
          <Navigation />
        </FavoriteProductsProvider>
      </PhoneContextProvider>
    </AuthContextProvider>
  );
}
