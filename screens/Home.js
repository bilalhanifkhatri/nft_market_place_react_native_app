import { Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { COLORS, NFTData } from "../constants";
import { FocusedStatusBar, HomeHeader, NFTCard } from "../components";
import { FlatList } from "react-native";
const Home = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS?.primary} />
      <View style={{ flex: 1 }}>
        <View
          style={{
            zIndex: 0,
          }}
        >
          <FlatList
            showsVerticalScrollIndicator={false}
            data={NFTData}
            renderItem={({ item }) => <NFTCard data={item} />}
            keyExtractor={(item) => item.id.toString()}
            ListHeaderComponent={<HomeHeader />}
          />
          <View
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              zIndex: -1,
            }}
          >
            <View
              style={{
                backgroundColor: COLORS?.primary,
                height: 300,
              }}
            ></View>
            <View
              style={{
                backgroundColor: COLORS?.white,
                flex: 1,
              }}
            ></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
