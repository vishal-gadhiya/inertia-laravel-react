<?php

namespace App\Jobs\Blog;

use App\Models\Blog\Blog;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class DeleteBlogs implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle(): void
    {
        Blog::inActive()
            ->whereBetween('created_at', [now()->subMonth()->startOfDay(), now()->subMonth()->endOfMonth()->endOfDay()])
            ->delete();
    }
}
