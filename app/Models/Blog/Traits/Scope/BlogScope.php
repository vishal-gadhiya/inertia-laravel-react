<?php

namespace App\Models\Blog\Traits\Scope;

use Illuminate\Database\Eloquent\Builder;

/**
 * Class BlogScope.
 */
trait BlogScope
{
    /**
     * Scope a query to only include active blogs.
     *
     * @param Builder $query
     * @return void
     */
    public function scopeActive(Builder $query): void
    {
        $query->where('active', true);
    }

    /**
     * Scope a query to only include inactive blogs.
     *
     * @param Builder $query
     * @return void
     */
    public function scopeInActive(Builder $query): void
    {
        $query->where('active', false);
    }
}
