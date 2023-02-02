import { Link } from '@inertiajs/inertia-react';

export default function ResponsiveNavLink({ method = 'get', as = 'a', href, active = false, children }) {
    return (
        <Link
            method={method}
            as={as}
            href={href}
            className={`flex ${
                active
                    ? 'text-gray-900 dark:text-white hover:underline'
                    : 'text-gray-700 dark:text-white hover:underline'
            }`}
        >
            {children}
        </Link>
    );
}
