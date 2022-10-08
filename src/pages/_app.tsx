import type { AppProps } from 'next/app'
import Head from 'next/head'

import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Animes Skull</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
