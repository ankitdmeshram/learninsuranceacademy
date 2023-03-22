<!doctype html>
<html lang="en">

<head>
    <title>Learn Insurance Academy</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS v5.2.1 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">

    <style>
        * {
            padding: 0;
            margin: 0;
            font-family: sans-serif;
        }

        .top-header {
            background: black;
            color: white;
        }

        .top-header p {
            font-size: 18px;
            margin-bottom: 0;
            padding: 5px 20px;
        }

        .top-header p span {
            float: right;
        }

        .mid-header {
            padding: 0px;
            box-shadow: 1px 1px 2px rgba(184, 184, 184, 0.556);
        }

        .mid-header .nav-link {
            font-weight: 600;
            font-size: 18px;
            padding-right: 20px !important;
            padding-left: 20px !important;
            color: black;
        }

        .gs-sli-1 {
            background: url("bg.jpg");
            height: 80vh;
            width: 100vw;
            background-image: linear-gradient(rgba(0, 0, 0, 0.596), rgba(0, 0, 0, 0.596)), url("bg.jpg");
        }

        .hero-slider {
            color: white;
        }

        .hero-slider h2 {
            font-weight: 700;
            font-size: 60px;
            padding: 150px 100px 10px;
        }

         .gs-btn {
            border: none;
            padding: 10px 30px;
            margin-left: 100px;
            font-weight: 600;
            background-color: #016fbe;
            border-radius: 2px;
            color: white;
        }

        .gs-why {
            padding: 70px 10px;
        }

        .gs-why h3 {
            font-weight: 700;
            color: #006ac1;
        }

        .gs-card {
            background-color: rgb(230, 230, 255);
            padding: 50px 20px;
            margin: 10px 20px;
        }

        .gs-card p {
            padding: 20px;
        }

        .gs-card h4 {
            font-weight: 600;
        }

        .gs-courses {
            padding: 75px 10px;
            background: linear-gradient(#008cff18, #61b8ff13);
        }

        .gs-courses h3 {
            font-weight: 600;
        }

        .course-box {
            padding: 10px;
            background: white;
            margin: 10px auto;
        }

        .course-box img {
            border-radius: 5px;
        }

        .course-box .desc-box {
            padding: 10px 5px 5px 5px;
        }

        .course-box .desc-box h4 {
            font-weight: 600;
        }

        .gs-home-contact {
            padding: 100px 10px;
        }

        .gs-home-contact h4 {
            font-weight: 600;
        }

        .gs-home-contact form {
            padding: 5px;
        }

        .gs-home-contact form label {
            padding: 5px;
        }

        .gs-home-contact iframe {
            height: -webkit-fill-available;
            border: 0;
            width: 100%;
            margin: 10px auto;
        }

        .gs-btn-pri {
            background-color: #065CA9;
            color: white
        }

        footer {
            background-color: #065CA9;
            color: white;
            padding: 75px 10px;
        }

        footer .logo {
            height: 70px;
            margin-bottom: 20px;
        }

        footer ul {
            list-style: none;
            padding-left: 0px;
        }

        footer ul li {
            padding: 7px;
        }

        footer ul li a {
            color: white;
            text-decoration: none;
        }

        footer ul li a:hover {
            color: white;
        }

        footer h5 {
            padding: 10px 0px;
        }

        @media (max-width: 992px) {
            .gs-sli-1 {
                height: 48vh;
            }

            .hero-slider h2 {
                font-size: 30px;
                padding: 50px 20px 10px 50px;
            }

            .hero-slider .gs-btn {
                margin-left: 50px;
            }
        }

         /* //Breadcumb css/ */
         .gs-breadcumb {
            padding: 50px 10px;
            background-color: #065CA9;
            overflow: hidden;
        }

        .gs-breadcumb h2 {
            font-weight: 600;
            color: white;
        }

        .gs-about-main {
            padding: 100px 10px;
            background-color: #006ac11a;
        }

        .gs-about-main h3 {
            font-weight: 600;
        }


        @media (max-width: 992px) {
            .gs-about-main {
                padding: 50px 10px;
            }
        }

         /* Course main css / */
         .course-main {
            padding: 75px 10px;
            background: #EAF5FF;
        }

        .course-main h5 {
            font-weight: 600;
            color: rgba(0, 0, 0, 0.448);
        }

        .course-main h3 {
            font-weight: 700;
            font-size: 50px;
            padding: 20px 0px 15px 0px;
        }

        .course-main p {
            font-size: 18px;
            padding: 10px 0px;
        }

        .gs-tags {
            background: #065CA9;
            display: inline-block;
            color: white;
            border-radius: 5px;
            font-size: 14px !important;
            padding: 2px 12px !important;

        }

        .gs-cou-box {
            padding: 10px;
            background: white;
            border-radius: 3px;
        }

        .text-bold {
            font-weight: 600;
        }

        .gs-lessonsss {
            padding: 15px 10px;
            background: #EAF5FF;
            margin: 10px;
            font-weight: 600;
        }

        .gs-course-content {
            padding: 75px 10px;
        }
    </style>


</head>

<body>
    <header>

        <div class="top-header">
            <div class="container">
                <div class="row">
                    <p>Prof. ABC DEF <span> +91 1234567890</span></p>
                </div>
            </div>
        </div>

        <div class="mid-header">
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container">
                    <a class="navbar-brand" href="./">
                        <img src="logo.png" class="img-fluid" width="200" alt="Learn Insurance Academy">
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link" href="./">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="courses">Courses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="contact">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        </div>
    </header>
