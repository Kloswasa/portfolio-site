interface ProjectCardProps {
  title: string;
  description: string;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
  liveUrl?: string;
  sourceUrl?: string;
}

export default function ProjectCard({
  title,
  description,
  technologies,
  gradientFrom,
  gradientTo,
  liveUrl,
  sourceUrl
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-none shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <div className={`h-48 bg-gradient-to-br ${gradientFrom} ${gradientTo}`}></div>
      <div className="p-6">
        <h3 className="text-heading-xl font-semibold text-slate-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-slate-600 dark:text-slate-300 mb-4">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm rounded-none"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline text-sm font-medium"
            >
              View Live
            </a>
          )}
          {sourceUrl && (
            <a
              href={sourceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:underline text-sm font-medium"
            >
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 