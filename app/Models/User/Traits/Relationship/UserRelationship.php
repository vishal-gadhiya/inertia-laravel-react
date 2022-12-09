<?php

namespace App\Models\User\Traits\Relationship;

use App\Models\Blog\Blog;
use Illuminate\Database\Eloquent\Relations\HasMany;

/**
 * Class UserRelationship.
 */
trait UserRelationship
{
    /**
     * @return HasMany
     */
    public function blogs(): HasMany
    {
        return $this->hasMany(Blog::class);
    }
}
