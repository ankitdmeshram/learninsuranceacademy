<?php

namespace App\Http\Controllers;

use App\Models\Course;
use App\Models\Lesson;
use App\Models\Order;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use PhpParser\Node\Stmt\Expression;
use PhpParser\Node\Stmt\TryCatch;

class courseController extends Controller
{

    function courses(Request $req)
    {
        return DB::select("select * FROM courses");

        // if ($req->email == null) {
        //     return DB::select("select * FROM courses");
        // } else {
        //     $order = DB::select("select course_id from orders where email = '" . $req->email . "'");
        //     $order = array_column($order, 'course_id');
        //     // $order =  implode(', ', array_column($order, 'course_id'));
        //     // return DB::select("select * from courses where id in (1,2));
        // }
    }

    function homeView()
    {
        $courses = DB::select("select * FROM courses");
        return view('home', ['courses' => $courses]);
    }

    function courseView()
    {
        $courses = DB::select("select * FROM courses");
        return view('courses', ['courses' => $courses]);
    }

    function contactView()
    {
        return view('contact');
    }

    function indCourseView(Request $req)
    {
        $courses = DB::select("select * FROM courses WHERE id = " . $req->id);
        $lessons = DB::select("select * FROM lessons WHERE course_id = " . $req->id);
        return view('course-individual', ['courses' => $courses, 'lessons' => $lessons]);
    }

    function addCourse(Request $req)
    {
        $course = new Course;
        $course->course_name = $req->course_name;
        $course->course_description = $req->course_description;
        $course->course_price = $req->course_price;
        $course->course_discount_price = $req->course_discount_price;
        $course->course_duration = $req->course_duration;
        $course->course_extended_duration = $req->course_extended_duration;
        $course->course_image = $req->course_image;
        $course->course_instructor = $req->course_instructor;

        $result = $course->save();

        if ($result) {
            return ["success" => $course];
        } else {
            return ["message" => "Something went wrong"];
        }
    }

    function deleteCourse(Request $req)
    {
        $course = Course::find($req->id);
        $result = $course->delete();

        if ($result) {
            return ["message" => " Deleted Successfully"];
        } else {
            return ["message" => "Something went wrong"];
        }
    }

    function updateCourse(Request $req)
    {
        $course = Course::find($req->id);
        $course->course_name = $req->course_name;
        $course->course_description = $req->course_description;
        $course->course_price = $req->course_price;
        $course->course_discount_price = $req->course_discount_price;
        $course->course_duration = $req->course_duration;
        $course->course_extended_duration = $req->course_extended_duration;
        $course->course_image = $req->course_image;
        $course->course_instructor = $req->course_instructor;

        $result = $course->save();

        if ($result) {
            return ['success' => $course];
        } else {
            return ['message' => "Something went wrong"];
        }
    }

    function lessons()
    {
        return DB::select("select * FROM lessons");
    }

    function addLesson(Request $req)
    {
        $lesson = new Lesson;

        $lesson->course_id = $req->course_id;
        $lesson->lesson_name = $req->lesson_name;
        $lesson->lesson_description = $req->lesson_description;
        $lesson->lesson_type = $req->lesson_type;
        $lesson->lesson_url = $req->lesson_url;

        $result = $lesson->save();

        if ($result) {
            return ["success" => $lesson];
        } else {
            return ["message" => "Something went wrong"];
        }
    }

    function updateLesson(Request $req)
    {
        $lesson = Lesson::find($req->id);

        $lesson->course_id = $req->course_id;
        $lesson->lesson_name = $req->lesson_name;
        $lesson->lesson_description = $req->lesson_description;
        $lesson->lesson_type = $req->lesson_type;
        $lesson->lesson_url = $req->lesson_url;

        $result = $lesson->save();

        if ($result) {
            return ["success" => $lesson];
        } else {
            return ["message" => "Something went wrong"];
        }
    }

    function deleteLesson(Request $req)
    {
        $lesson = Lesson::find($req->id);
        $result = $lesson->delete();

        if ($result) {
            return ["message" => " Deleted Successfully"];
        } else {
            return ["message" => "Something went wrong"];
        }
    }

    function myOrders(Request $req)
    {
        $email = $req->email;
        if ($email == "null") {
            return DB::table('orders')->get();
        } else {
            return DB::table('orders')->where('email', $email)->get();
        }
        //return DB::select("SELECT * FROM orders WHERE email = " . mysqli_real_escape_string($req->email));
    }
}
