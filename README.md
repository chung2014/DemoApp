# React Native Demo App

This project aims to provide a demo for react-native application.

## Features
- [x] List of users 
- [x] List of Articles

## Prerequisites

- [Node.js > 12](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 13](https://developer.apple.com/xcode)
- [Cocoapods 1.11.2](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

For more info please go to https://reactnative.dev/docs/environment-setup

## Base dependencies

- [react-navigation](https://reactnavigation.org/) navigation library.
- [react-native-vector-icons](https://github.com/oblador/react-native-vector-icons) Icons for React Native.
- [@react-native-async-storage/async-storage](https://github.com/react-native-async-storage/async-storage) as storage solution for mock local data.
- [momentjs](https://github.com/moment/moment) date library for formatting dates.


## Description

The app use FlatList to render users and articles, which is a UI component for optimize the performance for rendering repeated UI elements.

## Data structure for mock data

The mock data is loaded into async storage when the app first launch. Once the mock data is loaded into async storage, later the app will continue to interact with data persisted in async storage instead of the initial load. In order to reset the data, please remove the app and install it again.

For editing the mock user data, please edit on `mockdata/usersData.js`.

For editing the mock article data, please edit on `mockdata/postsData.js`.

```javascript
// user object
{
  id: 8,
  name: "Peter Parker",
  title: "System Analyst",
  avatar: "https://i.pravatar.cc/150?u=8",
  is_me: false,
}

// article object
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
}
```