<?php

namespace App\Http\Controllers;

use App\Models\RequestApp;
use Illuminate\Http\Request;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Log;

class RequestsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $requests = RequestApp::all();

        $response = [
            'success' => true,
            'data'    => new ServiceResource($requests),
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
        $pl = $request->placeOfInterest;
        switch($request->placeOfInterest){
            case '1':
                $pl = 'BEKA ZANZIBAR TOUR AND SAFARI';
                break;
            case '2':
                $pl = 'SAFARI TO SERENGETI AND NGORONGORO';
                break;
            case '3':
                $pl = 'ZANZIBAR PACKAGE';
                break;
            case '4':
                $pl = 'MIKUMI NATIONAL PARK';
                break;
            default:
                $pl = 'GENERAL';
                break;
        }

        $data = ['name'=>$request->name, 'email'=>$request->email, 'number'=>$request->number, 'place_of_interest'=>$pl, 'message'=>$request->message, 'active'=>1, 'status'=>2, 'created_by'=>$request->name];

        $requestDataid = RequestApp::insertGetId($data);

        $requestData = RequestApp::where('request_id',$requestDataid)->get();

        $response = [
            'success' => true,
            'data'    => new ServiceResource($requestData),
            'message' => "Success",
        ];
        return response()->json($response, 200);
    }

    /**
     * Display the specified resource.
     */
    public function show(RequestApp $requestApp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, RequestApp $requestApp)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update_seen_status(Request $request, RequestApp $requestApp)
    {
        //
        Log::debug("Received payload is ");
        Log::debug($request);
        $requestData = RequestApp::where('request_id',$request->requestid);
        $requestData->update(['status'=>1]);
        $requestData = RequestApp::where('request_id',$request->requestid)->get();

        $response = [
            'success' => true,
            'data'    => new ServiceResource($requestData),
            'message' => "Success",
        ];
        return response()->json($response, 200);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(RequestApp $requestApp)
    {
        //
    }
}
