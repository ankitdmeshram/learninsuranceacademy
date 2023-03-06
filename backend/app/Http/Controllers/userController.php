<?php

namespace App\Http\Controllers;

use App\Models\User;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

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

    function signIn(Request $req) {
        // $user = User::find($req->guid);/
        return DB::select("select * from users WHERE guid = :guid", ["guid"=>$req->guid]);

    }
}
