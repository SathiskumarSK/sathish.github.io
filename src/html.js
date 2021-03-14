import React from "react"
import PropTypes from "prop-types"

// const InitializeColorMode = () => (
//   <script
//     key="varun-ca-no-flash"
//     dangerouslySetInnerHTML={{
//       __html: `(function() { try {
//         var mode = localStorage.getItem('theme');
//         if (mode === null) return;
//         var lightordark = mode === true ? dark : light;
//         document.body.classList.add('varun-ca-' + mode);
//       } catch (e) {} })();`,
//     }}
//   />
// );

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script
          dangerouslySetInnerHTML={{
            __html: `
            (function() { try {
              var root = document.getElementsByTagName( 'html' )[0];
              var mode = localStorage.getItem('theme');
              if (mode === null || mode === "true") {
                root.classList.add('dark-mode');
              } else {
                root.classList.add('light-mode');
              }
            } catch (e) {} })();
                `,
          }}
        />
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
