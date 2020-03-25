import React, { Component } from "react"
import { graphql } from "gatsby"
import PropTypes from "prop-types"

class Post extends Component {
  render() {
    const post = this.props.data.wordpressPost

    return (
      <>
        <h1>{post.title}</h1>
        <div>{post.content}</div>
      </>
    )
  }
}

Post.propTypes = {
  data: PropTypes.object.isRequired,
  edges: PropTypes.array,
}

export default Post

export const postQuery = graphql`
  query WordPressPostTag($id: ID!, $page: Int) {
    wordPressPostTag(id: $id) {
      title
      belongsTo(page: $page, perPage: 10) @paginate {
        pageInfo {
          totalPages
          currentPage
        }
        edges {
          node {
            ... on WordPressPost {
              id
              title
              path
              excerpt
            }
          }
        }
      }
    }
  }
`
