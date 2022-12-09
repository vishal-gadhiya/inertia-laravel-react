<?php

namespace App\Console\Commands\Blog;

use App\Jobs\Blog\DeleteBlogs as DeleteBlogsJob;
use Illuminate\Console\Command;

class DeleteBlogs extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'blogs:delete';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete inactive blogs';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function handle(): void
    {
        DeleteBlogsJob::dispatch();
    }
}
