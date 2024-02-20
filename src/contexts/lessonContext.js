"use client";

import { createContext, useContext, useState } from "react";

const LessonContext = createContext(null);

export function LessonProvider({ children }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [length, setLength] = useState("");
  const [summary, setSummary] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState(null);
  const [videoTrailer, setVideoTrailer] = useState(null);
  const [attachedFile, setAttachedFile] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [backupLessons, setBackupLessons] = useState([]);
  const [lessonUpdateId, setLessonUpdateId] = useState([]);
  function resetToDefault() {
    setName("");
    setPrice("");
    setLength("");
    setSummary("");
    setDescription("");
    setCoverImage(null);
    setVideoTrailer(null);
    setAttachedFile(null);
    setLessons([]);
    setBackupLessons([]);
    setLessonUpdateId([]);
  }
  return (
    <LessonContext.Provider
      value={{
        name,
        setName,
        price,
        setPrice,
        length,
        setLength,
        summary,
        setSummary,
        description,
        setDescription,
        coverImage,
        setCoverImage,
        videoTrailer,
        setVideoTrailer,
        attachedFile,
        setAttachedFile,
        lessons,
        setLessons,
        resetToDefault,
        lessonUpdateId,
        setLessonUpdateId,
        backupLessons,
        setBackupLessons,
      }}
    >
      {children}
    </LessonContext.Provider>
  );
}

export function useLessonContext() {
  return useContext(LessonContext);
}
