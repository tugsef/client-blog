import React from 'react'
import siteMetadata from '../utils/siteMetadata'
import { FaLinkedin, FaSquareXTwitter } from 'react-icons/fa6'
import { FaDribbbleSquare, FaGithubSquare } from 'react-icons/fa'

function SocialComponent() {
  return (
    <div className="fixed top-1/2 left-2 transform  -translate-y-1/2 z-50">
    <a
      href={siteMetadata.linkedin}
      className=" w-6 h-6"
      aria-label="Reach out to me via LinkedIn"
      target="_blank"
    >
      <FaLinkedin className="hover:scale-125 transition-all ease duration-200 w-8 h-8" />
    </a>
    <a
      href={siteMetadata.twitter}
      className=" w-6 h-6"
      aria-label="Reach out to me via Twitter"
      target="_blank"
    >
      <FaSquareXTwitter className="hover:scale-125 transition-all ease duration-200 w-8 h-8" />
    </a>
    <a
      href={siteMetadata.github}
      className=" w-6 h-6"
      aria-label="Check my profile on Github"
      target="_blank"
    >
      <FaGithubSquare className="hover:scale-125 transition-all ease duration-200 w-8 h-8" />
    </a>
    <a
      href={siteMetadata.dribbble}
      className=" w-6 h-6"
      aria-label="Check my profile on Dribbble"
      target="_blank"
    >
      <FaDribbbleSquare className="hover:scale-125 transition-all ease duration-200 w-8 h-8" />
    </a>
  </div>
  )
}

export default SocialComponent