@include('layouts.header')
    <main>
        <div class="gs-breadcumb">
            <div class="contaier">
                <div class="row">
                    <div class="col">
                        <div class="text-center">
                            <h2>Courses</h2>
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

                    @foreach($courses as $course)
                    <div class="col-lg-4">
                        <div class="course-box">
                            <div class="text-center">
                                <img src="Screenshot_11.png" class="img-fluid" onClick="location.href =  `{{'courses/' . $course->id}}`">
                            </div>
                            <div class="desc-box">
                                <h4>{{$course->course_name}}</h4>
                                <h5><strike>{{$course->course_discount_price ? 'Rs.' . $course->course_discount_price : ''}}</strike> Rs. {{$course->course_price}} </h5>
                            </div>
                        </div>
                    </div>
                    @endforeach



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
