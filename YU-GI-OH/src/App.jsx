import "./App.css";
import React from "react";

import Home_Page from "./pages/Home_Page";
import All_Cards from "./pages/All_Cards";
import About from "./pages/About";
import Layout from "./conponents/Layout";
import FormPage from "./pages/FormPage";
import QuestionName from "./pages/QuestionName";
import QuestionAttribute from "./pages/QuestionAttribute";
import QuestionRace from "./pages/QuestionRace";
import QuestionAttack from "./pages/QuestionAttack";
import QuestionDefense from "./pages/QuestionDefense";
import QuestionDescription from "./pages/QuestionDescription";
import DescriptionCard from "./pages/DescriptionCard";
import Oopsies from "./pages/Oopsies";
import { Route, Routes } from "react-router-dom";
import QuestionImage from "./pages/QuestionImage";
import ConfirmationForm from "./pages/ConfirmationForm";
import QuestionType from "./pages/QuestionType";
import QuestionLevel from "./pages/QuestionLevel";


function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home_Page />} />
          <Route path="/all-cards" element={<All_Cards />} />
          <Route path="/all-cards/:id" element={<DescriptionCard />} />
          <Route path="/create-card" element={<FormPage />}>
            <Route path="name" element={<QuestionName />} />
            <Route path="level" element={<QuestionLevel />} />
            <Route path="attribute" element={<QuestionAttribute />} />
            <Route path="race" element={<QuestionRace />} />
            <Route path="attack" element={<QuestionAttack />} />
            <Route path="defense" element={<QuestionDefense />} />
            <Route path="type" element={<QuestionType />} />
            <Route path="description" element={<QuestionDescription />} />
            <Route path="image-monster" element={<QuestionImage />} />
            <Route
              path="your-monster-is-created"
              element={<ConfirmationForm />}
            />
          </Route>
          <Route path="/about" element={<About />} />
        </Route>
        <Route path="*" element={<Oopsies />} />
      </Routes>
    </>
  );
}

export default App;
