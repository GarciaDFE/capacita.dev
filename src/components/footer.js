import React from 'react'
import styled from 'styled-components'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Footer = ({ siteTitle }) => {
  const data = useStaticQuery(graphql`
    query {
      file(relativePath: { eq: "logo-capacita-dev-transparent-52.png" }) {
        childImageSharp {
          fixed {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
    `)

  return (
    <FooterWrapper>
      <Img
        fixed={data.file.childImageSharp.fixed}
        alt='Logo do projeto Capacita.dev'
        style={{
          opacity: '0.5'
        }}
      />
      <ul>
        <FooterListItem><a href='#'>Blog</a></FooterListItem>
        <FooterListItem><a href='#'>GitHub</a></FooterListItem>
      </ul>
      <span style={{ width: '100%', textAlign: 'center' }}>
        © {new Date().getFullYear()} - <a href='https://twitter.com/etc_william'>William Oliveira</a> , desenvolvido com  <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </span>
    </FooterWrapper>
  )
}

const FooterWrapper = styled.footer`
    color: white;
    background-color: #1f2229;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    flex-wrap: wrap;
    min-height: 220px;
    max-height: 220px;

    a {
        color: white
    }
`

const FooterListItem = styled.li`
  list-style: none
`

export default Footer
