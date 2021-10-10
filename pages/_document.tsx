import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          {/* add google fonts to document and to .storybook/preview-head.html */}
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&family=Poppins:wght@400;600;700&display=block" rel="stylesheet" />
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
