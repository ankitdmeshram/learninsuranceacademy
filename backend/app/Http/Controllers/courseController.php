<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class courseController extends Controller
{

    function courses()
    {
        return DB::select("select * FROM courses");
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
}
