import { Routes, Route } from "react-router-dom";
import CharactersList from "./components/CharactersList";
import Character from "./components/Character";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/:id" element={<Character />} />
      </Routes>
    </div>
  );
}
