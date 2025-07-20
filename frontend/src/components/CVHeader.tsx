import React from "react";
import { CVData } from "../data/cvData";

interface CVHeaderProps {
  data: CVData;
}

export default function CVHeader({ data }: CVHeaderProps) {
  return (
    <div className="flex items-center gap-6">
      <img
        src={data.photoUrl}
        alt={`${data.name} ${data.surname}`}
        width={100}
        height={100}
        className="rounded-full border-4 border-cyan-400 shadow-lg"
      />
      <div>
        <h1 className="text-4xl font-bold text-cyan-400">
          {data.name} {data.surname}
        </h1>
        <p className="text-white/80">Frontend Developer & Game Dev</p>
        <p className="text-sm text-green-400">
          Age: {data.age} | {data.isStudent ? "Student" : "Not a Student"}
        </p>
      </div>
    </div>
  );
}
