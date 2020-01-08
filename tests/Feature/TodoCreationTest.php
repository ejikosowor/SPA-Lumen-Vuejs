<?php

namespace Tests\Feature;

use App\Todo;
use App\User;
use Tests\TestCase;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class TodoCreationTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * Todo Creation Functional test
     * 
     * @return void
     */
    public function testTodoCanBeCreated()
    {
        $user = factory('App\User')->create();

        $this->actingAs($user)
                ->post('api/v1/todo', ['body' => $this->faker->sentence(6, true)]);

        $this->assertResponseOk();
        $this->assertCount(1, Todo::all());
        $this->assertEquals($user->id, Todo::first()->user->id);
    }

    /**
     * Test User must be authenticated to add TOdo
     * 
     * @return void
     */
    public function testTodoUserNotAuth()
    {
        $this->post('api/v1/todo', ['body' => $this->faker->sentence(6, true)]);

        $this->assertResponseStatus(401);
        $this->assertCount(0, Todo::all());
    }

    /**
     * Test Todo Body Validation
     * 
     * @return void
     */
    public function testTodoHasInvalidBody()
    {
        $user = factory('App\User')->create();

        $response = $this->actingAs($user)
                        ->post('api/v1/todo', ['body' => '']);

        $this->assertResponseStatus(422);
        $this->assertCount(0, Todo::all());
    }

    /**
     * Test Todo Isnt Done
     * 
     * @return void
     */
    public function testTodoIsNotDone()
    {
        $user = factory('App\User')->create();

        $response = $this->actingAs($user)
                        ->post('api/v1/todo', ['body' => $this->faker->sentence(6, true)]);
        
        $this->assertResponseOk();
        $this->assertCount(1, Todo::all());
        $this->assertFalse(Todo::first()->done);
    }
}