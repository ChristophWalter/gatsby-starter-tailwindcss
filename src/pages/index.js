import React from "react"
import { graphql, Link, StaticQuery } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import "../main.css"
import Img from "gatsby-image"

const IndexPage = () => {
  return (
    <StaticQuery
      query={graphql`
        query {
          placeholderImage: file(relativePath: { eq: "gatsby-astronaut.png" }) {
            childImageSharp {
              fluid(maxWidth: 300) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      `}
      render={data => (
        <Layout>
          <SEO title="Home" />
          <div className="max-w-xl rounded overflow-hidden lg:shadow-lg lg:flex m-auto px-6 py-2">
            <div className="w-48 flex-none flex items-center">
              <Img
                className="w-full object-contain"
                fluid={data.placeholderImage.childImageSharp.fluid}
              />
            </div>
            <div className="pt-4 lg:pt-0 lg:pl-4">
              <div className="font-bold text-xl mb-2">
                <span role="img" aria-label="heart">❤</span>️ Gatsby and Tailwind
              </div>
              <div className="text-gray-700 text-base">
                <h1>Hi people</h1>
                <p>Welcome to your new Gatsby site.</p>
                <p>Now go build something great.</p>
                <Link
                  to="/page-2/"
                  className="text-teal-500 hover:text-teal-800"
                >
                  Go to page 2
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      )}
    />
  )
}

export default IndexPage
