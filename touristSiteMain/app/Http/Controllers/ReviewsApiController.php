<?php

namespace App\Http\Controllers;

use App\Models\Review;
use Illuminate\Http\Request;
use App\Http\Resources\ServiceResource;
use Illuminate\Support\Facades\Log;

class ReviewsApiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $reviews = Review::all();

        $response = [
            'success' => true,
            'data'    => new ServiceResource($reviews),
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
        try{
            $data = ['review'=>$request->review, 'review_by'=>$request->review_by];

            $insertid = Review::insertGetId($data);

            $review_response = Review::where('review_id',$insertid)->first();

            Log::debug('created');

            $response = [
                'success' => true,
                'data'    => new ServiceResource($review_response),
                'message' => "Success",
            ];
            return response()->json($response, 200);
        } catch (Exception $e){
            Log::debug('Exception');
            Log::debug($e);
        }
    }

    /**
     * Display the specified resource.
     */
    public function show(Review $review)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Review $review)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Request $request)
    {
        //
        try{
            // Review::where('review_id',$request->review_id)->delete();

            $data = ['active'=>6];
            Review::where('review_id','=',$request->review_id)->update($data);

            $reviews = Review::all();

            Log::debug('created');

            $response = [
                'success' => true,
                'data'    => new ServiceResource($reviews),
                'message' => "Success",
            ];
            return response()->json($response, 200);
        } catch (Exception $e){
            Log::debug('Exception');
            Log::debug($e);
        }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function show_review(Request $request)
    {
        //
        try{
            // $review = Review::where('review_id','=',$request->review_id);

            $show = 1;

            Log::debug($request);

            if($request->show == 'noShow'){
                Log::debug('Do not show');
                $show = 0;
            }

            $data = ['show'=>$show];

            Review::where('review_id','=',$request->review_id)->update($data);

            $reviews = Review::all();

            Log::debug('created');

            $response = [
                'success' => true,
                'data'    => new ServiceResource($reviews),
                'message' => "Success",
            ];
            return response()->json($response, 200);
        } catch (Exception $e){
            Log::debug('Exception');
            Log::debug($e);
        }
    }
}
