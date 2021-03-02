import React from "react"
import Layout from "../layouts/uk"

export default function Home(props) {
  return (
    <Layout location={props.location}>
      <h1>Привіт! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Layout>
  )
}
