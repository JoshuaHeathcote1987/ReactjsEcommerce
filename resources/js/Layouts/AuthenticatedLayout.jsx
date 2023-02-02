import Dropdown from '@/Components/Dropdown';
import ResponsiveNavLink from '@/Components/ResponsiveNavLink';
import { TertiaryNavbar } from '../Components/Navbars/TertiaryNavbar';
import { Link } from '@inertiajs/inertia-react';


export default function Authenticated({ auth, header, children }) {
    return (
        <div className="min-h-screen bg-gray-100">
            <TertiaryNavbar auth={auth} />

            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 text-center px-4 sm:px-6 lg:px-8"></div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
