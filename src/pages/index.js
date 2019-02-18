import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Button from "../components/button"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`ruben`, `karapetyan`, `personal`, `website`, `react`, `gatsby`]} />
    <div style={{ display: "flex" }}>
      <div style={{ flex: 1, textAlign: "center" }}>
        <Image />
        <span style={{ display: "inline-block", marginTop: "1rem" }}>
          @roub<strong>kar</strong>
        </span>
        <span className="leaf small" />
        <div>
          <Button>
            Salute!
        </Button>
        </div>
      </div>
      <div style={{ flex: 1 }}>
        <h1 style={{ textAlign: "center" }}>
          About Me
          <span className="leaf" />
        </h1>
        <p style={{ maxWidth: 700, margin: "0 auto", padding: "1rem" }}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I'm Ruben Karapetyan, a front end web developer from Yerevan, Armenia. I've been creating on the web for around 5 years and have become pretty good at it!
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;I’m super passionate about development. From a technical standpoint, I spend most of my time working with JavaScript, CSS3, HTML5. New and open source web technologies make me super excited and I can’t wait to see what is to come of the web in the next few years. I learn from the community and love to share what I have learned back. I'm a tutor at Armenian Code Academy where I teach beginners JS and ReactJS. I’ve graduated from Yerevan State University’s Informatics And Applied Mathematics faculty where I obtained my Bachelor of Informatics and later Master of Informatics.
          <br /><br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Currently I'm working at crea.tech as Front End Engineer.
        </p>
      </div>
    </div>
  </Layout>
)

export default IndexPage
