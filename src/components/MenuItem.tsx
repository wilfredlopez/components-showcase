import { WlItem, WlText } from "@wilfredlopez/react"
import React from "react"
import { useHistory } from "react-router-dom"

interface Props {
  title: string
  href: string
}

const MenuItem = ({ title, href }: Props) => {
  const history = useHistory()

  return (
    <WlItem
      onClick={() => {
        history.replace(href)
      }}
      button
      lines="none"
      color="dark"
      className="margin-half"
    >
      <WlText>{title}</WlText>
    </WlItem>
  )
}

export default MenuItem
