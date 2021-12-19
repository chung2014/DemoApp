const postsData = [
  {
    id: 1,
    title: "Test Post 1",
    date: "2021-12-17T18:13:33.333Z",
    description:
      "This is some sample text message. I hope this line can be show too.",
    thumbnail: "https://via.placeholder.com/150/92c952",
    like_count: 123,
    author: {
      id: 1,
      name: "Alice Chan",
      title: "HR recruiter",
      avatar: "https://i.pravatar.cc/150?u=1",
      is_me: false,
    },
    is_liked: false,
  },
  {
    id: 2,
    title: "Test Post 2",
    date: "2021-12-16T00:13:33.333Z",
    description: "This one is short.",
    thumbnail: "https://via.placeholder.com/150/771796",
    like_count: 5,
    author: {
      id: 2,
      name: "Terry Wong",
      title: "Developer",
      avatar: "https://i.pravatar.cc/150?u=2",
      is_me: true,
    },
    is_liked: false,
  },
  {
    id: 3,
    title: "Test Post 3",
    date: "2021-12-10T15:13:33.333Z",
    description: "This is test post message 1234 5678",
    thumbnail: "https://via.placeholder.com/150/b0f7cc",
    like_count: 200,
    author: {
      id: 3,
      name: "Mimi Lam",
      title: "Project Manager",
      avatar: "https://i.pravatar.cc/150?u=3",
      is_me: false,
    },
    is_liked: false,
  },
  {
    id: 4,
    title: "Test Post 4",
    date: "2021-11-20T15:13:33.333Z",
    description: "Another post by mimi.",
    thumbnail: "https://via.placeholder.com/150/1fe46f",
    like_count: 500,
    author: {
      id: 3,
      name: "Mimi Lam",
      title: "Project Manager",
      avatar: "https://i.pravatar.cc/150?u=3",
      is_me: false,
    },
    is_liked: false,
  },
];

export { postsData };
