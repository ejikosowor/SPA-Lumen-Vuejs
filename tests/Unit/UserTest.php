<?php

namespace Tests\Unit;

use App\User;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class UserTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * User Creation test
     * 
     * @return void
     */
    public function testUserCanBeCreatedFromValidData()
    {
        $user = factory('App\User')->create();

        $this->assertCount(1, User::all());
    }
}