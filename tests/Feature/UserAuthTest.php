<?php

namespace Tests\Unit;

use App\User;
use Tests\TestCase;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class UserAuthTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * User Authentication Functional test
     * 
     * @return void
     */
    public function testUserCanBeCreated()
    {
        $user = factory('App\User')->create();

        $this->actingAs($user)
                ->get('api/v1/profile');
        
        $this->assertResponseOk();
        $this->assertCount(1, User::all());
    }
}