<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Student extends Model
{
   use HasFactory,HasApiTokens;
   protected $fillable = [
      'StdNumber',
      'StdName',
      'StdEmail',
      'StdContacts',
      'StdDateOfBirth',
      'StdPassword',
      'StdCountry',
      'StdCity',
      'StdVillage',
      'StdZipCode',
      'State'
   ];
   protected $hidden = ['StdPassword'];
   public function marks()
   {
      # code...
      return $this->hasMany(Mark::class);
   }
}
