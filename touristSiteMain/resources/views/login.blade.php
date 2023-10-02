<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="{{ asset('/images/images/logo-footer.png') }}" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta name="description"
      content="Tanzania Tourist Site"
    />
    <link rel="apple-touch-icon" href="{{ asset('/images/images/logo-footer.png') }}" />
    <link rel="manifest" href="{{ asset('/manifest.json') }}" />
    <title>Beka Adventure</title>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
  </head>
  <body>
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="login-root"></div>
  </body>
  <script src="{{ asset('external-js/jquery-1.11.1.min.js') }}"></script>
  <script src="{{ asset('external-js/min/plugins-min.js') }}"></script>
  <script src="{{ asset('external-js/min/app-min.js?v2') }}"></script>
</html>