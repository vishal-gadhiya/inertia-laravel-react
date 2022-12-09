import AuthenticatedLayout from '@/Layouts/Frontend/AuthenticatedLayout';
import {Head, Link, useForm} from '@inertiajs/inertia-react';
import {Inertia} from "@inertiajs/inertia";

export default function Edit({ auth, users }) {
    const destroy = (user, e) => {
        if (confirm("Are you sure you want to delete this user?")) {
            Inertia.delete(route("frontend.users.destroy", user));
        }
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Users Listing</h2>}
        >
            <Head title="Users Listing" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">
                            <div className="px-4 sm:px-6 lg:px-8">
                                <div className="sm:flex sm:items-center">
                                    <div className="sm:flex-auto">
                                        {/*<p className="mt-2 text-sm text-gray-700">
                                            A list of all the users in your account including their name, title, email and role.
                                        </p>*/}
                                    </div>
                                    <div className="mt-4 sm:mt-0 sm:ml-16 sm:flex-none">
                                        <Link
                                            href={route('frontend.users.create')}
                                            className="inline-flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:w-auto"
                                        >
                                            Add User
                                        </Link>
                                    </div>
                                </div>
                                <div className="mt-8 flex flex-col">
                                    <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                        <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                            <div className="overflow-hidden shadow ring-1 ring-black ring-opacity-5 md:rounded-lg">
                                                <table className="min-w-full divide-y divide-gray-300">
                                                    <thead className="bg-gray-50">
                                                    <tr>
                                                        <th scope="col" className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-6">
                                                            First Name
                                                        </th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                            Last Name
                                                        </th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                            Email
                                                        </th>
                                                        <th scope="col" className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">
                                                            Date of Birth
                                                        </th>
                                                        <th scope="col" className="relative py-3.5 pl-3 pr-4 sm:pr-6">
                                                            <span className="sr-only">Edit</span>
                                                        </th>
                                                    </tr>
                                                    </thead>
                                                    <tbody className="divide-y divide-gray-200 bg-white">
                                                    {users.map((user) => (
                                                        <tr key={user.id}>
                                                            <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-6">
                                                                {user.first_name}
                                                            </td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.last_name}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.email}</td>
                                                            <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-500">{user.date_of_birth}</td>
                                                            <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6">
                                                                <Link
                                                                    href={route('frontend.users.edit', user)}
                                                                    className="text-indigo-600 hover:text-indigo-900"
                                                                >
                                                                    Edit<span className="sr-only">, Edit</span>
                                                                </Link>
                                                                <button
                                                                    onClick={(e) => destroy(user, e)}
                                                                    className="text-red-600 hover:text-red-900 ml-2"
                                                                >
                                                                    Delete<span className="sr-only">, Delete</span>
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
