import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Image,
  SafeAreaView,
} from "react-native";

import { SIZES, FONTS, COLORS } from "../constants";
import { loadData } from "../services/user-service";

const Home = ({ navigation }) => {
  const [users, setUsers] = useState([]);

  async function loadUsersAndFollowers() {
    const data = await loadData();

    console.log("home data", data);
    setUsers(data);
  }

  useEffect(() => {
    loadUsersAndFollowers();
  }, []);

  // render
  function renderItem({ item, idx }) {
    console.log("renderItem", idx, item);
    return (
      <TouchableOpacity
        style={{
          flex: 1,
          paddingVertical: 8,
          paddingHorizontal: 9,
          justifyContent: "center",
        }}
        onPress={() => {
          console.log("user clicked", item.id);
          navigation.navigate("ArticleList", {
            user: item,
          });
        }}>
        <View
          style={{
            flexDirection: "row",
            backgroundColor: COLORS.white,
            borderRadius: SIZES.radius,
          }}>
          <View
            style={{
              width: 80,
              height: 80,
              alignItems: "center",
              justifyContent: "center",
            }}>
            <Image
              source={{ uri: item.avatar }}
              resizeMode="contain"
              style={{ width: 40, height: 40, borderRadius: 20 }}
            />
          </View>
          <View
            style={{
              flex: 1.5,
              marginLeft: SIZES.base,
              justifyContent: "center",
            }}>
            <Text style={{ ...FONTS.h3 }}>{item.name}</Text>
            <Text style={{ ...FONTS.body3 }}>{item.title}</Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={users}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
    </SafeAreaView>
  );
};

export default Home;
