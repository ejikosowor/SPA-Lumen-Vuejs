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
        return User::findorFail($id);
    }

    /**
     * Saves the resource in the database
     * 
     * @param Object        $request
     * @return App\User
     */
    public function create($request)
    {
        $user = new User();
        $user->name = $request->name;
        $user->display_name = $request->display_name;
        $user->email = $request->email;
        $user->password = Hash::make($request->password);
        $user->save();

        return $user;
    }
}