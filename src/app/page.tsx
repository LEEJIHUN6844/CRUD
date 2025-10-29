import TopicList from "@/components/TopicList";
import React from "react";

export default function Homepage() {
  return (
    <div>
      <h1 className="text-3xl font-bold py-2">WebDev Topics</h1>
      <p className="mb-4">MongoDB CRUD Example</p>
      <TopicList />
    </div>
  );
}
