<DOCTYPE html>
<html> 
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    <script src="{{ asset('js/app.js') }}" defer></script>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">

    <!-- Styles -->
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
    <main class="py-4">
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <div class="card">
                        <form class="bg-gray-100" action="/form" method="POST">
                            @csrf
                            <h1>Student form </h1>
                            <div class="row mb-3">
                                <label for="sNumber">StudentNumber</label>
                                <input type="text" name="sNumber" id="sNumber">
                            </div>
                            <div class="row mb-3">
                                <label for="fname">FirstName</label>
                                <input type="text" name="fname" id="fname">
                            </div>
                            <div class="row mb-3">
                                <label for="lname">LastName</label>
                                <input type="text" name="lname" id="lname">
                            </div>
                            <button class="btn bg-primary">Register</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </main>
</body>
</html>