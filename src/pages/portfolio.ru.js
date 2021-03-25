import React from "react"
import Layout from "../layout"
import { StaticImage } from "gatsby-plugin-image"

export default function Home(props) {
  return (
    <Layout location={props.location} partners>
      <StaticImage src="../images/works/1.jpg" alt="" />
      <StaticImage src="../images/works/2.jpg" alt="" />
      <StaticImage src="../images/works/3.jpg" alt="" />
      <StaticImage src="../images/works/4.jpg" alt="" />
      <StaticImage src="../images/works/5.jpg" alt="" />
      <StaticImage src="../images/works/6.jpg" alt="" />
      <StaticImage src="../images/works/7.jpg" alt="" />
      <StaticImage src="../images/works/8.jpg" alt="" />
      <StaticImage src="../images/works/9.jpg" alt="" />
      <StaticImage src="../images/works/10.jpg" alt="" />
      <StaticImage src="../images/works/11.jpg" alt="" />
    </Layout>
  )
}
