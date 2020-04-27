import React from "react"
import { WlGrid, WlRow, WlCol } from "@wilfredlopez/react"
import marked, { Renderer } from "marked"
import highlightjs from "highlight.js"

const escapeMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
}

type Char = keyof typeof escapeMap

function escapeForHTML(input: string) {
  return input.replace(/([&<>'"])/g, (char) => escapeMap[char as Char])
}

// Create your custom renderer.
const renderer = new Renderer()

interface Props {
  markdownContent: string
}

const MarkDown = ({ markdownContent }: Props) => {
  const mardownFormattedContent = marked(markdownContent, {
    renderer: renderer,
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: true,
    smartLists: true,
    smartypants: false,
    xhtml: false,
    highlight: (code, language) => {
      // Check whether the given language is valid for highlight.js.
      const validLang = !!(language && highlightjs.getLanguage(language))

      // Highlight only if the language is valid.
      // highlight.js escapes HTML in the code, but we need to escape by ourselves
      // when we don't use it.
      const highlighted = validLang
        ? highlightjs.highlight(language, code).value
        : escapeForHTML(code)

      console.log(language)

      // Render the highlighted code with `hljs` class.
      return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`
    },
  })
  return (
    <WlGrid>
      <WlRow>
        <WlCol sizeMd="8" offsetMd="2">
          <div
            style={{
              //   height: "100%",
              //   borderRadius: "4px",
              //   border: "none",
              //   boxShadow: "2px 2px 10px #999",
              fontSize: "100%",
              lineHeight: "inherit",
              overflow: "hidden",
              //   background: "#fff",
              //   padding: "8px 16px",
              //   color: "#000",
            }}
            dangerouslySetInnerHTML={{ __html: mardownFormattedContent }}
          ></div>
        </WlCol>
      </WlRow>
    </WlGrid>
  )
}

export default MarkDown
