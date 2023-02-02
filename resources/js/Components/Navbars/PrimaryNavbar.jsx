import { Link } from '@inertiajs/inertia-react';

export function PrimaryNavbar({
    route,
    auth,
    img,
    title,
    telephone
}) {
    return <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-2.5">
            <a href="/" className="flex items-center">
                <img src={img} className="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">{ title }</span>
            </a>
            <div className="flex items-center">
                <a href={`tel: ${telephone}`} className="mr-6 text-sm font-medium text-gray-500 dark:text-white hover:underline">{ telephone }</a>
                {auth.user ? <Link href={'dashboard/products'} className="text-sm text-gray-700 dark:text-gray-500 underline">
                    Dashboard
                </Link> : <>
                    <Link href={route('login')} className="text-sm text-gray-700 dark:text-gray-500 underline">
                        Log in
                    </Link>

                    <Link href={route('register')} className="ml-4 text-sm text-gray-700 dark:text-gray-500 underline">
                        Register
                    </Link>
                </>}
            </div>
        </div>
    </nav>;
}
