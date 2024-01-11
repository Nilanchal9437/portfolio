import Head from 'next/head';
import {
  IoMapOutline,
  IoCameraOutline,
  IoGridOutline,
  IoCodeSlash,
} from 'react-icons/io5';
import React from 'react';
import Layout from '@/components/Layout';
import About from '@/components/About';
import Hobbies from '@/components/Hobbies';
import WhatDoing from '@/components/WhatDoing';

import * as config from '@/config/index';

export default function Index() {
  const hobbyData = {
    tvl: {
      title: 'Travelling',
      desc: "As I weave through the fabric of the world, I invite you to come along. Share your travel stories, tips, and dreams. Let's create a community bound by the love of exploration. After all, the world is a vast playground, and every journey is an invitation to dance with its wonders.",
    },
    pgpy: {
      title: 'Photography',
      desc: "Photography is not just about clicking buttons; it's a dance between light and shadow. Whether it's the golden hues of a sunrise or the soft glow of city lights at night, understanding and playing with light is the essence of creating captivating visuals.",
    },
  };
  const WDData = {
    wd: {
      title: 'MERN STACK DEVELOPER',
      desc: 'As a MERN Stack and Next.js Developer at ATPL, I will be responsible for designing and implementing scalable and robust web applications using the MERN (MongoDB, Express.js, React, Node.js) stack along with expertise in Next.js. I will collaborate with cross-functional teams to deliver high-quality software solutions, ensuring an exceptional user experience.',
    },
    flc: {
      title: 'Freelancing',
      desc: 'One of the greatest perks of freelancing is the freedom it provides. No more rigid schedules or office constraints. I get to choose when and where I work, tailoring my environment to enhance creativity and productivity. This flexibility has not only improved my work-life balance but has also allowed me to explore different projects and industries.',
    },
  };
  return (
    <>
      <Head>
        <title>{config.MY_NAME} Portfolio</title>
      </Head>
      <Layout border="border-2">
        <About />

        <h1 className="text-lg font-semibold my-4">What I'm Doing</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <WhatDoing title={WDData.flc.title} desc={WDData.flc.desc}>
            <IoGridOutline className="text-blue-500 text-6xl" />
          </WhatDoing>
          <WhatDoing title={WDData.wd.title} desc={WDData.wd.desc}>
            <IoCodeSlash className="text-green-500 text-6xl" />
          </WhatDoing>
        </div>
        <h1 className="text-lg font-semibold my-4">Hobbies</h1>
        <div className="grid md:grid-cols-2 gap-y-4 gap-x-2 px-4">
          <Hobbies title={hobbyData.tvl.title} desc={hobbyData.tvl.desc}>
            <IoMapOutline className="text-purple-500 text-6xl" />
          </Hobbies>
          <Hobbies title={hobbyData.pgpy.title} desc={hobbyData.pgpy.desc}>
            <IoCameraOutline className="text-pink-500 text-6xl" />
          </Hobbies>
        </div>
      </Layout>
    </>
  );
}
