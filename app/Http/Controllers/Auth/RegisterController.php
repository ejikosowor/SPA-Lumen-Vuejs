<?php

namespace App\Http\Controllers\Auth;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Repositories\UserRepository;
use App\Http\Controllers\Controller;

class RegisterController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Register Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles the registration of new users as well as their
    | validation and creation.
    |
    */

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        
    }

    /**
     * Register a new user
     *
     * @param  \Illuminate\Http\Request             $request
     * @param  \App\Repositories\UserRepository     $userRepository
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request, UserRepository $userRepository)
    {
        $this->validate($request, [
            'name' => 'required|string|min:10',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8'
        ]);
        
        $user = $userRepository->create($request);

        return response()->json($user);
    }
}
