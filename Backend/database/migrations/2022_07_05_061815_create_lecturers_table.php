<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLecturersTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('lecturers', function (Blueprint $table) {
            $table->id();
            $table->string('LectNumber')->unique();
            $table->string('LectName');
            $table->string('LectEmail')->unique();
            $table->string('LectContacts')->nullable();
            $table->date  ('LectDateOfBirth');
            $table->string('LectPassword');
            $table->string('LectCountry');
            $table->string('LectCity');
            $table->string('LectVillage');
            $table->string('LectZipCode');
            $table->decimal('LectSalary',7,2);
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('lecturers');
    }
}
