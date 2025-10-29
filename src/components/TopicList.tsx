"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

interface Topic {
  id: string;
  title: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export default function TopicList() {
  const [topic, setTopic] = useState<Topic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchTopic() {
      try {
        const res = await fetch("/api/topics");
        if (!res.ok) {
          throw new Error("Failed to fetch topics");
        }
        const data = await res.json();
        setTopic(data.topics);
      } catch (error) {
        console.error("Error loading topics: ", error);
        setError("Failed to load topics");
      } finally {
        setLoading(false);
      }
    }
    fetchTopic();
  }, []);

  if (loading) return <p>Loading topics...</p>;
  if (error) return <p>Error: {error}</p>;
  if (topic.length === 0) return <p>No topics found.</p>;

  return (
    <>
      {topic.map((topic: Topic) => (
        <div
          key={topic.id}
          className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start"
        >
          <div>
            <h2 className="text-2xl font-bold">{topic.title}</h2>
            <div>{topic.description}</div>
            <div className="flex gap-4">
              <p>Created: {topic.createdAt} </p>
              <p>Updated: {topic.updatedAt} </p>
            </div>
          </div>
          <div className="flex gap-2">
            <RemoveBtn id={topic.id} />
            <Link href={`/editTopic/${topic.id}`}>
              <HiPencilAlt size={24} />
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
