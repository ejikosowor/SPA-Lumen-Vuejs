<?php

namespace App\Repositories;

use App\User;
use Illuminate\Support\Facades\Hash;

class UserRepository
{
    /**
     * Retrieves a listing of the resource
     * 
     * @return App\User
     */
    public function all()
    {
        return User::all();
    }

    /**
     * Retrieves the specified resource
     * @param uuid          $id
     * @return App\User
     */
    public function single($id)
    {
        $user = User::find($id);
        // if(!$user) {
        //     return response()->json(['error' => 'User not found'], 404);
        // }
        
        return $user;
    }

    /**
     * Saves the resource in the database
     * 
     * @param Object        $userData
     * @return App\User
     */
    public function create($userData)
    {
        $user = new User();
        $user->name = $userData->name;
        $user->email = $userData->email;
        $user->password = Hash::make($userData->password);
        $user->save();

        return $user;
    }
}