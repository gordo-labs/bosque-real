import React from "react"
// import Layout from "../components/Layout"
// import BlogList from "../components/BlogList"
import { BosqueCarousel } from "../components/Carousel"
import styled from "styled-components"
import MetaHelmet from "../components/MetaHelmet"
import { Link, graphql } from "gatsby"

const Base = styled.section`
max-width: 900px;
margin: 0 auto;
`
export default function IndexPage(props) {
  const data = props.data
  return (
    <>
      <MetaHelmet />
      <Base>
        {/*<BosqueCarousel />*/}

        <div>
          <h1>Pages</h1>
          {data.allWordpressPage.edges.map(({ node }) => (
            <div key={node.slug}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
              </Link>
              <h3>{node.excerpt}</h3>
            </div>
          ))}
        </div>

        <h1>Posts</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug}>
              <h2>{node.title}</h2>
            </Link>
            <h3>{node.excerpt}</h3>
          </div>
        ))}
      </Base>
    </>
  )
}

export const pageQuery = graphql`
  query {
    allWordpressPage {
      edges {
        node {
          id
          title
          excerpt
          slug
        }
      }
    }
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
