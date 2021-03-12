import React from "react"
import Index from "../layouts/ru"
import Posts from '../components/Posts'

export default function Home(props) {
  const posts = props.data.allMarkdownRemark.edges.map(p => p.node);
  const { langKey } = props.pathContext;
  return (
    <Index location={props.location}>
      <h1>Привет! I'm building a fake Gatsby site as part of a tutorial!</h1>
      <Posts
        posts={posts}
        langKey={langKey}
        showBtnMorePosts
      />
    </Index>
  )
}

export const pageQuery = graphql`
  query IndexRuQuery {
    allMarkdownRemark(
      limit: 3
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fields: { langKey: { regex: "/(ru|any)/" } }
      },
    ) {
      edges {
        node{
          frontmatter{
            title,
            date
          },
          fields{
            slug,
            langKey
          },
          excerpt
        }
      }
    }
  }
`