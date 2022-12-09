<?php

namespace App\Http\Controllers\Frontend\User;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\User\StoreRequest;
use App\Http\Requests\Frontend\User\UpdateRequest;
use App\Models\User\User;
use App\Repositories\UserRepository;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class UserController extends Controller
{
    /**
     * @param UserRepository $userRepository
     */
    public function __construct(
        private readonly UserRepository $userRepository
    ) {}

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Frontend/Users/Index', [
            'users' => $this->userRepository->get()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Frontend/Users/Create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param StoreRequest $request
     * @return RedirectResponse
     */
    public function store(StoreRequest $request): RedirectResponse
    {
        try {
            $this->userRepository->store($request);

            return Redirect::route('frontend.users.index')->withSuccess('User Created Successfully.');
        } catch (Exception $exception) {
            Log::error($exception);

            return Redirect::back()->withError('Something went wrong please try again.');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return Response
     */
    public function edit(User $user): Response
    {
        return Inertia::render('Frontend/Users/Edit', [
            'user' => $user
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRequest $request
     * @param User $user
     * @return RedirectResponse
     */
    public function update(UpdateRequest $request, User $user): RedirectResponse
    {
        try {
            $this->userRepository->update($user, $request);

            return Redirect::route('frontend.users.index')->withSuccess('User Updated Successfully.');
        } catch (Exception $exception) {
            Log::error($exception);

            return Redirect::back()->withError('Something went wrong please try again.');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return RedirectResponse
     */
    public function destroy(User $user): RedirectResponse
    {
        try {
            $this->userRepository->delete($user);

            return Redirect::route('frontend.users.index')->withSuccess('User Deleted Successfully.');
        } catch (Exception $exception) {
            Log::error($exception);

            return Redirect::back()->withError('Something went wrong please try again.');
        }
    }
}
