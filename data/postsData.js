const postsData = [
  {
    id: 1,
    title: "Test Post 1",
    date: "2021-12-10T18:13:33.333Z",
    description:
      "This is some sample text message. I hope this line can be show too.",
    thumbnail: "https://via.placeholder.com/150/92c952",
    like_count: 123,
    author: {
      id: 2,
      name: "Terry Wong",
      title: "Developer",
      avatar: "https://i.pravatar.cc/150?u=2",
    },
  },
  {
    id: 2,
    title: "Test Post 2",
    date: "2021-12-17T18:13:33.333Z",
    description: "This one is short.",
    thumbnail: "https://via.placeholder.com/150/771796",
    like_count: 5,
    author: {
      id: 1,
      name: "Alice Chan",
      title: "HR recruiter",
      avatar: "https://i.pravatar.cc/150?u=1",
    },
  },
];

export { postsData };
