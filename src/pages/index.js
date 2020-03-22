import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import { BosqueCarousel } from "../components/Carousel"
import styled from "styled-components"

const Base = styled.section`
    width: 100vw;
    height: 100vh;
  `

export default function IndexPage() {
  return (
      <Base>
        {/*<BlogList />*/}
        <BosqueCarousel/>
      </Base>
  )
}
