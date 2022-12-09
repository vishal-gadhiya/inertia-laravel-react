<?php

namespace App\Repositories;

use App\Models\Blog\Blog;
use App\Models\User\User;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Http\Request;

class BlogRepository
{
    /**
     * @param User $user
     * @return Collection
     */
    public function get(User $user): Collection
    {
        return $user->blogs()->latest()->get();
    }

    /**
     * @param User $user
     * @param Request $request
     * @return Blog
     */
    public function store(User $user, Request $request): Blog
    {
        return $this->save($user, new Blog, $request);
    }

    /**
     * @param User $user
     * @param Blog $blog
     * @param Request $request
     * @return Blog
     */
    public function update(User $user, Blog $blog, Request $request): Blog
    {
        return $this->save($user, $blog, $request);
    }

    /**
     * @param User $user
     * @param Blog $blog
     * @param Request $request
     * @return Blog
     */
    protected function save(User $user, Blog $blog, Request $request): Blog
    {
        $blog->fill([
            'title'       => $request->title,
            'description' => $request->description,
            'active'      => $request->active,
        ]);

        $user->blogs()->save($blog);

        return $blog;
    }

    /**
     * @param Blog $blog
     * @return void
     */
    public function delete(Blog $blog): void
    {
        $blog->delete();
    }
}
