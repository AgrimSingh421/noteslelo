import "./App.css";

import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";

import Subjects from "./subjects/Subjects";

import PartsEnglish from "./subjects/english/PartsEnglish";
import PartsHindi from "./subjects/hindi/PartsHindi";
import PartsSS from "./subjects/ss/PartsSS";

import ChaptersComputer from "./subjects/computer/ChaptersComputer";
import ChaptersEnglishI from "./subjects/english/englishI/ChaptersEnglishI";
import ChaptersEnglishII from "./subjects/english/englishII/ChaptersEnglishII";
import ChaptersHindiI from "./subjects/hindi/hindiI/ChaptersHindiI";
import ChaptersHindiII from "./subjects/hindi/hindiII/ChaptersHindiII";
import ChaptersScience from "./subjects/science/ChaptersScience";
import ChaptersHistory from "./subjects/ss/history/ChaptersHistory";
import ChaptersGeography from "./subjects/ss/geography/ChaptersGeography";
import ChaptersCivics from "./subjects/ss/civics/ChaptersCivics";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />

        <Route path="/subjects/english/parts" element={<PartsEnglish />} />
        <Route path="/subjects/hindi/parts" element={<PartsHindi />} />
        <Route path="/subjects/ss/parts" element={<PartsSS />} />

        <Route path="/subjects/computer/chapters" element={<ChaptersComputer />} />
        <Route path="/subjects/english/englishI/chapters" element={<ChaptersEnglishI />} />
        <Route path="/subjects/english/englishII/chapters" element={<ChaptersEnglishII />} />
        <Route path="/subjects/hindi/hindiI/chapters" element={<ChaptersHindiI />} />
        <Route path="/subjects/hindi/hindiII/chapters" element={<ChaptersHindiII />} />
        <Route path="/subjects/science/chapters" element={<ChaptersScience />} />
        <Route path="/subjects/ss/history/chapters" element={<ChaptersHistory />} />
        <Route path="/subjects/ss/geography/chapters" element={<ChaptersGeography />} />
        <Route path="/subjects/ss/civics/chapters" element={<ChaptersCivics />} />
      </Routes>
      <br />
      <br />
      <br />
      <br />

      <Footer />
    </div>
  );
}

export default App;
