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
                    <a class="navbar-brand" href="#">
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
                                <a class="nav-link" href="">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="about">About Us</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="courses">Courses</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="courses/ind">Ind Course</a>
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

    <main>


        <div class="hero-slider">
            <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-inner">
                    <div class="carousel-item active" data-bs-interval="3000">
                        <div class="gs-sli-1">
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-8">
                                        <h2>Insurance Coaching & Consultant for your career</h2>
                                        <button class="gs-btn">Learn More</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- <div class="carousel-item" data-bs-interval="3000">
                        <div class="gs-sli-1">

                        </div>

                    </div>
                    <div class="carousel-item" data-bs-interval="3000">
                        <div class="gs-sli-1">

                        </div>
                    </div> -->
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval"
                    data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>


        <div class="gs-why">
            <div class="container">
                <div class="row">
                    <div class="col-12 pb-4">
                        <div class="text-center">
                            <h3>Why Learn Insurance Online</h3>
                            <h2 class="pt-2">Making learning more comfortable and simple for you.</h2>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="text-center gs-card">
                            <img src="quality.png" alt="quality" class="img-fluid m-2 pb-2" width="70">
                            <h4>Quality Education</h4>
                            <p>Learning with a us ensures that you receive a quality education from experienced
                                instructors.</p>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="text-center gs-card">
                            <img src="quality.png" alt="quality" class="img-fluid m-2 pb-2" width="70">
                            <h4>Personal Growth</h4>
                            <p>Learning is a lifelong process, and attending a reputable institution can help you
                                develop new skills, gain knowledge.</p>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="text-center gs-card">
                            <img src="quality.png" alt="quality" class="img-fluid m-2 pb-2" width="70">
                            <h4>Personalized Support</h4>
                            <p>Reputable institutions often offer personalized support such as academic advising,
                                tutoring, and career counseling</p>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="text-center gs-card">
                            <img src="quality.png" alt="quality" class="img-fluid m-2 pb-2" width="70">
                            <h4>Quality Education</h4>
                            <p>Learning with a us ensures that you receive a quality education from experienced
                                instructors.</p>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="text-center gs-card">
                            <img src="quality.png" alt="quality" class="img-fluid m-2 pb-2" width="70">
                            <h4>Personal Growth</h4>
                            <p>Learning is a lifelong process, and attending a reputable institution can help you
                                develop new skills, gain knowledge.</p>
                        </div>
                    </div>

                    <div class="col-lg-4">
                        <div class="text-center gs-card">
                            <img src="quality.png" alt="quality" class="img-fluid m-2 pb-2" width="70">
                            <h4>Personalized Support</h4>
                            <p>Reputable institutions often offer personalized support such as academic advising,
                                tutoring, and career counseling</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="gs-courses">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-lg-12 pb-5  ">
                        <div class="text-center">
                            <h3>What are you interested in learning?</h3>
                        </div>
                    </div>


                    <div class="col-lg-4">
                        <div class="course-box">
                            <div class="text-center">
                                <img src="Screenshot_11.png" class="img-fluid">
                            </div>
                            <div class="desc-box">
                                <h4>Course Name</h4>
                                <h5><strike>Rs.6,000</strike> Rs.4,999 </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="course-box">
                            <div class="text-center">
                                <img src="Screenshot_11.png" class="img-fluid">
                            </div>
                            <div class="desc-box">
                                <h4>Course Name</h4>
                                <h5><strike>Rs.6,000</strike> Rs.4,999 </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4">
                        <div class="course-box">
                            <div class="text-center">
                                <img src="Screenshot_11.png" class="img-fluid">
                            </div>
                            <div class="desc-box">
                                <h4>Course Name</h4>
                                <h5><strike>Rs.6,000</strike> Rs.4,999 </h5>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div class="gs-home-contact">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <h4>Send us a message</h4>
                        <div class="gs-form">
                            <form>

                                <div class="form-group">
                                    <label for="name">Name</label>
                                    <input type="text" name="name" class="form-control" id="">
                                </div>
                                <div class="form-group">
                                    <label for="name">Email</label>
                                    <input type="text" name="email" class="form-control" id="">
                                </div>
                                <div class="form-group">
                                    <label for="name">Phone</label>
                                    <input type="text" name="Phone" class="form-control" id="">
                                </div>
                                <div class="form-group">
                                    <label for="name">Message</label>
                                    <textarea name="message" class="form-control" id="" cols="30" rows="10"></textarea>
                                </div>
                                <br>
                                <button type="submit" class="btn gs-btn-pri btn-lg">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60282.82269023739!2d73.06456237007176!3d19.20933047483929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7958ef72d8707%3A0x84bf6ab96e280b08!2sDombivli%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1679079437885!5m2!1sen!2sin"
                            style="" allowfullscreen="" loading="lazy"
                            referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </div>


    </main>
    <footer>
        <!-- place footer here -->
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <img src="logo.png" class="img-fluid logo" alt="Learn Insurance Academy">
                    <p>Learning with a us ensures that you receive a quality education from experienced instructors.
                    </p>
                </div>

                <div class="col-sm-2">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <a href="#"> Home </a>
                        </li>
                        <li>
                            <a href="#"> About Us </a>
                        </li>
                        <li>
                            <a href="#"> Contact</a>
                        </li>
                        <li>
                            <a href="#"> Privacy </a>
                        </li>
                        <li>
                            <a href="#"> T & C </a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-2">
                    <h4>Quick Links</h4>
                    <ul>
                        <li>
                            <a href="#"> Courses </a>
                        </li>
                        <li>
                            <a href="#"> Dashboard </a>
                        </li>
                        <li>
                            <a href="#"> Sign In </a>
                        </li>
                        <li>
                            <a href="#"> Sign Up</a>
                        </li>
                        <li>
                            <a href="#"> Reset Password </a>
                        </li>
                    </ul>
                </div>
                <div class="col-sm-4">
                    <h4 class="pb-2">Get In Touch: </h4>
                    <h5> +91 123 456 7890 </h5>
                    <h5> example@example.com </h5>
                </div>

            </div>
        </div>
    </footer>
    <!-- Bootstrap JavaScript Libraries -->
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
        </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
        </script>
</body>

</html>
