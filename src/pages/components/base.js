import React from 'react';

function Base(props) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <title>{props.title}</title>
        <link rel="stylesheet" href={props.css} />
      </head>
      <body>
        <div id="home-container">
          {props.children}
        </div>
        <div id="modal-container">
        </div>
        <script src={props.js}></script>
      </body>
    </html>
  )
}

export default Base;
