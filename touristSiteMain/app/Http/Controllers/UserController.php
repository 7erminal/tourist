<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Validation\Rules\Password;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use App\Models\User;
use Illuminate\Support\Facades\Log;
use App\Http\Resources\ServiceResource;

class UserController extends Controller
{
    //
    public function index()
    {
        //
        Log::debug("About to get all users");

        $users = User::all();

        $response = [
            'success' => true,
            'data'    => new ServiceResource($users),
            'message' => "Success",
        ];
        return response()->json($response, 200);
    }

    public function login (Request $request) {
        $request->validate([
            'email' => 'required|email',
            'password' => 'required',
            // 'device_name' => 'required',
        ]);
     
        $user = User::where('email', $request->email)->first();
     
        if (! $user || ! Hash::check($request->password, $user->password)) {
            throw ValidationException::withMessages([
                'email' => ['The provided credentials are incorrect.'],
            ]);
        }
     
        return $user->createToken($request->email)->plainTextToken;
    }

    public function register (Request $request) {
        $request->validate([
            'name' => ['required', 'string', 'max:255'],
            'username' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'email', 'max:255', 'unique:'.User::class],
            'password' => ['required', 'confirmed', Password::defaults()],
        ]);

        try{
            $user = User::create([
                'name' => $request->name,
                'username' => $request->username,
                'email' => $request->email,
                'password' => Hash::make($request->password),
            ]);

            Log::debug('created');
        } catch (Exception $e){
            Log::debug('Exception');
            Log::debug($e);
        }

        Auth::login($user);

        return response()->noContent();
    }
}
