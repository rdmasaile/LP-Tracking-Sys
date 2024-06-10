<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateStudentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('students', function (Blueprint $table) {
            $table->id();
            $table->string('StdNumber')->unique();
            $table->string('StdName');
            $table->string('StdEmail')->unique();
            $table->string('StdContacts')->nullable();
            $table->date  ('StdDateOfBirth');
            $table->string('StdPassword');
            $table->string('StdCountry');
            $table->string('StdCity');
            $table->string('StdVillage');
            $table->string('StdZipCode');
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
        Schema::dropIfExists('students');
    }
}
