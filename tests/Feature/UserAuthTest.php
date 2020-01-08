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
    public function testUserCanBeAuthenticated()
    {
        $user = factory('App\User')->create();

        $this->actingAs($user)
                ->get('api/v1/profile');
        
        $this->assertResponseOk();
        $this->assertCount(1, User::all());
    }

    /**
     * Guest Access Test
     * 
     * @return void
     */
    public function testGuestCanAccessUnProtectedRoutes()
    {
        $this->get('/');

        $this->assertResponseOk();
        $this->seeHeader("Content-Type", "text/html; charset=UTF-8");
    }

    /**
     * Guest Access test
     * 
     * @return void
     */
    public function testGuestCantAccessProtectedRoutes()
    {
        $this->get('api/v1/profile');

        $this->assertResponseStatus(401);
    }
}