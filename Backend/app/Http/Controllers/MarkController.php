<?php

namespace App\Http\Controllers;

use App\Models\mark;
use App\Http\Requests\StoremarkRequest;
use App\Http\Requests\UpdatemarkRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Http\Request;
use App\Http\Resources\MarkResource;

class MarkController extends Controller
{
   /**
    * Display a listing of the resource.
    *
    * @return \Illuminate\Http\Response
    */
   public function index()
   {
      //
      return MarkResource::collection(Mark::paginate());
   }

   /**
    * Store a newly created resource in storage.
    *
    * @param  \App\Http\Requests\StoremarkRequest  $request
    * @return \Illuminate\Http\Response
    */
   public function store(StoremarkRequest $request)
   {
      //
      $mark = Mark::create($request->all());
      return response()->json([
         'status'=>200,
         'message'=> 'Successfully registered',
         'data' => $mark
      ]);
   }

   /**
    * Display the specified resource.
    *
    * @param  \App\Models\mark  $mark
    * @return \Illuminate\Http\Response
    */
   public function show( $mark)
   {
      //
      return response()->json(Mark::where('StdId',$mark)->get());
   }
   public function showAsLecturer($id)
   {
      # code...
   
      $std = DB::table('marks')                
               ->join('students as s','marks.StdId','=','s.id')
               ->where('marks.CId',$id)
               ->select('StdName','s.StdNumber','marks.id','marks.StdId','Test','Assignment','Exam','CId')
               ->get();
               
      return response()->json([
         'data' => $std
      ]);
   }
   public function showAsAdmin()
   {
      # code...
   
      $std = DB::table('marks')                
               ->join('students as s','marks.StdId','=','s.id')
               ->select('StdName','marks.id','s.StdNumber','marks.Test','Assignment','Exam','CId')
               ->get();
               
      return response()->json([
         'data' => $std
      ]);
   }

   /**
    * Update the specified resource in storage.
    *
    * @param  \App\Http\Requests\UpdatemarkRequest  $request
    * @param  \App\Models\mark  $mark
    * @return \Illuminate\Http\Response
    */
   public function update(UpdatemarkRequest $request,mark $mark)
   {

      $marks = DB::table('marks as m')
                  ->where([['m.CId',$request['CId']],['m.StdId',$request['StdId']]],'and')
                  ->update($request->all());
                  
      return response()->json([
         'status' => 200,
         'message' => 'Successfully updated',
         'data' => $marks
      ]);
   }
   private function createFinalMark()     
   {
      $result = DB::table('marks')
               ->select('StdId','CId',DB::raw('SUM(Assignment + Test + Exam)/3 as FinalM'))
               ->groupBy('StdId','CId');
      return $result;
   }
   
   public function getResults()
   {
          
      $results = DB::table($this->createFinalMark())
               ->select('StdId',DB::raw('AVG(FinalM) as Average'))
               ->groupBy('StdId')
               ->get();
               
      return response()->json($results);
   }

   private function createFMark($id)     
   {
      $result = DB::table('marks')
               ->where('StdId',$id)
               ->select('StdId','CId',DB::raw('SUM((Assignment*0.1) + (Test*0.3) + (Exam * 0.6)) as FinalM'))
               ->groupBy('StdId','CId');
      return $result;
   }
   public function viewResults($id)
   {
      # code...
      // $marks = DB::table('marks as m')
      //             ->join('courses as c','c.id','=','m.CId')
      //             ->join('students as s','m.StdId','=','s.id')
      //             ->where('m.StdId','=',$id)
      //             ->select('StdNumber','StdName','CCode','CName','Assignment','Test','Exam',
      //                      DB::raw('SUM(Assignment + Test + Exam)/3 as FinalMark'))
      //             ->groupBy('StdNumber','StdName','CCode','CName','Assignment','Test','Exam','StdId','CId')
      //             ->get();
      $marks = DB::table($this->createFMark($id),'a')
               ->join('marks as m','m.CId','a.CId')
               ->join('courses as c','c.id','=','m.CId')
               ->where('m.StdId', $id)
               // ->select('m.StdId','m.CId','FinalM')
               ->get();

      // $marks = $this->createFMark($id)->get();         
         /*echo '<pre>';
         var_dump($marks);
         echo '<pre>';*/
      
      return response()->json($marks);
   }

   /**
    * Remove the specified resource from storage.
    *
    * @param  \App\Models\mark  $mark
    * @return \Illuminate\Http\Response
    */
   public function destroy(mark $mark)
   {
      //
      $marks = Mark::destroy($mark);
      return response()->json([
         'status' => 200,
         'message' => 'Successfully deleted',
         'data' => $marks
      ]);
   }
   
   public function countStudents()
   {
      # code...
      $std = DB::table('marks')
               ->select(DB::raw('CId,count(*) as StdDoing'))
               ->groupBy('CId')
               ->get();

      /*echo '<pre>';
      var_dump($std);
      echo '<pre>';*/
      
      return response()->json(
            $std
      );
   }
}
