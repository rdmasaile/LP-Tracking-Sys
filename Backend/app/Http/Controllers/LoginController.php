<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Student;
use App\Models\Lecturer;
use App\Models\Admin;

class LoginController extends Controller
{
   public function login(Request $request)
   {
      //
      $fields = $request->validate([
         'Email'=>'required|string',
         'Password'=>'required'
      ]);

      $user = Student::where('StdEmail',$fields['Email'])->first();
      $position = 'student';

      if(!$user || !($fields['Password']===$user->StdPassword)){
         $user = Lecturer::where('LectEmail',$fields['Email'])->first();
         $position = 'lecturer';

         if(!$user || !($fields['Password']===$user->LectPassword)){

               $user = Admin::where('AdminEmail',$fields['Email'])->first();
               $position = 'admin';
               
               if(!$user || !($fields['Password']===$user->AdminPassword)){
                  return response()->json([
                     'status' => 401,
                     'message' => 'Invalid Details or not Registered'
                  ]);
               }
         }
      }
      
      $token = $user->createToken('myapp')->plainTextToken;

      return response()->json([
         'status' => 200,
         'position' => $position,
         'data' => $user,
         'token' => $token,
      ]);
   }

    
}
