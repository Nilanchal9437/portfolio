import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html className="nightwind">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          {/* Meta Tags */}
          <meta name="title" content="Nilanchal" key="title" />
          <meta
            name="description"
            key="description"
            content="Nilanchal Patra Portfolio"
          />
          <meta property="og:type" key="ogtype" content="website" />
          <meta property="og:url" key="ogurl" content="https://nilanchal-portfolio.vercel.app/" />
          <meta property="og:title" key="ogtitle" content="Nilanchal Portfolio" />
          <meta
            property="og:description"
            key="ogdescription"
            content="Nilanchal Portfolio Made in Next.JS"
          />
          <meta
            property="og:image"
            key="ogimage"
            content="https://nilanchal-portfolio.vercel.app/assets/img/user.jpg"
          />

          {/* <!-- Twitter --> */}
          <meta
            property="twitter:card"
            key="twittercard"
            content="summary_large_image"
          />
          <meta
            property="twitter:url"
            key="twitterurl"
            content="https://nilanchal-portfolio.vercel.app/"
          />
          <meta
            property="twitter:title"
            key="twittertitle"
            content="Nilanchal Portfolio"
          />
          <meta
            property="twitter:description"
            key="twitterdesc"
            content="Nilanchal Portfolio Made in Next.JS"
          />
          <meta
            property="twitter:image"
            key="twitterimage"
            content="https://nilanchal-portfolio.vercel.app/assets/img/user.jpg"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
