import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Quiz from "./pages/Quiz";
import User from "./types/User";

function App() {
  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    var value = localStorage.getItem("user");
    if (value) {
      const user: User = JSON.parse(value);
      setUser(user);
    }

    setLoading(false);
  }, [setUser]);

  const loginHandler = (username: string) => {
    localStorage.setItem("user", JSON.stringify({ username }));
    setUser({ username });
  };

  if (loading) return <> loading... </>;
  return (
    <div className="App">
      <Layout username={user?.username}>
        {!user ? (
          <Routes>
            <Route path="/" element={<Login loginHandler={loginHandler} />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quiz/:name" element={<Quiz />} />{" "}
            <Route path="*" element={<Home />} />
          </Routes>
        )}
      </Layout>
    </div>
  );
}

export default App;
