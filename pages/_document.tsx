import Document, { Html, Head, Main, NextScript } from 'next/document'

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
        </Head>
        <body>
          {/* add fonts to _document.tsx and to .storybook/preview-head.html */}
          <style global jsx>{`
            @font-face {
                font-family: 'January Handwriting';
                src: url('/fonts/JanuaryHandwriting.eot');
                src: url('/fonts/JanuaryHandwriting.eot?#iefix') format('embedded-opentype'),
                    url('/fonts/JanuaryHandwriting.woff2') format('woff2'),
                    url('/fonts/JanuaryHandwriting.woff') format('woff'),
                    url('/fonts/JanuaryHandwriting.ttf') format('truetype');
                font-weight: normal;
                font-style: normal;
                font-display: block;
            }
          `}</style>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

// noinspection JSUnusedGlobalSymbols
export default MyDocument
