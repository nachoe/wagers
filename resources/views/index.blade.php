<!doctype html>
<html lang="{{ app()->getLocale() }}">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link href="{{url('')}}/css/app.css" rel="stylesheet" type="text/css">
    <title>React!</title>
</head>
<body>
    <div class="container"></div>
</body>

<script src="{{url('')}}/js/app.js"></script>
</html>
