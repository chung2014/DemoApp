import mockClient from "./mock-client";

export const loadArticlesForCurrentUser = async () => {
  const result = await mockClient.loadArticles();
  return result;
};

/**
 * Return the articles list for userId
 * @param {string} userId
 * @returns {Promise<{id: number, title: string, date: string, description: string, thumbnail: string, like_count: number, author: { id: number, name; string, title: string, avatar: string, is_me: boolean}, is_me_liked: boolean}[]>}
 */
export const loadArticles = async userId => {
  const result = await mockClient.loadArticles(userId);
  return result;
};

export const likeArticle = async articleId => {
  await mockClient.likeArticle(articleId);
};

export const unlikeArticle = async articleId => {
  await mockClient.unlikeArticle(articleId);
};

export default {
  loadArticles,
  likeArticle,
  unlikeArticle,
  loadArticlesForCurrentUser,
};
