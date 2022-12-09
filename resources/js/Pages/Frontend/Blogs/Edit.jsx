import AuthenticatedLayout from '@/Layouts/Frontend/AuthenticatedLayout';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import { Head, Link, useForm } from '@inertiajs/inertia-react';
import PrimaryButton from "@/Components/PrimaryButton";
import Checkbox from "@/Components/Checkbox";

export default function Edit({ auth, blog }) {
    const { data, setData, put, errors, processing } = useForm({
        title: blog.title,
        description: blog.description,
        active: blog.active,
    });

    const onHandleChange = (event) => {
        setData(event.target.name, event.target.type === 'checkbox' ? event.target.checked : event.target.value);
    };

    const submit = (e) => {
        e.preventDefault();

        put(route('frontend.blogs.update', blog));
    };

    return (
        <AuthenticatedLayout
            auth={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Edit Blog</h2>}
        >
            <Head title="Edit Blog" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-4 sm:p-8 bg-white shadow sm:rounded-lg">
                        <section className="max-w-xl">

                            <form onSubmit={submit} className="mt-6 space-y-6">
                                <div>
                                    <InputLabel for="title" value="Title" />

                                    <TextInput
                                        id="title"
                                        name="title"
                                        value={data.title}
                                        className="mt-1 block w-full"
                                        autocomplete="title"
                                        isFocused={true}
                                        handleChange={onHandleChange}
                                    />

                                    <InputError className="mt-2" message={errors.title} />
                                </div>

                                <div>
                                    <InputLabel for="description" value="Description" />

                                    <textarea
                                        id="description"
                                        name="description"
                                        className="border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm mt-1 block w-full"
                                        value={data.description}
                                        onChange={(e) => onHandleChange(e)}
                                    >
                                    </textarea>

                                    <InputError className="mt-2" message={errors.description} />
                                </div>

                                <div className="block mt-4">
                                    <InputLabel for="status" value="Status" />
                                    <label className="flex items-center">
                                        <Checkbox name="active" value={data.active} defaultChecked={data.active} handleChange={onHandleChange} />
                                        <span className="ml-2 text-sm text-gray-600">Active</span>
                                    </label>
                                </div>

                                <div className="flex items-center gap-4">
                                    <PrimaryButton processing={processing}>Save</PrimaryButton>

                                    <Link
                                        href={route('frontend.blogs.index')}
                                        className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">Cancel
                                    </Link>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
