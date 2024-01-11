import React from 'react';
import Layout from '@/components/Layout';
import InternshipCard from '@/components/InternshipCard';
import MentorshipCard from '@/components/MentorshipCard'; 
import Head from 'next/head';

import * as config from '@/config/index';

export default function skillsAndExperience() {
  return (
    <>
      <Head>
        <title>Expereience :: {config.MY_NAME}</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Experience</h3>
        <InternshipCard
          title="Anandpushp Technologies Private Limited"
          date="June 2023 –  Present"
          place="Software Developer"
          desc={
            <div>
              Bidhannagar, Kolkata, West Bengal, India · On-site
              <br />
              <br />
              Developing and Optimizing "MERN" Stack Projects
              <br />
              <br />
              1. Jobs In Education (Link:- "jobsineducation.net"):-
              <br /> <br />
              • In this project I am developing and optimizing the application.
              dynamic sitemap generation.
              <br />
              • Using React-Query server-side API call management. Writing
              efficient coding with reusable components.
              <br />
              • Create Server-side application more faster and better
              performance on the light house score rating.
              <br />
              • Managing cookies system on both server-side and client-side.
              <br />
              • Developing Client-Side, Server-Side, Static-Side and Incremental
              Static Generation in Next.js.
              <br />
              • Using REST API integration on Next.js app and error handling.
              <br />
              <br />
              <br />
              2. Agorae (Link:- "agorae.app"):-
              <br /> <br />
              • In this project I have working in one micro service frontend
              that is inventory management system.
              <br />
              • Here I am creating "Frontend Architecture" with auth flow using
              "Next.js 14".
              <br />
              • Using "MUI" creating UI designing with global theme management.
              <br />
              • Using "redux-toolkit" managing global state and reuse it in the
              whole application.
              <br />
              • Using "yup" and "Formik" proper schema and form validation and
              proper API call.
              <br />
              • Using "Axios" proper globally manage API calls in the frontend.
              <br />
              • Creating re-usable code in pages and proper code optimization.
              <br />
              • Here I have working in the full Admin pannel section and handle
              frontend.
              <br />
            </div>
          }
          link="https://www.jobsineducation.net/"
          linkText="Product Link"
        />
        <InternshipCard
          title="Appstone Pvt. Ltd"
          date="Jan 2022 –  June 2023"
          place="Associate Software Developer"
          desc={
            <div>
              Bhubaneswar, Odisha India · Remote
              <br />
              <br />
              • Worked on MERN stack projects called :-
              <br />
              <br />
              1. "Nextstacks" ( E-learning platform, upskilling platform
              provides online training and mentorship to help you advance your
              programming language skills and prepare for a career in technology
              ).
              <br />
              2. "Drsignet" ( DrSignet App. One App for all medical needs. Book
              doctors,diagnostics tests and order medicines from this
              application ).
              <br />
              3. "ImGrows" ( ImGrows is one of the first platforms from India
              that offers a one-stop solution for ESG Assessment, Monitoring &
              Reporting. Im Grows helps businesses understand their current
              position on the ESG landscape by recognising their current impact,
              developing their ESG strategy and improving their ESG ratings,
              thereby, making their businesses more sustainable and contribute
              to the global push to "Net Zero" ).
              <br />
              • Improved efficient and optimized coding.
              <br />
              • Resolved several bugs in these applications making them failure
              proof.
              <br />
              • Application deployment in digital ocean server and document and
              image upload in digital spaces.
              <br />• REST API integration with Postman testing.
              <br />
            </div>
          }
          link="https://nextstacks.hashnode.dev/"
          linkText="Product Link"
        />

        <h3 className="text-lg font-semibold mt-3">Internships</h3>
        <MentorshipCard
          org="Appstone Pvt. Ltd"
          date="Jul 2021 –  Dec 2021"
          desig="Software Developer Intern"
          desc="I have developing and designing web applications. This opportunity give me experience to work on client projects. This experience boosted my career. Here  basically I have create web applications using React.js, Next.js, Redux, React-Query, Node.js, Express.js, Mongo-DB, Material-UI, CSS, HTML, JavaScript etc."
          link="https://nextstacks.hashnode.dev/"
          linkText="Link"
        />
      </Layout>
    </>
  );
}
