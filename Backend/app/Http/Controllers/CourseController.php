<?php

namespace App\Http\Controllers;

use App\Models\course;
use App\Http\Requests\StorecourseRequest;
use App\Http\Requests\UpdatecourseRequest;
use App\Models\Mark;
use App\Models\LecturerCourse;
use phpDocumentor\Reflection\Types\Array_;
use Illuminate\Support\Facades\DB;
use PHPUnit\Framework\Constraint\Count;

class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        $courses = DB::table('courses as c')
                  ->select('*')
                  ->join('marks as m','c.id','=','m.CId')   
                  ->select('c.id','c.CName','c.CCode','c.CMax','c.CMin',DB::raw('count(*) as StdDoing'))
                  ->groupby('c.id','c.CName','c.CCode','c.CMax','c.CMin')
                  ->get();
                  

        return response()->json([
         'course' => $courses
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StorecourseRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StorecourseRequest $request)
    {
        //
        $course = Course::create($request->all());
        return response()->json([
            'status'=>200,
            'message'=> 'Successfully added',
            'data' => $course
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\course  $course
     * @return \Illuminate\Http\Response
     */
    public function show($course)
    {
        //
        return response()->json(Course::findOrFail($course));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdatecourseRequest  $request
     * @param  \App\Models\course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(UpdatecourseRequest $request, $course)
    {
        //
        $sub = Course::findOrFail($course);
        $sub->update($request->all());

        return response()->json([
            'status' => 200,
            'message' => 'Successfully updated',
            'data' => $sub
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy( $course)
    {
        //
        
        $sub = Course::destroy($course);

        return response()->json([
            'status' => 200,
            'message' => 'Successfully deleted',
            'data' => $sub
        ]);
    }
    public function checkCourseLimits(){
        $stds = MarkController::countStudents();
        $stds = $stds->original;
        $courses = Course::all();        

        $coursesNotInRange = array();// array for not in range courses to be deleted

        //looping through all courses and checking which ones meet the min and max requirements
        foreach ($courses as $course) {
            foreach ($stds as $std) {
                if($course->id == $std->CId)
                {
                    //Check if students number is within the range
                    if(!($std->StdDoing >= $course->CMin && $std->StdDoing <= $course->CMax)){
                        array_push($coursesNotInRange,$course); //adding not in range courses $coursesNotInRange array
                    }
                }
            }
        }
        return response()->json([
            //'courses' => $courses,
            'coursesNotInRange'=>$coursesNotInRange
        ]);
    }
    
}
