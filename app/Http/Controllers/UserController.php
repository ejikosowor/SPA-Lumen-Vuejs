<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Repositories\UserRepository;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Display a listing of users.
     * 
     * @param  \App\Repositories\UserRepository     $userRepository
     * @return \Illuminate\Http\Response
     */
    public function index(UserRepository $userRepository)
    {
        $users = $userRepository->all();

        return response()->json($users);
    }

    /**
     * Display a specified user.
     * @param  uuid                                 $id
     * @param  \App\Repositories\UserRepository     $userRepository
     * @return \Illuminate\Http\Response
     */
    public function show($id, UserRepository $userRepository)
    {
        $user = $userRepository->single($id);
        if(!$user) {
            return response()->json(['error' => 'User not found'], 404);
        }

        return response()->json($user);
    }

    /**
     * Store a newly created user
     *
     * @param  \Illuminate\Http\Request             $request
     * @param  \App\Repositories\UserRepository     $userRepository
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, UserRepository $userRepository)
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
