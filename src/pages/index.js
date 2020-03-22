import React from "react"
import Layout from "../components/Layout"
import BlogList from "../components/BlogList"
import { BosqueCarousel } from "../components/Carousel"
import styled from "styled-components"
import { Helmet } from "react-helmet"
import MetaHelmet from "../components/MetaHelmet"

const Base = styled.section``
export default function IndexPage() {
  return (
    <>
      <MetaHelmet>
      </MetaHelmet>
      <Base>
        {/*<BlogList />*/}
        <BosqueCarousel />
      </Base>
    </>
  )
}
