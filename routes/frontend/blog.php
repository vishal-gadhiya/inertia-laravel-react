<?php

use App\Http\Controllers\Frontend\Blog\BlogController;
use Illuminate\Support\Facades\Route;

Route::middleware(['auth', 'verified'])->group(function () {

    Route::resource('blogs', BlogController::class);
});
