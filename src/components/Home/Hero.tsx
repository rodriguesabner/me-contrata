const HeroSection = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                            Encontre seu próximo
                            <span
                                className="block text-transparent bg-clip-text bg-gradient-to-r from-green-500 via-yellow-400 to-blue-500">
                              Desenvolvedor Front-end
                            </span>
                        </h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl">
                            Conectando talentos front-end com as melhores oportunidades do mercado brasileiro.
                        </p>
                    </div>
                    <div className="flex flex-row items-center space-x-4">
                        <a
                            href="https://github.com/frontendbr/me-contrata/issues/new"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                                 fill="currentColor">
                                <path fillRule="evenodd"
                                      d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z"
                                      clipRule="evenodd"/>
                                <path
                                    d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                            </svg>
                            Cadastrar Perfil
                        </a>
                        <a
                            href="#issues"
                            className="inline-flex items-center justify-center px-5 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                        >
                            Ver Candidatos
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
