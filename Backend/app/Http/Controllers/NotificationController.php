<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Student;
use App\Models\Lecturer;

class NotificationController extends Controller
{
   public function getNotifications()
   { 
      $newStudents = Student::where('State','New')->get();
   
      $newLecturers = Lecturer::where('State','New')->get();
      $new = (!empty($newStudents)&&!empty($newLecturers))?[]:(!empty($newStudents))?[$newLecturers]:(!empty($newLecturers))?$newStudents:[$newLecturers,$newStudents];
      return response()->json($new);
   }
}
