import React from "react";
import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";

import { SIZES, FONTS, COLORS } from "../constants";
import { usersData } from "../data/usersData";

const Home = ({ navigation }) => {
  const [users, setUsers] = React.useState(usersData);

  // render
  function renderItem({ item }) {
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          flexDirection: "row",
          backgroundColor2: "yellow",
          paddingVertical: 4,
        }}
        onPress={() => {
          console.log("user clicked", item.id);
          navigation.navigate("ArticleList", {
            user: item,
          });
        }}>
        <View
          style={{
            // flex: 1,
            width: 100,
            height: 100,
            alignItems: "center",
            justifyContent: "center",
            // backgroundColor: "yellow",
          }}>
          <Image
            source={{ uri: item.avatar }}
            resizeMode="contain"
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
        </View>
        <View
          style={{
            flex: 1.5,
            marginLeft: SIZES.base,
            justifyContent: "center",
          }}>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            {item.name}
          </Text>
          <Text style={{ color: COLORS.gray, ...FONTS.body3 }}>
            {item.title}
          </Text>
          <Text style={{ ...FONTS.h3 }}>{item.price}</Text>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor2: "green" }}>
      <FlatList
        data={users}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default Home;
