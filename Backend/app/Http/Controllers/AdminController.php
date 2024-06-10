<?php

namespace App\Http\Controllers;

use App\Models\admin;
use App\Http\Requests\StoreadminRequest;
use App\Http\Requests\UpdateadminRequest;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
        return response()->json();
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreadminRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreadminRequest $request)
    {
        //
        $admin = Admin::create($request->all());
        return response()->json([
            'status'=>200,
            'message'=> 'Successfully registered',
            'data' => $admin
        ]);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function show( $admin)
    {
        //
        return response()->json(Admin::findOrFail($admin));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateadminRequest  $request
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateadminRequest $request, $admin)
    {
        //
        $admin = Admin::findOrFail($admin);
        $admin->update($request->all());

        return response()->json([
            'status' => 200,
            'message' => 'Successfully updated',
            'data' => $admin
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\admin  $admin
     * @return \Illuminate\Http\Response
     */
    public function destroy(admin $admin)
    {
        //
        $admin = Admin::destroy($admin);
        return response()->json([
            'status' => 200,
            'message' => 'Successfully deleted',
            'data' => $admin
        ]);
    }
}
