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
        User::firstOrCreate([
            'name' => $this->faker->name,
            'display_name' => "test001",
            'email' => $this->faker->unique()->safeEmail,
            'password' => Hash::make("904310813")
        ]);

        $this->assertCount(1, User::all());
    }
}