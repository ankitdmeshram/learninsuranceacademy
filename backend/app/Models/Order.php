<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    use HasFactory;

    protected $fillable = [
        'name', 'mobile', 'email', 'course_id', 'status', 'fee', 'order_id', 'transaction_id'
    ];
    //status = 0, failed,
    //status = 1, success,
    //status = 2, processing
}
