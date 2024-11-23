import { Link } from "react-router";

const Header = () => {
    return (
        <header className="px-4 lg:px-6 h-16 flex items-center shadow-sm bg-white">
            <Link className="flex items-center justify-center" to="/">
                <span className="sr-only">Front-end Brasil - Me Contrata</span>
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 via-yellow-400 to-blue-500 rounded-full"></div>
                <span className="ml-2 text-xl font-bold text-gray-800">Me Contrata</span>
            </Link>
            <nav className="ml-auto flex gap-4 sm:gap-6">
                <a className="text-sm font-medium text-gray-600 hover:text-gray-900" href="#issues">
                    Vagas
                </a>
                <Link className="text-sm font-medium text-gray-600 hover:text-gray-900"
                   to="about">
                    Sobre
                </Link>
            </nav>
        </header>
    );
};

export default Header;
