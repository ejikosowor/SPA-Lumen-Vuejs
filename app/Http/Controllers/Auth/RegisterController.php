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
     * @var \App\Repositories\UserRepository
     */
    private $userRepository;

    /**
     * Create a new controller instance.
     *
     * @param \App\Repositories\UserRepository $userRepository
     * @return void
     */
    public function __construct(UserRepository $userRepository)
    {
        $this->userRepository = $userRepository;
    }

    /**
     * Register a new user
     *
     * @param  \Illuminate\Http\Request             $request
     * @return \Illuminate\Http\Response
     */
    public function register(Request $request)
    {
        $this->validate($request, [
            'name' => 'required|string|min:10',
            'display_name' => 'required|string|min:6|unique:users',
            'email' => 'required|email|unique:users',
            'password' => 'required|min:8'
        ]);
        
        $user = $this->userRepository->create($request);

        return response()->json(['status' => "Account Successfully Created"]);
    }
}
