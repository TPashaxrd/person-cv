import { useState } from "react";
import { toprakCV } from "../data/cvData";
import { Briefcase, GraduationCap, Globe, Code2, Heart, BookOpenCheck, Gamepad2, Globe2 } from "lucide-react"; // ikonlar için

export default function ToprakCV() {
  const data = toprakCV;
  const [isOpen, setIsOpen] = useState(false);
  const togglePicture = () => setIsOpen(!isOpen);

  const SectionCard = ({ icon: Icon, title, children }) => (
    <section className="mb-10 bg-white/80 backdrop-blur-lg border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all">
      <div className="flex items-center gap-3 mb-4 border-b pb-2">
        <Icon className="text-cyan-700 w-6 h-6" />
        <h2 className="text-xl font-bold text-cyan-900">{title}</h2>
      </div>
      {children}
    </section>
  );

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-cyan-100 text-gray-900 font-sans p-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <aside className="bg-cyan-900 text-cyan-100 p-6 rounded-xl shadow-xl space-y-6">
            <img
              src={data.photoUrl}
              alt={data.name}
              onClick={togglePicture}
              className="w-36 h-36 mx-auto rounded-full border-4 border-cyan-300 shadow-lg cursor-pointer object-cover transition hover:scale-105"
            />
            <div className="text-center">
              <h1 className="text-3xl font-bold">{data.name}</h1>
              <p className="text-cyan-300">{data.title}</p>
            </div>

            <div>
              <h2 className="text-lg font-semibold border-b border-cyan-300 pb-1 mb-2">Contact</h2>
              <p>{data.contact.location}</p>
              <p><a href={`mailto:${data.contact.email}`} className="hover:text-white">{data.contact.email}</a></p>
              <p><a href={`tel:${data.contact.phone}`} className="hover:text-white">{data.contact.phone}</a></p>
              <p><a href={data.contact.github} target="_blank" rel="noreferrer" className="hover:text-white">GitHub</a></p>
              <p><a href={data.contact.linkledn} target="_blank" rel="noreferrer" className="hover:text-white">LinkedIn</a></p>
            </div>

            <div>
              <h2 className="text-lg font-semibold border-b border-cyan-300 pb-1 mb-2">Skills</h2>
              <ul className="list-disc list-inside space-y-1">
                {data.skills.map((skill) => <li key={skill}>{skill}</li>)}
              </ul>
            </div>

            <div>
              <h2 className="text-lg font-semibold border-b border-cyan-300 pb-1 mb-2">Hobbies</h2>
              <ul className="list-disc list-inside space-y-1">
                {data.hobbies.map((h) => <li key={h}>{h}</li>)}
              </ul>
            </div>
          </aside>

          <main className="md:col-span-2 space-y-8 max-h-[90vh] overflow-y-auto pr-2">

            <SectionCard icon={BookOpenCheck} title="About Me">
              <p className="text-gray-700 leading-relaxed">{data.summary}</p>
            </SectionCard>

            <SectionCard icon={GraduationCap} title="Education">
              {data.education.map((edu) => (
                <div key={edu.school} className="mb-4">
                  <h3 className="font-semibold">{edu.school}</h3>
                  <p className="text-sm italic text-gray-600">{edu.degree}</p>
                  <span className="text-sm text-gray-500">{edu.year}</span>
                </div>
              ))}
            </SectionCard>

            <SectionCard icon={Briefcase} title="Experience">
              {data.experience.map((exp) => (
                <div key={exp.company} className="mb-4">
                  <h3 className="font-semibold">{exp.position} <span className="text-sm font-normal text-gray-600">@ {exp.company}</span></h3>
                  <p className="text-sm text-gray-500">{exp.year}</p>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </SectionCard>

            <SectionCard icon={Globe} title="Organizations">
              {data.organizations.map((org) => (
                <div key={org.name}>
                  <h3 className="font-semibold text-cyan-800">{org.name}</h3>
                  <p className="text-sm text-gray-700">{org.description}</p>
                </div>
              ))}
            </SectionCard>

            <SectionCard icon={Globe2} title="Languages">
              {data.languages.map((lang) => (
                <div key={lang.name} className="flex justify-between">
                  <span>{lang.name}</span>
                  <span className="text-gray-600 italic">{lang.level}</span>
                </div>
              ))}
            </SectionCard>

            <SectionCard icon={Code2} title="Courses">
              {data.courses.map((c) => (
                <div key={c.name} className="flex justify-between">
                  <span>{c.name}</span>
                  <span className="text-gray-500 italic">{c.from}</span>
                </div>
              ))}
            </SectionCard>

            <SectionCard icon={Gamepad2} title="Games">
              {data.games.map((game) => (
                <div key={game.name} className="mb-4">
                  <h4 className="font-semibold text-lg">{game.name}</h4>
                  <p className="text-sm italic text-gray-500">{game.engine}</p>
                  <p className="text-gray-700">{game.description}</p>
                  {game.url && (
                    <a href={game.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">Visit</a>
                  )}
                </div>
              ))}
            </SectionCard>

            <SectionCard icon={Heart} title="Interests">
              <div className="flex flex-wrap gap-3">
                {data.interests.map((int) => (
                  <span key={int} className="bg-cyan-100 text-cyan-900 px-3 py-1 rounded-full text-sm">{int}</span>
                ))}
              </div>
            </SectionCard>

            <SectionCard icon={Globe} title="Websites">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {data.webSites.map((site) => (
                  <div key={site.name} className="border p-4 rounded-md shadow-sm hover:shadow-md transition">
                    <h4 className="font-semibold">{site.name}</h4>
                    <p className="text-sm text-gray-600">{site.description}</p>
                    <a href={site.url} className="text-blue-700 hover:underline break-all" target="_blank" rel="noreferrer">Visit Site</a>
                  </div>
                ))}
              </div>
            </SectionCard>

          </main>
        </div>
      </div>

      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50" onClick={() => setIsOpen(false)}>
          <img src={data.photoUrl} alt={data.name} className="w-80 h-80 rounded-full border-4 border-cyan-400 object-cover" />
        </div>
      )}
    </>
  );
}
