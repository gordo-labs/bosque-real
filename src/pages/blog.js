import React from "react"
import Layout from "../components/Layout"
import useSiteMetaData from "../static_queries/useSiteMetadata"
import WpList from "../components/WpList"

export default function Blog() {
  const { infoData } = useSiteMetaData()
  return (
    <Layout>
      <WpList/>
    </Layout>
  )
}
