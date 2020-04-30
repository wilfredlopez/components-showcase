import {
  WlAppbar,
  WlButton,
  WlDrawer,
  WlDrawerBody,
  WlDrawerCloseButton,
  WlDrawerContent,
  WlDrawerFooter,
  WlDrawerHeader,
} from "@wilfredlopez/react"
import React, { PropsWithChildren, useState } from "react"
import { Link } from "react-router-dom"
import MenuItem from "./MenuItem"

interface Props extends PropsWithChildren<{}> {
  title: string
}

const AppHeader = ({ title, children }: Props) => {
  const [isOpen, setIsOpen] = useState(false)
  const drawerRef = React.useRef<HTMLWlDrawerElement>(null)

  React.useEffect(() => {
    if (drawerRef.current) {
      if (drawerRef.current.isOpen === false) {
        document.body.style.overflow = ""
      }
    }
  }, [drawerRef, isOpen])

  return (
    <WlAppbar>
      <WlDrawer
        ref={drawerRef}
        isOpen={isOpen}
        onDrawerOpenStateChange={(e) => {
          setIsOpen(e.detail.isOpen)
        }}
      >
        <WlDrawerContent>
          <WlDrawerHeader>Menu</WlDrawerHeader>
          <WlDrawerCloseButton color="light" />
          <WlDrawerBody className="wl-no-padding">
            <MenuItem title="Home" href="/" />
            <MenuItem title="ShowCase" href="/showcase" />
          </WlDrawerBody>
          <WlDrawerFooter fixed>
            <p>@Wilfredlopez/react</p>
          </WlDrawerFooter>
        </WlDrawerContent>
      </WlDrawer>
      <h1 className="wl-no-margin">
        <Link to="/">{title}</Link>
      </h1>

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
