// export const pageQuery = graphql`
//     query($id: String!) {
//         wordpressPost(id: { eq: $id }) {
//             title
//             content
//             ...PostIcons
//             acf {
//                 page_builder_post {
//                     __typename
//                     ... on WordPressAcf_post_photo {
//                         photo {
//                             localFile {
//                                 childImageSharp {
//                                     fluid(maxWidth: 680) {
//                                         ...GatsbyImageSharpFluid
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                     ... on WordPressAcf_image_gallery {
//                         pictures {
//                             picture {
//                                 localFile {
//                                     childImageSharp {
//                                         fluid(maxWidth: 680) {
//                                             ...GatsbyImageSharpFluid
//                                         }
//                                     }
//                                 }
//                             }
//                         }
//                     }
//                 }
//             }
//         }
//         site {
//             siteMetadata {
//                 title
//                 subtitle
//             }
//         }
//     }
// `
