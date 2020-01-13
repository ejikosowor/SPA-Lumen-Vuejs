<?php

namespace App\Http\Controllers;

class SpaController extends Controller
{
    /**
     * Display App Frontend 
     * 
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('index');
    }
}
