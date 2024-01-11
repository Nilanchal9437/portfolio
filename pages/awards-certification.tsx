import React from 'react';
import Layout from '@/components/Layout';
import CertificationCard from '@/components/CertificationCard';
import Head from 'next/head';

import * as config from '@/config/index';

export default function awardsAndCertification() {
  const awardData = {
    ahack: {
      title: ' AngelHack Global Hackathon Series',
      date: '2019',
      place: 'Bangalore, India - Winner',
      link: '/angelhack-global-hackathon-series-2019',
      linkText: 'Blog',
    },
    valp: {
      title: 'Valuepitch E Technologies Hackathon',
      date: '2019',
      place: 'Bangalore, India - Second Runner',
      link: 'https://farm66.staticflickr.com/65535/47702473231_248f82643f_b.jpg',
      linkText: 'Image',
    },
    vtubb: {
      title: 'VTU Inter-Collegiate Basketball Tournament',
      date: '2018',
      place: 'Karnataka, India - Winner',
      link: 'https://www.facebook.com/photo.php?fbid=1622519817863750&set=t.100003956946689&type=3',
      linkText: 'Social Media Post',
    },
  };
  const certData = {
    dcmp: {
      title: 'React.js certification training',
      platform: 'NextstacksNextstacks',
      date: '2021',
      link: '',
      linkText: '',
    },
    nptelPython: {
      title: 'Web development using PHP',
      platform: 'NextstacksNextstacks',
      date: '2021',
      link: '',
      linkText: '',
    },
    npteldsa: {
      title: 'Ethereum Blockchain Developer Bootcamp with Solidity',
      platform: 'Udemy',
      date: '2022',
      link: 'https://www.udemy.com/certificate/UC-61c9a4c2-7538-4d29-8a80-d5ef7c43df6c/',
      linkText: 'certifications',
    },
  };
  return (
    <>
      <Head>
        <title>Awards & Certification :: {config.MY_NAME}</title>
      </Head>
      <Layout border="border-2">
        <h3 className="text-lg font-semibold mt-3">Certification</h3>
        <div className="flex flex-col">
          <CertificationCard
            title={certData.dcmp.title}
            date={certData.dcmp.date}
            platform={certData.dcmp.platform}
          />
          <CertificationCard
            title={certData.nptelPython.title}
            date={certData.nptelPython.date}
            platform={certData.nptelPython.platform}
          />
          <CertificationCard
            title={certData.npteldsa.title}
            date={certData.npteldsa.date}
            platform={certData.npteldsa.platform}
          />
        </div>
      </Layout>
    </>
  );
}
