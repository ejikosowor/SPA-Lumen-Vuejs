<?php

namespace App;

use App\Models\Concerns\UsesUuid;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use UsesUuid;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'body', 'user_id'
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'done' => 'boolean',
        'done_at' => 'datetime',
    ];

    /**
     * Get User associated with this Todo
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}