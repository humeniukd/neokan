import React from "react"
import Index from "../layouts/ru"

export default function Home(props) {
  return (
    <Index location={props.location}>
      <h1>Привет! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <p>
        What do I like to do? Lots of course but definitely enjoy building
        websites.
      </p>
    </Index>
  )
}
