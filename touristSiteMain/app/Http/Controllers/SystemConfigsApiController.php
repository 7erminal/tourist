<?php

namespace App\Http\Controllers;

use App\Models\SystemConfig;
use Illuminate\Http\Request;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Log;

class SystemConfigsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $configs = SystemConfig::all();

        $response = [
            'success' => true,
            'data'    => new ServiceResource($configs),
            'message' => "Success",
        ];
        return response()->json($response, 200);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(SystemConfig $systemConfig)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, SystemConfig $systemConfig)
    {
        //
        Log::debug("Received request is");
        Log::debug($request);
        Log::debug($systemConfig);
        $system_address = SystemConfig::where('config_name',"address");
        Log::debug(response()->json($system_address));
        // Log::debug($system_address[0]->config_value);
        $system_address->update(['config_value'=>$request->address]);

        $system_email = SystemConfig::where('config_name',"email");
        $system_email->update(['config_value'=>$request->email]);

        $system_number = SystemConfig::where('config_name',"number");
        $system_number->update(['config_value'=>$request->number]);

        $configs = SystemConfig::all();

        $response = [
            'success' => true,
            'data'    => new ServiceResource($configs),
            'message' => "Success",
        ];
        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(SystemConfig $systemConfig)
    {
        //
    }
}
