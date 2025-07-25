import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import CharacterPage from "./pages/CharacterPage/CharacterPage";
import "./App.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/:CharacterName" element={<CharacterPage />} /> */}
          <Route path="/CharacterName" element={<CharacterPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
