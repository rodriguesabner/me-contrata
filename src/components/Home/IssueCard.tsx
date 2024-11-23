import moment from "moment";
import {Issue} from "../../interfaces/issues.interface";
import {Link} from "react-router";
import React from "react";

const IssueCard = React.memo(({issue}: { issue: Issue }) => {
    const getTitle = () => {
        const title = issue.title.trim();
        if (title.startsWith('[')) {
            return title.split(']')[1];
        }
        return title
    }

    const getLocation = () => {
        const title = issue.title.trim();
        if (title.startsWith('[')) {
            return title.split(']')[0].replace('[', '');
        }
    }

    return (
        <div key={issue.number} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <div className="flex p-6 gap-4 items-start">
                <img src={issue.user.avatar_url} className={'w-[100px] h-[100px] object-cover rounded'}/>

                <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {getTitle()}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                        </svg>
                        {moment(issue.created_at).format('DD/MM/YYYY')}
                    </div>
                    <p className="text-sm text-gray-600 mb-4 flex flex-wrap gap-2">
                        {issue.labels.map(label => (
                            <span
                                key={label.id}
                                className="px-2 py-1 text-green-800 text-xs mr-2 rounded bg-opacity-50 bg-green-200"
                            >
                                {label.name}
                            </span>
                        ))}
                    </p>
                    <div className="flex items-center text-sm text-gray-500">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none"
                             viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                        </svg>
                        {getLocation() || 'Não especificado'}
                    </div>
                </div>
            </div>
            <div className="p-6 bg-gray-50 mt-auto">
                <Link
                    to={issue.html_url}
                    target="_blank"
                    className="w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20"
                         fill="currentColor">
                        <path fillRule="evenodd"
                              d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z"
                              clipRule="evenodd"/>
                    </svg>

                    Ver Perfil Completo
                </Link>
            </div>
        </div>
    );
});

export default IssueCard;
