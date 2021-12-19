import AsyncStorage from "@react-native-async-storage/async-storage";
import { postsData } from "../mockdata/postsData";
import { usersData } from "../mockdata/usersData";

const getData = async (key, defaultValue) => {
  const value = await AsyncStorage.getItem(key);

  if (value == null) {
    const jsonString = JSON.stringify(defaultValue);
    await AsyncStorage.setItem(key, jsonString);
  }

  return value ? JSON.parse(value) : defaultValue;
};

const loadUserAndFollowers = async () => {
  let users = await getData("users", usersData);
  return users;
};

const loadArticles = async userId => {
  const articles = await getData("articles", postsData);

  if (!userId) {
    return articles;
  } else {
    return articles.filter(el => el.author.id === userId);
  }
};

const likeArticle = async articleId => {
  let articles = await getData("articles", postsData);

  articles = articles.map(item => {
    if (item.id === articleId && item.is_liked === false) {
      return {
        ...item,
        is_liked: true,
        like_count: item.like_count + 1,
      };
    }

    return item;
  });

  await AsyncStorage.setItem("articles", JSON.stringify(articles));
};

const unlikeArticle = async articleId => {
  let articles = await getData("articles", postsData);

  articles = articles.map(item => {
    if (item.id === articleId && item.is_liked) {
      return {
        ...item,
        is_liked: false,
        like_count: item.like_count - 1,
      };
    }

    return item;
  });

  await AsyncStorage.setItem("articles", JSON.stringify(articles));
};

export default {
  loadArticles,
  loadUserAndFollowers,
  likeArticle,
  unlikeArticle,
};
