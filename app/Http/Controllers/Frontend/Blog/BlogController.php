<?php

namespace App\Http\Controllers\Frontend\Blog;

use App\Http\Controllers\Controller;
use App\Http\Requests\Frontend\Blog\StoreRequest;
use App\Http\Requests\Frontend\Blog\UpdateRequest;
use App\Models\Blog\Blog;
use App\Repositories\BlogRepository;
use Exception;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class BlogController extends Controller
{
    /**
     * @param BlogRepository $blogRepository
     */
    public function __construct(
        private readonly BlogRepository $blogRepository
    ) {}

    /**
     * Display a listing of the resource.
     *
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Frontend/Blogs/Index', [
            'blogs' => $this->blogRepository->get(auth()->user())
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return Response
     */
    public function create(): Response
    {
        return Inertia::render('Frontend/Blogs/Create');
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
            $this->blogRepository->store(auth()->user(), $request);

            return Redirect::route('frontend.blogs.index')->withSuccess('Blog Created Successfully.');
        } catch (Exception $exception) {
            Log::error($exception);

            return Redirect::back()->withError('Something went wrong please try again.');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Blog $blog
     * @return Response
     */
    public function edit(Blog $blog): Response
    {
        return Inertia::render('Frontend/Blogs/Edit', [
            'blog' => $blog
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param UpdateRequest $request
     * @param Blog $blog
     * @return RedirectResponse
     */
    public function update(UpdateRequest $request, Blog $blog): RedirectResponse
    {
        try {
            $this->blogRepository->update(auth()->user(), $blog, $request);

            return Redirect::route('frontend.blogs.index')->withSuccess('Blog Updated Successfully.');
        } catch (Exception $exception) {
            Log::error($exception);

            return Redirect::back()->withError('Something went wrong please try again.');
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Blog $blog
     * @return RedirectResponse
     */
    public function destroy(Blog $blog): RedirectResponse
    {
        try {
            $this->blogRepository->delete($blog);

            return Redirect::route('frontend.blogs.index')->withSuccess('Blog Deleted Successfully.');
        } catch (Exception $exception) {
            Log::error($exception);

            return Redirect::back()->withError('Something went wrong please try again.');
        }
    }
}
