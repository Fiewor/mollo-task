import "./App.css";
import { SignUp } from "./components/SignUp";
import { SignIn } from "./components/SignIn";
import { LandingPage } from "./components/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<LandingPage />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route
          path="*"
          element={
            <main
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
  // modify to check if user has signed up previously then render <SignIn /> conditionally
}
export default App;
