<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Lecturer extends Model
{
   use HasFactory,HasApiTokens;

   protected $fillable = [
      'LectNumber',
      'LectName',
      'LectEmail',
      'LectContacts',
      'LectDateOfBirth',
      'LectPassword',
      'LectCountry',
      'LectCity',
      'LectVillage',
      'LectZipCode',
      'LectSalary',
      'State',
   ];
protected $hidden = ['LectPassword'];

   public function lecturerCourses()
   {
      # code...
      return $this->hasMany(LecturerCourse::class,'lecturer_courses','LectId');
   }
}
