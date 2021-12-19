import React, { useState, useEffect, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import { FONTS, SIZES, COLORS } from "../constants";
import {
  loadArticles,
  loadArticlesForCurrentUser,
  likeArticle,
  unlikeArticle,
} from "../services/article-service";
import moment from "moment";

const LoadingView = () => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Loading...</Text>
    </View>
  );
};
const ArticleList = ({ route }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  const loadData = useCallback(async () => {
    let user;
    if (route && route.params) {
      user = route.params.user;
    }

    if (user) {
      let articles;
      if (user.is_me) {
        articles = await loadArticlesForCurrentUser();
      } else {
        articles = await loadArticles(user.id);
      }
      setPosts(articles);
    }

    setIsLoading(false);
  }, [route]);

  async function handleLikePressed(article) {
    if (article.is_liked) {
      await unlikeArticle(article.id);
    } else {
      await likeArticle(article.id);
    }

    await loadData();
  }

  useEffect(() => {
    loadData();
  }, [loadData]);

  function renderItem({ item, idx }) {
    return (
      <View style={{ backgroundColor: COLORS.white }}>
        {/* Header */}
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
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text>{moment(item.date).fromNow()}</Text>
              <Entypo name="dot-single" size={12} />
              <Entypo name="globe" size={10} />
            </View>
          </View>
        </View>

        {/* DESC */}
        <Text style={{ marginTop: 4, paddingHorizontal: 11, ...FONTS.body3 }}>
          {item.description}
        </Text>

        {/* PHOTO */}
        <Image
          resizeMode="cover"
          source={{ uri: item.thumbnail }}
          style={{ height: 200, width: "100%", marginTop: SIZES.base }}
        />

        {/* FOOTER */}
        <View style={{ paddingHorizontal: 11 }}>
          <View
            style={{
              flexDirection: "row",
              paddingVertical: 9,
              alignItems: "center",
            }}>
            <View
              style={{
                backgroundColor: "#1878f3",
                width: 20,
                height: 20,
                borderRadius: 10,
                alignItems: "center",
                justifyContent: "center",
                marginRight: 6,
              }}>
              <AntDesign name="like1" size={12} color={COLORS.white} />
            </View>
            <Text>{item.like_count}</Text>
          </View>
          {!item.author.is_me && (
            <>
              <View style={{ height: 1, backgroundColor: "#F9F9F9" }} />
              <View
                style={{
                  flexDirection: "row",
                  paddingVertical: 9,
                  backgroundColor2: "green",
                }}>
                <TouchableOpacity
                  style={{ flexDirection: "row", alignItems: "center" }}
                  onPress={() => handleLikePressed(item)}>
                  {item.is_liked ? (
                    <AntDesign name="like1" size={20} color="blue" />
                  ) : (
                    <AntDesign name="like2" size={20} />
                  )}
                  <Text style={{ marginLeft: SIZES.base }}>Like</Text>
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>

        <View
          style={{
            height: 9,
            // backgroundColor: "green",
            backgroundColor: "#F0F2F5",
          }}
        />
      </View>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor2: "green" }}>
      {isLoading ? (
        <LoadingView />
      ) : (
        <FlatList
          data={posts}
          keyExtractor={item => `${item.id}`}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
};

export default ArticleList;
