<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('courses', function (Blueprint $table) {
            $table->id();
            $table->string('course_name');
            $table->text('course_description')->nullable();
            $table->integer('course_price');
            $table->integer('course_discount_price')->nullable();
            $table->integer('course_duration')->nullable();
            $table->integer('course_extended_duration')->nullable();
            $table->string('course_image')->nullable();
            $table->string('course_instructor')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('courses');
    }
};
