import React from "react"
import Router from "./Router"
import { WlAppbar } from "@wilfredlopez/react"

function App() {
  return (
    <div className="App">
      <Router />
      <WlAppbar color="medium">
        <footer>
          <h1 color="dark" className="wl-padding-start">
            @wilfredlopez/react
          </h1>
        </footer>
      </WlAppbar>
    </div>
  )
}

export default App
