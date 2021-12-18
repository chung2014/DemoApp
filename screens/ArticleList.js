import React from "react";
import { View, Text, FlatList, Image } from "react-native";
import { FONTS, SIZES } from "../constants";
import { postsData } from "../data/postsData";

const ArticleList = () => {
  const [posts, setPosts] = React.useState(postsData);

  function renderItem({ item }) {
    return (
      <View style={{ height: 120, backgroundColor2: "green" }}>
        <View
          style={{
            flexDirection: "row",
            paddingLeft: SIZES.base,
            paddingTop: SIZES.base,
          }}>
          <Image
            source={{ uri: item.author.avatar }}
            resizeMode="contain"
            style={{ width: 40, height: 40, borderRadius: 20 }}
          />
          <View style={{ marginLeft: SIZES.base }}>
            <Text style={{ ...FONTS.h4 }}>{item.author.name}</Text>
            <View style={{ flexDirection: "row" }}>
              <Text>9m</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ flex: 1, backgroundColor2: "green" }}>
      <FlatList
        data={posts}
        keyExtractor={item => `${item.id}`}
        renderItem={renderItem}
      />
    </View>
  );
};

export default ArticleList;
