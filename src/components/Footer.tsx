const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-200">
            <div className="container mx-auto px-4 py-6 flex flex-col sm:flex-row items-center justify-between">
                <b className="text-sm text-gray-500">
                    Contribua com o projeto no GitHub
                </b>
                <nav className="flex gap-4 sm:gap-6 mt-4 sm:mt-0">
                    <a className="text-sm text-gray-500 hover:text-gray-900" href="https://github.com/frontendbr">
                        GitHub
                    </a>
                    <a className="text-sm text-gray-500 hover:text-gray-900"
                       href="https://github.com/frontendbr/me-contrata">
                        Repositório
                    </a>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;
