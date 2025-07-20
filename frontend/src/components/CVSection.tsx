import React from "react";

interface CVSectionProps {
  title: string;
  color?: string;
  children: React.ReactNode;
}

const CVSection: React.FC<CVSectionProps> = ({
  title,
  color = "text-white",
  children,
}) => {
  return (
    <div className="mt-6">
      <h2 className={`text-2xl font-semibold mb-2 ${color}`}>{title}</h2>
      {children}
    </div>
  );
};

export default CVSection;
