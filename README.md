# Laravel + React (Inertia.js)

## Required :

PHP ^8.0

Redis

MySQL

## Installation

Copy the example env file and make the required configuration changes in the .env file

    cp .env.example .env

Install all the dependencies using composer

    composer install

Generate a new application key

    php artisan key:generate

Install all the dependencies using npm

    npm install

Build for local/staging server

    vite

Build for production server

    vite build

Run the database migrations (**Set the database connection in .env before migrating**)

    php artisan migrate

Run the database seeder

    php artisan db:seed

To create the symbolic link

    php artisan storage:link

Start the local development server

    php artisan serve

You can now access the server at http://localhost:8000

or you can create virtual host
