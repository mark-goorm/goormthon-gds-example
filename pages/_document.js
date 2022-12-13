import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <link
        rel="stylesheet"
        href="https://statics.goorm.io/css/goormstrap.v4.min.css"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}