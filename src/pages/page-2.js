import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <div className="max-w-xl rounded overflow-hidden lg:shadow-lg lg:flex m-auto">
      <div className="px-6 py-4">
        <div className="text-gray-700 text-base">
          <h1>Hi from the second page</h1>
          <p>Welcome to page 2</p>
          <Link to="/" className="text-teal-500 hover:text-teal-800">
            Go back to the homepage
          </Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
