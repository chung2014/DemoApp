import mockClient from "./mock-client";

export const loadData = async () => {
  const users = await mockClient.loadUserAndFollowers();
  return users;
};
