import React, { PropsWithChildren } from "react"
import { WlAppbar, WlButton } from "@wilfredlopez/react"
import { NavLink, Link, useHistory } from "react-router-dom"

interface Props extends PropsWithChildren<{}> {
  title: string
}

const AppHeader = ({ title, children }: Props) => {
  const history = useHistory()
  return (
    <WlAppbar>
      <h1 className="wl-no-margin">
        <Link to="/">{title}</Link>
      </h1>
      <ul>
        <li>
          <NavLink to="/">
            <WlButton
              variant="outline"
              color="dark"
              onClick={(e) => {
                e.preventDefault()
                history.replace("")
              }}
            >
              Home
            </WlButton>
          </NavLink>

          <NavLink to="/showcase" className="wl-margin-start">
            <WlButton
              variant="outline"
              color="dark"
              onClick={(e) => {
                e.preventDefault()
                history.replace("/showcase")
              }}
            >
              ShowCase
            </WlButton>
          </NavLink>
        </li>
        <li></li>
      </ul>
      {children}
      <div className="wl-hide-sm-down">
        <WlButton
          className="brand"
          variant="clear"
          color="dark"
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.npmjs.com/package/@wilfredlopez/react"
        >
          @wilfredlopez/react
        </WlButton>
      </div>
    </WlAppbar>
  )
}

export default AppHeader
