import React from 'react';
import Layout from '@/components/Layout';
import ProjectCards from '@/components/ProjectCards';
import Head from 'next/head';

import * as config from '@/config/index';

export default function projects() {
  const projectData = {
    project1: {
      title: 'Question-Bank-Manegement',
      subTitle: 'Made In LAMP stack',
      desc: 'Used PHP, HTML, CSS , JavaScript, Git, MySQL,. This project in Github repo.',
      link: 'https://github.com/Nilanchal9437/Question-Bank-Manegement',
      linkText: 'Github Link',
      stacks: [
        { title: 'PHP', color: 'text-red-200' },
        { title: 'JavaScript', color: 'text-blue-200' },
        { title: 'MySQL', color: 'text-gray-200' },
        { title: 'HTML', color: 'text-yellow-200' },
        { title: 'CSS', color: 'text-green-200' },
      ],
    },
    project2: {
      title: 'Trello App',
      subTitle: 'Made in MERN stack',
      desc: 'Used JavaScript, HTML, CSS , Node.js, Express.js, Mongo-DB, React.js. This project in Github repo.',
      link: 'https://github.com/Nilanchal9437/Trello-Mern-App',
      linkText: 'Github Link',
      stacks: [
        { title: 'Node.js', color: 'text-red-200' },
        { title: 'Express.js', color: 'text-blue-200' },
        { title: 'Mongo-DB', color: 'text-gray-200' },
        { title: 'React.js', color: 'text-yellow-200' },
        { title: 'MUI', color: 'text-green-200' },
      ],
    },
  };

  return (
    <>
      <Head>
        <title>Projects :: {config.MY_NAME}</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold my-4">
          Here's what I have worked on based on my interests...
        </h3>
        <div className="grid gap-4 mb-3">
          <ProjectCards
            title={projectData.project1.title}
            subTitle={projectData.project1.subTitle}
            desc={projectData.project1.desc}
            link={projectData.project1.link}
            linkText={projectData.project1.linkText}
            stacks={projectData.project1.stacks}
          />
          <ProjectCards
            title={projectData.project2.title}
            subTitle={projectData.project2.subTitle}
            desc={projectData.project2.desc}
            link={projectData.project2.link}
            linkText={projectData.project2.linkText}
            stacks={projectData.project2.stacks}
          />
        </div>
      </Layout>
    </>
  );
}
