<?php

use Illuminate\Support\Facades\Hash;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

$factory->define(App\User::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'display_name' => "test001",
        'email' => $faker->unique()->email,
        'password' => Hash::make("123456789")
    ];
});

$factory->define(App\Todo::class, function (Faker\Generator $faker) {
    return [
        'body' => $faker->sentence(6, true),
    ];
});
