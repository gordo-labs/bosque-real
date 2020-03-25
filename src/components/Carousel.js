import Img from "gatsby-image"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import Carousel, { Dots } from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import styled from "styled-components"

export const BosqueCarousel = () => {
  const query1 = useStaticQuery(graphql`
    query {
      allFile(
        filter: {
          relativePath: { regex: "/slides/" }
          sourceInstanceName: { eq: "images" }
        }
        sort: { fields: relativePath, order: ASC }
      ) {
        edges {
          node {
            relativePath
            childImageSharp {
              fluid(maxWidth: 2500, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)
  const slides = query1.allFile.edges

  const ImageContainer = styled.div`
    width: 100vw;
    //max-height: calc(100vh - 10px);
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #2d2b2b;
    padding-bottom: 20px;
    .gatsby-image-wrapper {
      width: calc(100% - 40px);
      max-height: calc(100vh - 40px);
      picture {
        img {
          object-fit: contain !important;
        }
      }
    }
  `

  /*  return (
    <Carousel slidesPerScroll={1} slidesPerPage={1} showArrows={true}>
      {slides.map((s, i) => {
        return (
          <ImageContainer key={i}>
            <Img
              fluid={s.node.childImageSharp.fluid}
              // src={s.node.childImageSharp.fluid.srcWebp}
            ></Img>
          </ImageContainer>
        )
      })}
    </Carousel>
  )*/

  return (
    <>
      {slides.map((s, i) => {
        return (
          <ImageContainer key={i}>
            <Img
              fluid={s.node.childImageSharp.fluid}
              // src={s.node.childImageSharp.fluid.srcWebp}
            ></Img>
          </ImageContainer>
        )
      })}
    </>
  )
}
