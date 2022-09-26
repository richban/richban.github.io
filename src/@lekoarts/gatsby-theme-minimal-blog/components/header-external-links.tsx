/** @jsx jsx */
import React from "react"
import { FaCcPaypal, FaGithub, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa'
import { SiNotion, SiWebpack } from 'react-icons/si'
import { jsx, Link as TLink } from "theme-ui"
import useMinimalBlogConfig from "@lekoarts/gatsby-theme-minimal-blog/src/hooks/use-minimal-blog-config"

const HeaderExternalLinks = () => {
  const { externalLinks } = useMinimalBlogConfig()
  const hoverStyle = {
    Twitter: {color: '#1DA1F2'},
    Github: {color: '#000'},
    Instagram: {
      background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
      color: 'white',
      borderRadius: '6px',
    }
  }
  return (
    <React.Fragment>

      {externalLinks && externalLinks.length > 0 && (
        <div sx={{ "a:not(:first-of-type)": { ml: 3 }, fontSize: [1, `20px`], display: 'flex', alignItems: 'center'}}>
          <defs>

      </defs>
          {externalLinks.map((link) => (
            <TLink
              key={link.url}
              href={link.url}
              target="_blank"
              sx={{display:'flex', "&>:hover": hoverStyle[link.name]}}>
              {link.name}
            </TLink>
          ))}
        </div>
      )}
    </React.Fragment>
  )
}

export default HeaderExternalLinks
