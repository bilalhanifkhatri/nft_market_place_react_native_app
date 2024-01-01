import { Image, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { assets, COLORS, SHADOWS, SIZES } from "../constants";

const NFTCard = ({ data }) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        backgroundColor: COLORS?.white,
        borderRadius: SIZES?.font,
        marginBottom: SIZES?.extraLarge,
        margin: SIZES?.base,
        ...SHADOWS?.dark,
      }}
    >
      <View
        style={{
          width: "100%",
          height: 250,
        }}
      >
        <Image
          style={{
            width: "100%",
            height: "100%",
            resizeMode: "cover",
            borderTopLeftRadius: SIZES?.font,
            borderTopRightRadius: SIZES?.font,
          }}
          source={{ uri: data.image }}
        />
      </View>
      <Text>NFTCard</Text>
    </View>
  );
};

export default NFTCard;
