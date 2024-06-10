<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Course extends Model
{
    use HasFactory;

    protected $fillable = [
        'CCode',
        'CName',
        'CMin',
        'CMax'
    ];
    public function marks()
    {
        # code...
        return $this->hasMany(Mark::class);
    }
}
