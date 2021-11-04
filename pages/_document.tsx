// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    // noinspection HtmlUnknownTarget,HtmlRequiredTitleElement
    return (
      <Html>
        <Head>
          <link rel="icon" href="/images/mtc.svg" />
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=block" rel="stylesheet" />
          <link href="/fonts/fonts.css" rel="stylesheet" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// noinspection JSUnusedGlobalSymbols
export default MyDocument
