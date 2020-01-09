<?php

namespace Tests\Feature;

use App\Todo;
use App\User;
use Tests\TestCase;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class TodoRetrieval extends TestCase
{
    use DatabaseMigrations;

    /**
     * Todo Read Functional test
     * 
     * @return void
     */
    public function testTodoCanBeRead()
    {
        $user = factory(User::class)->create();

        factory(Todo::class)->create([
            'user_id' => $user->id
        ]);

        $this->actingAs($user);
        $this->call('GET', 'api/v1/todo');

        $this->assertResponseOk();
        $this->assertEquals(Todo::first()->id, $this->response->original->first()->id);
    }

    /**
     * Test User must be authenticated to Read Todo
     * 
     * @return void
     */
    public function testTodoUserNotAuth()
    {
        $this->get('api/v1/todo');

        $this->assertResponseStatus(401);
        $this->assertCount(0, Todo::all());
    }
}