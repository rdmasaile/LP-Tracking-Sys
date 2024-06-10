<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Sanctum\HasApiTokens;

class Admin extends Model
{
   use HasFactory,HasApiTokens;

   protected $fillable = [
      'AdminNumber',
      'AdminName',
      'AdminEmail',
      'AdminContacts',
      'AdminDateOfBirth',
      'AdminPassword',
      'AdminCountry',
      'AdminCity',
      'AdminVillage',
      'AdminZipCode',
      'AdminSalary',
   ];
   protected $hidden = ['AdminPassword'];
}
