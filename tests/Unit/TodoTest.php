<?php

namespace Tests\Unit;

use App\Todo;
use App\User;
use Tests\TestCase;
use Illuminate\Support\Facades\Hash;
use Laravel\Lumen\Testing\DatabaseMigrations;
use Laravel\Lumen\Testing\DatabaseTransactions;

class TodoTest extends TestCase
{
    use DatabaseMigrations;

    /**
     * Todo Creation test
     * 
     * @return void
     */
    public function testTodoCanBeCreatedFromValidData()
    {
        $user = factory(User::class)->create();

        factory(Todo::class)->create([
            'user_id' => $user->id
        ]);

        $this->assertCount(1, Todo::all());
    }
}