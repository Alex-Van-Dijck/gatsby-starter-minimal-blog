import * as React from "react"
import type { PageProps } from "gatsby"
import Layout from "@lekoarts/gatsby-theme-minimal-blog/src/components/layout"

const NotFound = (_props: PageProps) => (
  <Layout>
    <h1>404 - Pagina niet gevonden</h1>
    <p>Jammer genoeg konden we de pagina niet vinden die je zocht :(</p>
  </Layout>
)

export default NotFound
