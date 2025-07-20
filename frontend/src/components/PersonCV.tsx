import { useState } from "react";
import { toprakCV } from "../data/cvData";

export default function ToprakCV() {
  const data = toprakCV;
  const [isOpen, setIsOpen] = useState(false);

  const togglePicture = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="min-h-screen bg-gray-100 text-gray-900 font-sans p-8 flex justify-center items-center">
        <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 shadow-lg rounded-lg bg-white overflow-hidden">
          <aside className="bg-cyan-900 text-cyan-100 p-8 flex flex-col items-center space-y-6">
            <img
              src={data.photoUrl}
              alt={data.name}
              onClick={togglePicture}
              className="w-36 h-36 rounded-full border-4 border-cyan-300 shadow-lg cursor-pointer object-cover"
            />
            <div className="text-center">
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <p className="text-cyan-300 mt-1">{data.title}</p>
            </div>
            <div className="w-full">
              <h2 className="text-xl font-semibold border-b border-cyan-300 pb-1 mb-2">Contact</h2>
              <p>{data.contact.location}</p>
              <p><a href={`mailto:${data.contact.email}`} className="hover:text-white">{data.contact.email}</a></p>
              <p><a href={`tel:${data.contact.phone}`} className="hover:text-white">{data.contact.phone}</a></p>
              <p><a href={data.contact.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></p>
              <p><a href={data.contact.linkledn} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></p>
            </div>

            <div className="w-full">
              <h2 className="text-xl font-semibold border-b border-cyan-300 pb-1 mb-2">Skills</h2>
              <ul className="list-disc list-inside space-y-1">
                {data.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div className="w-full">
              <h2 className="text-xl font-semibold border-b border-cyan-300 pb-1 mb-2">Hobbies</h2>
              <ul className="list-disc list-inside space-y-1">
                {data.hobbies.map((hob) => (
                  <li key={hob}>{hob}</li>
                ))}
              </ul>
            </div>
          </aside>

          <main className="md:col-span-2 p-10 max-h-[90vh] overflow-y-auto">

            <section className="mb-10">
              <h2 className="text-3xl font-bold text-cyan-900 border-b-2 border-cyan-400 pb-2 mb-4">About Me</h2>
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </section>
            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-cyan-900 border-b border-cyan-300 pb-1 mb-4">Education</h2>
              {data.education.map((edu) => (
                <div key={edu.school} className="mb-6">
                  <h3 className="text-lg font-semibold">{edu.school}</h3>
                  <p className="italic text-gray-600">{edu.degree}</p>
                  <span className="text-sm text-gray-500">{edu.year}</span>
                </div>
              ))}
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-semibold text-cyan-900 border-b border-cyan-300 pb-1 mb-4">Experience</h2>
              {data.experience.map((exp) => (
                <div key={exp.company} className="mb-6">
                  <h3 className="text-lg font-semibold">{exp.position} <span className="text-sm font-normal text-gray-600">@ {exp.company}</span></h3>
                  <p className="text-sm text-gray-500">{exp.year}</p>
                  <p className="mt-1 text-gray-700">{exp.description}</p>
                </div>
              ))}
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cyan-900 border-b-2 border-cyan-400 pb-2 mb-4 tracking-wide uppercase">Organizations</h2>
              <div className="space-y-4">
                {data.organizations.map((org) => (
                  <div key={org.name}>
                    <h3 className="text-lg font-semibold text-cyan-800">{org.name}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{org.description}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cyan-900 border-b-2 border-cyan-400 pb-2 mb-4 tracking-wide uppercase">Languages</h2>
              <div className="space-y-2">
                {data.languages.map((lang) => (
                  <div key={lang.name} className="flex justify-between items-center">
                    <span className="text-gray-800 font-medium">{lang.name}</span>
                    <span className="italic text-gray-600">{lang.level}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-10">
              <h2 className="text-2xl font-bold text-cyan-900 border-b-2 border-cyan-400 pb-2 mb-4 tracking-wide uppercase">Courses</h2>
              <div className="space-y-2">
                {data.courses.map((course) => (
                  <div key={course.name} className="flex justify-between items-center">
                    <span className="text-gray-800 font-medium">{course.name}</span>
                    <span className="italic text-gray-600">{course.from}</span>
                  </div>
                ))}
              </div>
            </section>

          <section className="mb-10 px-4">
            <h2 className="text-2xl font-semibold text-cyan-900 border-b-2 border-cyan-700 pb-2 mb-6">
              Games
            </h2>
            <div className="flex flex-col space-y-6">
              {data.games.map((game) => (
                <div
                  key={game.name}
                  className="border border-gray-300 rounded-md p-4 hover:shadow-md transition-shadow duration-300 bg-white"
                >
                  <h3 className="text-xl font-semibold text-gray-900">{game.name}</h3>
                  <p className="text-sm text-gray-500 italic">{game.engine}</p>
                  <p className="mt-2 text-gray-700">{game.description}</p>
                  {game.url && (
                    <a
                      href={game.url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-block mt-3 text-blue-600 hover:text-blue-800 hover:underline break-words"
                    >
                      Visit Game
                    </a>
                  )}
                </div>
              ))}
            </div>
          </section>

            <section>
              <h2 className="text-2xl font-semibold text-cyan-900 border-b border-cyan-300 pb-1 mb-6">Websites</h2>
              <div className="grid gap-6 md:grid-cols-2">
                {data.webSites.map((site) => (
                  <div key={site.name} className="p-4 border rounded-lg shadow-sm hover:shadow-md transition">
                    <h4 className="font-semibold text-cyan-800">{site.name}</h4>
                    <p className="text-gray-600 mb-2">{site.description}</p>
                    <a href={site.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-alt break-words">
                      Visit Site
                    </a>
                  </div>
                ))}
              </div>
            </section>

          <section className="mt-10">
            <h2 className="text-2xl font-semibold text-cyan-900 border-b border-cyan-300 pb-1 mb-6">Interests</h2>
            <div className="flex flex-wrap gap-3">
              {data.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-1 bg-cyan-100 text-cyan-900 rounded-full text-sm font-medium shadow-sm hover:bg-cyan-200 transition"
                >
                  {interest}
                </span>
              ))}
            </div>
          </section>

          </main>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
          onClick={() => setIsOpen(false)}
        >
          <img
            src={data.photoUrl}
            alt={data.name}
            className="w-80 h-80 rounded-full border-4 border-cyan-400 shadow-lg object-cover"
          />
        </div>
      )}
    </>
  );
}