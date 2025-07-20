import { useState } from "react";
import { toprakCV } from "../data/cvData";

export default function ToprakCV() {
  const data = toprakCV;

  const [isOpen, setIsOpen] = useState(false);

  const togglePicture = () => [
    setIsOpen(!isOpen),
  ]

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-black font-mont p-8 flex justify-center items-center">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl rounded-2xl overflow-hidden bg-white">
        <div className="bg-cyan-700 font-baslik text-white p-6 flex flex-col items-center">
          <img
            src={data.photoUrl}
            alt={data.name}
            onClick={togglePicture}
            className="w-36 h-36 cursor-pointer object-cover rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-2xl font-bold mt-4">{data.name}</h1>
          <h2 className="text-sm text-cyan-100">{data.title}</h2>

          <div className="mt-6 w-full">
            <h3 className="text-xl font-semibold mb-2 border-b border-white pb-1">Contact</h3>
            <p className="text-sm form-alt">{data.contact.location}</p>
            <p onClick={() => window.location.href = `mailto:${data.contact.email}`} className="text-sm cursor-pointer form-alt hover:underline">{data.contact.email}</p>
            <p onClick={() => window.location.href = `tel:${data.contact.phone}`} className="text-sm cursor-pointer form-alt hover:underline">{data.contact.phone}</p>
            <p onClick={() => window.open(`${data.contact.github}`, "_blank")} className="text-sm cursor-pointer form-alt hover:underline">GitHub</p>
            <p onClick={() => window.open(`${data.contact.linkledn}`, "_blank")} className="text-sm cursor-pointer form-alt hover:underline">LinkedIn</p>
          </div>

          <div className="mt-6 w-full">
            <h3 className="text-md font-semibold mb-2 border-b border-white pb-1">Skills</h3>
            <ul className="text-sm form-alt list-disc list-inside">
              {data.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </div>

          <div className="mt-6 w-full">
            <h3 className="text-md font-semibold mb-2 border-b border-white pb-1">Hobbies</h3>
            <ul className="text-sm form-alt list-disc list-inside">
              {data.hobbies.map((hob) => (
                <li key={hob}>{hob}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="md:col-span-2 p-8">
          <section>
            <h2 className="text-3xl font-bold text-cyan-700 mb-4 border-b pb-2">About:</h2>
            <p className="text-gray-800 leading-relaxed text-md">{data.summary}</p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-cyan-700 mb-3 border-b pb-1">Education:</h2>
            {data.education.map((edu) => (
              <div key={edu.school} className="mb-4">
                <p className="font-semibold text-lg">{edu.school}</p>
                <p className="text-sm text-gray-700">{edu.degree}</p>
                <p className="text-xs text-gray-500">{edu.year}</p>
              </div>
            ))}
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-bold text-cyan-700 mb-3 border-b pb-1">Experience</h2>
            {data.experience.map((exp) => (
              <div key={exp.company} className="mb-6">
                <p className="font-semibold text-lg">
                  {exp.position} <span className="text-sm text-gray-600">@ {exp.company}</span>
                </p>
                <p className="text-xs text-gray-500">{exp.year}</p>
                <p className="text-sm text-gray-800 mt-1">{exp.description}</p>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>

    {/* Toglge Picture */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 animate-fade"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={data.photoUrl}
            alt={data.name}
            className="w-80 h-80 rounded-sm border-4 border-white object-cover shadow-2xl transform scale-75 opacity-0 animate-zoom"
          />
        </div>
      )}
    {/* Toggle Picture */}
    </>
  );
}
