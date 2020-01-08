<?php

namespace Tests\Feature;

use App\User;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class UserRegistrationTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * User Registration Functional test
     * 
     * @return void
     */
    public function testUserCanBeCreated()
    {
        $response = $this->call('POST', 'api/v1/register', $this->data());
        
        $this->assertResponseOk();
        $this->assertCount(1, User::all());
        $this->assertArrayHasKey('status', $response->getData(true));
    }

    /**
     * Test Name Validation
     * 
     * @return void
     */
    public function testUserHasInvalidName()
    {
        $response = $this->call('POST', 'api/v1/register', array_merge($this->data(), ['name' => '']));

        $this->validate();
        $this->assertArrayHasKey('name', $response->getData(true));
    }

    /**
     * Test Display Name Validation
     * 
     * @return void
     */
    public function testUserHasInvalidDisplayName()
    {
        $response = $this->call('POST', 'api/v1/register', array_merge($this->data(), ['display_name' => '']));

        $this->validate();        
        $this->assertArrayHasKey('display_name', $response->getData(true));
    }

    /**
     * Test Email Validation
     * 
     * @return void
     */
    public function testUserHasInvalidEmail()
    {
        $response = $this->call('POST', 'api/v1/register', array_merge($this->data(), ['email' => '']));

        $this->validate();
        $this->assertArrayHasKey('email', $response->getData(true));
    }

    /**
     * Test Password Validation
     * 
     * @return void
     */
    public function testUserHasInvalidPassword()
    {
        $response = $this->call('POST', 'api/v1/register', array_merge($this->data(), ['password' => '']));

        $this->validate();
        $this->assertArrayHasKey('password', $response->getData(true));
    }

    private function validate()
    {
        $this->assertResponseStatus(422);
        $this->assertCount(0, User::all());

        return;
    }

    private function data()
    {
        return [
            'name' => $this->faker->name,
            'display_name' => "test001",
            'email' => $this->faker->unique()->safeEmail,
            'password' => Hash::make("904310813")
        ];
    }
}