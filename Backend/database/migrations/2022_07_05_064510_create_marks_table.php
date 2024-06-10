<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use App\Models\Student;
use App\Models\Course;

class CreateMarksTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('marks', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Student::class,'StdId');
            $table->foreignIdFor(Course::class,'CId');
            $table->integer('Test')->nullable();
            $table->integer('Assignment')->nullable();
            $table->integer('Exam')->nullable();
            $table->timestamps();
            
            $table->index(['StdId','CId']);
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('marks');
    }
}
