import { EvervaultCard } from "@/components/ui/evervault-card";
import {
  IconBrandJavascript,
  IconBrandMantine,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandReact,
  IconBrandReactNative,
  IconBrandRedux,
  IconBrandTailwind,
  IconGitPullRequest,
  IconGrain,
  IconSql,
  IconBrandCss3,
  IconBrandBootstrap,
  IconBrandPhp,
  IconBrandPython,
} from "@tabler/icons-react";

export const Experience = () => {
  const experience = [
    { name: "CSS", logo: <IconBrandCss3 size={100} stroke={1.25} /> },
    {
      name: "Bootstrap",
      logo: <IconBrandBootstrap size={100} stroke={1.25} />,
    },
    { name: "Laravel", logo: <IconBrandPhp size={100} stroke={1.25} /> },
    { name: "Python", logo: <IconBrandPython size={100} stroke={1.25} /> },
    {
      name: "Javascript",
      logo: <IconBrandJavascript size={100} stroke={1.25} />,
    },
    { name: "Tailwind", logo: <IconBrandTailwind size={100} stroke={1.25} /> },
    { name: "Sql", logo: <IconSql size={100} stroke={1.25} /> },
    { name: "Git", logo: <IconGitPullRequest size={100} stroke={1.25} /> },
    { name: "Mantine UI", logo: <IconBrandMantine size={100} stroke={1.25} /> },
  ];

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
        My Skills
      </h1>
      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-8 max-w-md mx-auto">
        A small list of cool things I use to construct my projects.
      </p>

      <div
        id="skill"
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 w-3/4 mx-auto"
      >
        {experience.map((item) => (
          <div className="border border-white" key={item.name}>
            <EvervaultCard text={item.name} icon={item.logo} />
          </div>
        ))}
      </div>
    </div>
  );
};
