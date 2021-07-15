import { Grid } from '@material-ui/core'
import DrawerLeft from 'components/DrawerLeft'
import { AppProps } from 'next/app'
import Head from 'next/head'

import GlobalStyles from 'styles/global'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Factory</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#06092b" />
        <meta
          name="description"
          content="A simple project starter to work with TypeScript, React, NextJs and Material UI"
        />
      </Head>
      <GlobalStyles />
      <Grid container>
        <Grid item lg={3}>
          <DrawerLeft />
        </Grid>
        <Grid item lg={9}>
          <Component {...pageProps} />
        </Grid>
      </Grid>
    </>
  )
}

export default App
