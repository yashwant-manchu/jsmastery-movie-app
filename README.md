# 📽️ Movie App (React Native + Expo)

A beautiful and responsive mobile movie app built with **Expo**, **TypeScript**, **Tailwind CSS**, and **Appwrite**.  
This app fetches movies from **TMDB API**, tracks trending movies based on user search behavior, and provides a real-world scalable and performant experience following modern UI/UX principles.

---

## ⚙️ Tech Stack

- **Expo** (React Native Framework)
- **React Native**
- **Appwrite** (Backend for trending data logic)
- **TypeScript**
- **Tailwind CSS** (via NativeWind for styling)

---

## 🔥 Features

- **Real-time Data:** Fetch and display real-time movie information from TMDB.
- **Home Page:** Discover trending and featured movies.
- **Search Functionality:** Search for any movie in real time.
- **Popularity Algorithm:** Display trending movies based on engagement.
- **Movie Details Page:** View detailed information about selected movies.
- **Profile & Saved Screens:** Placeholder screens for future enhancements.
- **Modern UI/UX:** Clean, responsive, and attractive design using Tailwind CSS.
- **Code Reusability:** Well-structured, scalable, and modular architecture.

---

## 🚀 Quick Start

### Prerequisites

Ensure you have the following installed:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/)
- npm (comes with Node.js)

### Cloning the Repository

```bash
git clone https://github.com/yashwant-manchu/jsmastery-movie-app.git
cd jsmastery-movie-app
```

### Installation

Install the dependencies:

```bash
npm install
```

### Set Up Environment Variables

Create a `.env` file at the root of the project and add the following keys:

```env
EXPO_PUBLIC_MOVIE_API_KEY=
EXPO_PUBLIC_APPWRITE_PROJECT_ID=
EXPO_PUBLIC_APPWRITE_DATABASE_ID=
EXPO_PUBLIC_APPWRITE_COLLECTION_ID=
```

> Replace the values with your actual credentials from TMDB and Appwrite.

### Running the Project

Start the Expo development server:

```bash
npx expo start
```

- Open the **Expo Go** app on your mobile device.
- Scan the QR code displayed in the terminal or web browser.

---

## 📚 Credits

- [JavaScript Mastery](https://www.jsmastery.pro/) for the amazing tutorial inspiration.
- [TMDB](https://www.themoviedb.org/) for providing the movie data.
- [Appwrite](https://appwrite.io/) for the backend services.

---

## 🛠️ Future Improvements

- Implement authentication for user profiles.
- Add movie saving/favorite functionality.
- Enhance the profile and saved screens.
- Push notifications for trending movies.
- Offline access with caching.
