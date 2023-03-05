<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;

class userController extends Controller
{
    //
    function signUp(Request $req) {
        $user = new User;
        $user->name = $req->name;
        $user->email = $req->email;
        $user->phone = $req->phone;
        $user->role = 2;
        $user->guid = $req->guid;

        $result = $user->save();

        if($result) {
            return ['success' => $user];
        } else {
            return ['message' => 'Something went wrong'];
        }
    }
}
