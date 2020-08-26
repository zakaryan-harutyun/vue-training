<?php

namespace App\Http\Controllers;

use App\Http\Requests\User\Register;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserController extends Controller
{
    public function register(Register $request) {
        User::query()->create([
           'name' => $request->get('name'),
           'email' => $request->get('email'),
           'password' => Hash::make($request->get('password'))
        ]);
        return response()->json([
           'success' => true,
           'message' => 'User successfully registered'
        ]);
    }
}
