import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="max-w-xl rounded overflow-hidden lg:shadow-lg lg:flex m-auto">
      <div className="px-6 py-4">
        <div className="text-gray-700 text-base">
          <h1>NOT FOUND</h1>
          <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
