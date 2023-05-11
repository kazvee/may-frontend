import PageDescription from '@/components/PageDescription';
import ProjectItem from '@/components/ProjectItem';

export default function ProjectsPage({ projects }) {
  return (
    <section>
      <PageDescription
        title='Projects'
        description='Here are some of my personal projects'
      />

      {projects.map((project) => (
        <ProjectItem key={project._id} project={project} />
      ))}
    </section>
  );
}

export async function getServerSideProps() {
  let projects = [
    {
      _id: 1,
      name: 'Project 1',
      description: 'Project 1 is my first project.',
      imageUrl: 'https://placedog.net/280?random=1',
    },
    {
      _id: 2,
      name: 'Project 2',
      description: 'Project 2 is my second project.',
      imageUrl: 'https://placedog.net/280?random=2',
    },
  ];

  return {
    props: {
      projects,
    },
  };
}
