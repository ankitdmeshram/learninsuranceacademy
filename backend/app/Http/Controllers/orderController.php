<?php

namespace App\Http\Controllers;

use App\Models\Order;
use Illuminate\Http\Request;
use Anand\LaravelPaytmWallet\Facades\PaytmWallet;

class orderController extends Controller
{
    //
    // display a form for payment
    public function initiate()
    {
        return view('paytm');
    }

    public function pay(Request $req)
    {
        $amount = $req->course_amount; //Amount to be paid
        $course_id = $req->course_id;

        $userData = [
            'name' => $req->name, // Name of user
            'mobile' => $req->mobile, //Mobile number of user
            'email' => $req->email, //Email of user
            'course_id' => $course_id,
            'fee' => $amount,
            'order_id' => $req->mobile . "_" . rand(1, 1000) //Order id
        ];

        $paytmuser = Order::create($userData); // creates a new database record
        
        $payment = PaytmWallet::with('receive');

        $payment->prepare([
            'order' => $userData['order_id'],
            'user' => $paytmuser->id,
            'mobile_number' => $userData['mobile'],
            'email' => $userData['email'], // your user email address
            'amount' => $amount, // amount will be paid in INR.
            'course_id' => $course_id,
            'callback_url' => route('status') // callback URL
        ]);
        return $payment->receive();  // initiate a new payment
    }

    public function paymentCallback()
    {
        $transaction = PaytmWallet::with('receive');

        $response = $transaction->response();

        $order_id = $transaction->getOrderId(); // return a order id

        $transaction->getTransactionId(); // return a transaction id

        // update the db data as per result from api call
        if ($transaction->isSuccessful()) {
            Order::where('order_id', $order_id)->update(['status' => 1, 'transaction_id' => $transaction->getTransactionId()]);
            return redirect(route('initiate.payment'))->with('message', "Your payment is successfull.");
        } else if ($transaction->isFailed()) {
            Order::where('order_id', $order_id)->update(['status' => 0, 'transaction_id' => $transaction->getTransactionId()]);
            return redirect(route('initiate.payment'))->with('message', "Your payment is failed.");
        } else if ($transaction->isOpen()) {
            Order::where('order_id', $order_id)->update(['status' => 2, 'transaction_id' => $transaction->getTransactionId()]);
            return redirect(route('initiate.payment'))->with('message', "Your payment is processing.");
        }
        $transaction->getResponseMessage(); //Get Response Message If Available

        // $transaction->getOrderId(); // Get order id
    }
}
