import React from "react"
import Homepage from "@lekoarts/gatsby-theme-minimal-blog/src/components/homepage"

type Props = {
  data: {
    allPost: any
    [key: string]: string
  }
  [key: string]: any
}

export default function MinimalBlogCoreHomepage({ ...props }: Props) {
  const {
    data: { allPost },
  } = props

  return <Homepage posts={allPost.node} {...props} />
}
