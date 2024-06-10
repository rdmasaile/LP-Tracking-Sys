<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAdminsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('admins', function (Blueprint $table) {
            $table->id();
            $table->string('AdminNumber')->unique();
            $table->string('AdminName');
            $table->string('AdminEmail')->unique();
            $table->string('AdminContacts')->nullable();
            $table->date  ('AdminDateOfBirth');
            $table->string('AdminPassword');
            $table->string('AdminCountry');
            $table->string('AdminCity');
            $table->string('AdminVillage');
            $table->string('AdminZipCode');
            $table->decimal('AdminSalary');
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
        Schema::dropIfExists('admins');
    }
}
