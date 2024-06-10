<?php

namespace App\Http\Controllers;

use App\Models\lecturercourse;
use App\Http\Requests\StorelecturercourseRequest;
use App\Http\Requests\UpdatelecturercourseRequest;
use Illuminate\Support\Facades\DB;
use TheSeer\Tokenizer\Exception;

class LecturerCourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json(Lecturercourse::all());
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorelecturercourseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorelecturercourseRequest $request)
    {
        //
        try{
            $lectC = LecturerCourse::create($request->all());
            return response()->json([
                'status'=>200,
                'message'=> 'Successfully registered',
                'data' => $lectC
            ]);
        }catch(Exception $e){
            return response()->json([
                'error' => $e
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\lecturercourse  $lecturercourse
     * @return \Illuminate\Http\Response
     */
    public function show($lecturercourse)
    {
        //
        $courses = DB::table('lecturer_courses as lc')
                    ->where('lc.LectId',$lecturercourse)
                    ->join('courses','lc.CId','=','courses.id')
                    ->select('courses.id','courses.CName','lc.CId','lc.LectId')
                    ->get();

        return response()->json([
            'status' => 200,
            'data' => $courses,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatelecturercourseRequest  $request
     * @param  \App\Models\lecturercourse  $lecturercourse
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatelecturercourseRequest $request,$lecturercourse)
    {
        //
        $lectC = Lecturercourse::findOrFail($lecturercourse);
        $lectC->update($request->all());

        return response()->json([
            'status' => 200,
            'message' => 'Successfully updated',
            'data' => $lectC
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\lecturercourse  $lecturercourse
     * @return \Illuminate\Http\Response
     */
    public function destroy( $lecturercourse)
    {
        //
        $lectC = Lecturercourse::destroy($lecturercourse);
        return response()->json([
            'status' => 200,
            'message' => 'Successfully deleted',
            'data' => $lectC
        ]);
    }
}
