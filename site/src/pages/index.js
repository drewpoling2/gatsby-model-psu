/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import Layout from "gatsby-theme-theme-ui-example/src/components/Layout/Layout"
import { Nav } from "gatsby-theme-theme-ui-example/src/components/Nav/Nav"
import { HomeMain } from "../components/HomeMain"
import { CustomFooter } from "gatsby-theme-theme-ui-example/src/components/CustomFooter/CustomFooter"
import { testNavData } from "./navData"
import { footerLinkData } from "./footerLinkData"
import altoonaLogo from "../../assets/logo.png"
import beaverStadium from "../../assets/beaver-stadium-fireworks_0.jpeg"

export default () => (
  <Layout
    navChild={<Nav imageSrc={altoonaLogo} navData={testNavData} />}
    mainChild={<HomeMain imageSrc={beaverStadium} />}
    footerChild={
      <CustomFooter imageSrc={altoonaLogo} footerLinkData={footerLinkData} />
    }
  ></Layout>
)
