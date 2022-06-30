import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@100;400;700&family=Mukta+Vaani:wght@300;700&display=swap"
          rel="stylesheet"
        />
        <meta property="og:title" content="MiniURL" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/dnvdrksxu/image/upload/v1656551458/MiniURL/MiniURL_Logo_wroegy.png"
        />
        <meta property="og:description" content="The best URL Minifier App" />
        <meta property="og:url" content="https://mini-url.xyz" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="627" />
        <meta property="og:type" content="website" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document
