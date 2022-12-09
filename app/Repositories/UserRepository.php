<?php

namespace App\Repositories;

use App\Models\User\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;

class UserRepository
{
    /**
     * @return Collection
     */
    public function get(): Collection
    {
        return User::where('id', '!=', auth()->id())->latest()->get();
    }

    /**
     * @param Request $request
     * @return User
     */
    public function store(Request $request): User
    {
        return $this->save(new User, $request);
    }

    /**
     * @param User $user
     * @param Request $request
     * @return User
     */
    public function update(User $user, Request $request): User
    {
        return $this->save($user, $request);
    }

    /**
     * @param User $user
     * @param Request $request
     * @return User
     */
    protected function save(User $user, Request $request): User
    {
        $user->fill([
            'first_name'    => $request->first_name,
            'last_name'     => $request->last_name,
            'date_of_birth' => $request->date_of_birth,
            'email'         => $request->email,
        ]);

        if (!empty($request->password)) {
            $user->fill(['password' => Hash::make($request->password)]);
        }

        $user->save();

        return $user;
    }

    /**
     * @param User $user
     * @return void
     */
    public function delete(User $user): void
    {
        $user->delete();
    }
}
