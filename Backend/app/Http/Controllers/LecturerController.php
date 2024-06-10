<?php

namespace App\Http\Controllers;

use App\Models\lecturer;
use App\Http\Requests\StorelecturerRequest;
use App\Http\Requests\UpdatelecturerRequest;

class LecturerController extends Controller
{
   /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function index()
   {
      //
      return response()->json(Lecturer::all());
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param  \App\Http\Requests\StorelecturerRequest  $request
    * @return \Illuminate\Http\Response
    */
   public function store(StorelecturerRequest $request)
   {
      //
      $lect = Lecturer::create($request->all());
      return response()->json([
         'status'=>200,
         'message'=> 'Successfully registered',
         'data' => $lect
      ]);
   }

   /**
    * Display the specified resource.
    *
    * @param  \App\Models\lecturer  $lecturer
    * @return \Illuminate\Http\Response
    */
   public function show($lecturer)
   {
      //
      return Lecturer::findOrFail($lecturer);
   }

   /**
    * Update the specified resource in storage.
    *
    * @param  \App\Http\Requests\UpdatelecturerRequest  $request
    * @param  \App\Models\lecturer  $lecturer
    * @return \Illuminate\Http\Response
    */
   public function update(UpdatelecturerRequest $request, $lecturer)
   {
      //
      $lect = Lecturer::findOrFail($lecturer);
      $lect->update($request->all());

      return response()->json([
         'status' => 200,
         'message' => 'Successfully updated',
         'data' => $lect
      ]);
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Models\lecturer  $lecturer
    * @return \Illuminate\Http\Response
    */
   public function destroy( $lecturer)
   {
      //
      $lect = Lecturer::destroy($lecturer);
      return response()->json([
         'status' => 200,
         'message' => 'Successfully deleted',
         'data' => $lect
      ]);
   }
}
