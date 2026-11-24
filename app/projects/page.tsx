export const metadata = { title: "Projects | Harold Suello" };

const projects = [
  { id: 1, name: "PoultryStock", description: "A simple inventory management system for poultry farms." },
  { id: 2, name: "RentRight", description: "A property rental management system." },
  { id: 3, name: "HoopHours", description: "A basketball scheduling and management app." },
];

export default function ProjectsPage() {
  return (
    <>
    {projects.map((project) => (
      <div key={project.id} className="p-4 border rounded mb-4">
        <h2 className="text-xl font-semibold">{project.name}</h2>
        <p>{project.description}</p>
      </div>
    ))}
    </>
  );
}   