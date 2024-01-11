import React from 'react';
import Layout from '@/components/Layout';
import EducationCard from '@/components/EducationCard';
import Pills from '@/components/Pills';
import {
  IoDiceOutline,
  IoLayersOutline,
  IoPersonOutline,
  IoServerOutline,
  IoSettingsOutline,
} from 'react-icons/io5';
import Head from 'next/head';

import * as config from '@/config/index';

export default function education() {
  return (
    <>
      <Head>
        <title>Education & Skills :: {config.MY_NAME}</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Educational Background</h3>
        <div className="flex flex-col gap-4">
          <EducationCard
            degree="Bachelor of Technology"
            major="Electronics & Telecommunication Engineering"
            institute="AJAY BINAY INSTITUTE OF TECHNOLOGY"
            year="2018 – 2022"
            grade="CGPA 8.68"
          />
          <EducationCard
            degree="Council of Higher Secondary Education"
            major="12th Science"
            institute="Cuttack College"
            year="2016 – 2018"
            grade="PERCENT 47.74%"
          />
          <EducationCard
            degree="Central Board of Secondary Education"
            major="10th (Matriculation)"
            institute="Kendriya Vidyalaya No.2 Cuttack"
            year="2006 – 2016"
            grade="CGPA 6.68"
          />
        </div>

        <h3 className="text-lg font-semibold mt-6">Skills </h3>
        <div className="px-4">
          <div className="flex gap-2 items-center mt-6">
            <IoLayersOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Frontend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="HTML5" cname="bg-green-100 py-1 " />
            <Pills text="CSS3" cname="bg-blue-100 py-1" />
            <Pills text="JavaScript" cname="bg-purple-100 py-1" />
            <Pills text="TypeScript" cname="bg-red-100 py-1" />
            <Pills text="NextJS" cname="bg-pink-100 py-1" />
            <Pills text="ReactJS" cname="bg-yellow-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoServerOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Backend </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Node.js" cname="bg-blue-100 py-1" />
            <Pills text="Express.js" cname="bg-gray-100 py-1" />
            <Pills text="MySQL" cname="bg-blue-100 py-1" />
            <Pills text="Prisma" cname="bg-red-100 py-1" />
            <Pills text="MongoDB" cname="bg-yellow-100 py-1 " />
            <Pills text="PostgreSQL" cname="bg-purple-100 py-1 " />
            <Pills text="REST API" cname="bg-green-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoSettingsOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Tools & Frameworks </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="VS-code" cname="bg-red-100 py-1 " />
            <Pills text="TailwindCSS" cname="bg-purple-100 py-1 " />
            <Pills text="Bulma" cname="bg-pink-100 py-1 " />
            <Pills text="Bootstrap" cname="bg-gray-100 py-1 " />
            <Pills text="MUI" cname="bg-green-100 py-1 " />
            <Pills text="Git" cname="bg-indigo-100 py-1 " />
            <Pills text="Github" cname="bg-blue-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoDiceOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Design & Others </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Google Analytics" cname="bg-blue-100 py-1 " />
            <Pills text="Vercel" cname="bg-red-100 py-1 " />
            <Pills text="DigitalOcean" cname="bg-pink-100 py-1 " />
            <Pills text="MS Office" cname="bg-gray-100 py-1 " />
            <Pills text="NGINX" cname="bg-green-100 py-1 " />
            <Pills text="PM2" cname="bg-red-100 py-1 " />
            <Pills text="Figma" cname="bg-yellow-100 py-1 " />
          </div>

          <div className="flex gap-2 items-center mt-6">
            <IoPersonOutline className="flex-none text-xl" />
            <h3 className="text-lg font-semibold ">Personal </h3>
          </div>
          <div className="flex flex-wrap gap-3 my-3 text-sm md:ml-8">
            <Pills text="Efficient Codeing" cname="bg-red-100 py-1 " />
            <Pills
              text="Frontend & Backend Architecture"
              cname="bg-blue-100 py-1 "
            />
            <Pills text="Leadership" cname="bg-yellow-100 py-1 " />
            <Pills text="Team Work" cname="bg-green-100 py-1 " />
            <Pills text="Reusablility" cname="bg-gray-100 py-1 " />
          </div>
        </div>
      </Layout>
    </>
  );
}
