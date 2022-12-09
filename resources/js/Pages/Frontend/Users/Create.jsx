import AuthenticatedLayout from '@/Layouts/Frontend/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Head, Link, useForm } from '@inertiajs/inertia-react';

export default function Edit({ auth }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        first_name: '',
        last_name: '',
        date_of_birth: '',
        email: '',
        password: '',
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        post(route('frontend.users.store'));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Add User</h2>}
        >
            <Head title="Add User" />

            <form onSubmit={submit}>
                <div className="py-12">
                    <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                            <div className="p-6 text-gray-900">
                                <div className="space-y-6 sm:space-y-5">
                                    <div className="space-y-6 sm:space-y-5">
                                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4">
                                            <InputLabel forInput="first_name" value="First Name" className="sm:mt-px sm:pt-2" />

                                            <TextInput
                                                id="first_name"
                                                name="first_name"
                                                value={data.first_name}
                                                className="mt-1 block w-full"
                                                autoComplete="first_name"
                                                isFocused={true}
                                                handleChange={onHandleChange}
                                            />

                                            <InputError message={errors.first_name} className="mt-1" />
                                        </div>

                                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                            <InputLabel forInput="last_name" value="Last Name" className="sm:mt-px sm:pt-2" />

                                            <TextInput
                                                id="last_name"
                                                name="last_name"
                                                value={data.last_name}
                                                className="mt-1 block w-full"
                                                autoComplete="last_name"
                                                handleChange={onHandleChange}
                                            />

                                            <InputError message={errors.last_name} className="mt-1" />
                                        </div>

                                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                            <InputLabel forInput="date_of_birth" value="Date of Birth" className="sm:mt-px sm:pt-2" />

                                            <TextInput
                                                type='date'
                                                id="date_of_birth"
                                                name="date_of_birth"
                                                value={data.date_of_birth}
                                                className="mt-1 block w-full"
                                                autoComplete="date_of_birth"
                                                handleChange={onHandleChange}
                                            />

                                            <InputError message={errors.date_of_birth} className="mt-1" />
                                        </div>

                                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                            <InputLabel forInput="email" value="Email" className="sm:mt-px sm:pt-2" />

                                            <TextInput
                                                id="email"
                                                type="email"
                                                name="email"
                                                value={data.email}
                                                className="mt-1 block w-full"
                                                autoComplete="username"
                                                handleChange={onHandleChange}
                                            />

                                            <InputError message={errors.email} className="mt-1" />
                                        </div>

                                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                            <InputLabel forInput="password" value="Password" className="sm:mt-px sm:pt-2" />

                                            <TextInput
                                                id="password"
                                                type="password"
                                                name="password"
                                                value={data.password}
                                                className="mt-1 block w-full"
                                                autoComplete="new-password"
                                                handleChange={onHandleChange}
                                            />

                                            <InputError message={errors.password} className="mt-1" />
                                        </div>
                                        <div className="sm:grid sm:grid-cols-3 sm:items-start sm:gap-4 sm:border-t sm:border-gray-200 sm:pt-5">
                                            <div className="pt-5">
                                                <div className="flex">
                                                    <button type="submit"
                                                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Save
                                                    </button>
                                                    <Link
                                                        href={route('frontend.users.index')}
                                                        className="ml-3 rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </AuthenticatedLayout>
    );
}
