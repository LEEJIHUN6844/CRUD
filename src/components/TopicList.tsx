import Link from "next/link";
import React from "react";
import { HiPencilAlt } from "react-icons/hi";
import RemoveBtn from "./RemoveBtn";

export default function TopicList() {
  return (
    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
      <div>
        <h2 className="text-2xl font-bold">Topic Title</h2>
        <div>topic description</div>
      </div>
      <div className="flex gap-2">
        <RemoveBtn />
        <Link href={"/edit/Topic/123"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
}
