export const metadata = {
    title: "Projects | Harold Suello",
};

const projects = [
    { id: 1,name: "PoultryStock", description: "A simple inventory management system for poultry farms."},
    {id: 2, name: "RentRight", description: "A property rental management system."} ,
    {id: 3, name: "HoopHours", description: "A basketball scheduling and management app."},
];

export default function ProjectsPage() {
    return (
        <main className="p-8">
            <h1 className="text-3xl font-bold text-white mb-6">
                My Projects
            </h1>

            <div className="space-y-4">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className="p-5 border border-gray-700 rounded-lg hover:border-blue-400 transition"
                    >
                        <h2 className="text-xl font-semibold text-white">
                            {project.name}
                        </h2>

                        <p className="mt-2 text-gray-300 leading-relaxed">
                            {project.description}
                        </p>
                    </div>
                ))}
            </div>
        </main>
    );
}
