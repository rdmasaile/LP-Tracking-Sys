<?php

namespace App\Http\Controllers;

use App\Models\student;
use App\Http\Requests\StorestudentRequest;
use App\Http\Requests\UpdatestudentRequest;

class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json( Student::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorestudentRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorestudentRequest $request)
    {
        //
        $std = Student::create($request->all());
        return response()->json([
            'status'=>200,
            'message'=> 'Successfully registered',
            'data' => $std
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\student  $student
     * @return \Illuminate\Http\Response
     */
    public function show( $student)
    {
        //
        return response()->json(Student::findOrFail($student));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatestudentRequest  $request
     * @param  \App\Models\student  $student
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatestudentRequest $request,$student)
    {
        //
        $std = Student::findOrFail($student);
        $std->update($request->all());

        return response()->json([
            'status' => 200,
            'message' => 'Successfully updated',
            'data' => $std
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\student  $student
     * @return \Illuminate\Http\Response
     */
    public function destroy(student $student)
    {
        //
        $std = Student::destroy($student);
        return response()->json([
            'status' => 200,
            'message' => 'Successfully deleted',
            'data' => $std
        ]);
    }
}
