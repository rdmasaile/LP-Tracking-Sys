<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Mark extends Model
{
    use HasFactory;
    protected $fillable = [
        'StdId',
        'CId',
        'Test',
        'Assignment',
        'Exam',
    ];
    public function courses()
    {
        # code...
        return $this->belongsToMany(Course::class,'courses','id');
    }
    public function students()
    {
        # code...
        return $this->belongsToMany(Student::class,'students','id');
    }
}
