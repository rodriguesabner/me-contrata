export default function About() {
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
            <main className="container mx-auto px-4 py-8 md:py-16">
                <h1 className="text-4xl font-bold mb-8 text-center text-gray-900">Sobre o Me Contrata</h1>

                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Qual o objetivo?</h2>
                    <p className="text-gray-600 mb-4">
                        Nesse espaço, a pessoa que está em busca de uma nova oportunidade no mercado, ou em busca de recolocação,
                        irá cadastrar uma nova issue com as informações necessárias para que empresas em busca de profissionais
                        com o seu perfil possam entrar em contato.
                    </p>
                    <p className="text-gray-600 font-semibold">Um "ganha-ganha" pra todos =)</p>
                </section>

                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Como se cadastrar?</h2>
                    <ol className="list-decimal list-inside text-gray-600 space-y-2">
                        <li>Abra uma issue e, no título desta issue, coloque a cidade/estado onde mora - entre colchetes - e o seu nome completo, assim: [São Paulo/SP] Maria Joaquina;</li>
                        <li>Preencha corretamente os dados pedidos no template padrão - o template aparece quando você cria uma nova issue :)</li>
                        <li>Aguarde alguma empresa entrar em contato.</li>
                        <li>Ao conseguir uma vaga, quem criou a issue deve fechar a mesma (se não estiver em busca de outras oportunidades), e comentar se conseguiu ou não o emprego a partir desse repositório.</li>
                    </ol>
                </section>

                <section className="bg-white shadow-md rounded-lg p-6 mb-8">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800">Sou uma empresa, ou preciso de alguém para um freela, como entrar em contato?</h2>
                    <ol className="list-decimal list-inside text-gray-600 space-y-2">
                        <li>Clicando em issues, você verá uma lista de candidatos que estão em busca de oportunidades de trabalho. Para visualizar o contato da pessoa (e.g. Linkedin), basta entrar em sua issue e descer até encontrar a seção Contato.</li>
                        <li>Caso a pessoa não tenha adicionado nenhuma forma de contato, será preciso comentar logo abaixo de sua issue.</li>
                        <li>Issues abertas são pessoas interessadas em oportunidades que ainda não fecharam uma parceria. Enquanto que issues fechadas são aquelas que já se encerraram. Por padrão, você só verá issues em aberto.</li>
                        <li>Utilize o campo de busca em issues para procurar por uma cidade, ou um rótulo (CLT, Freela, PJ, etc).</li>
                        <li>Ainda no campo de busca, você pode filtrar por algum rótulo da seguinte forma: escrevendo label:CLT para exibir apenas as pessoas que usaram o rótulo CLT ou escrevendo -label:CLT para retirar essas pessoas.</li>
                        <li>Por padrão, o campo de busca começa preenchido com is:issue is:open. Não se preocupe, separe por espaços o que seja buscar. (e.g is:issue is:open São Paulo SP label:Remoto -label:CLT).</li>
                        <li>É possível filtrar a lista de issues pela barra de filtros da tabela, caso ache melhor.</li>
                    </ol>
                </section>

                <div className="text-center">
                    <a
                        href="https://github.com/frontendbr/me-contrata"
                        className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
                    >
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                        </svg>
                        Ir para o GitHub
                    </a>
                </div>
            </main>
        </div>
    )
}
