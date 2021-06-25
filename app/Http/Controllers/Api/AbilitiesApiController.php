<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;

class AbilitiesApiController extends Controller
{
    public function index()
    {
        $currentUser = auth()->user();

        return User::where('email', $currentUser->email)->with('roles.permissions')
            ->first()
            ->roles
            ->pluck('permissions')
            ->flatten()
            ->pluck('title');
    }
}
