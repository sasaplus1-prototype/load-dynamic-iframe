(function(){
  'use strict';

  var iframe = document.createElement('iframe');

  function onLoad() {
    console.log('onLoad');
    console.log(iframe.contentDocument.body.scrollWidth);
  }

  iframe.addEventListener('load', onLoad, false);

  iframe.srcdoc = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <meta name="viewport" content="width=device-width,initial-scale=1.0">
        <title>iframe</title>
        <style>
          body { margin: 0; padding: 0; }
        </style>
      </head>
      <body>
        <div style="width: 650px; background-color: red;">Hello!</div>
      </body>
    </html>
  `;

  document.body.appendChild(iframe);

}());
