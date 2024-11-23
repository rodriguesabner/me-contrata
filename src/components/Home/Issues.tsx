import React, {useEffect, useLayoutEffect, useState} from "react";
import {Issue} from "../../interfaces/issues.interface";
import IssueCard from "./IssueCard";
import { Pagination } from "./Pagination";

interface IssuesSectionProps {
    issues: Issue[];
    page: number;
    setPage: (page: number) => void;
}
const IssuesSection = (props: IssuesSectionProps) => {
    const [filteredIssues, setFilteredIssues] = useState<Issue[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedTags, setSelectedTags] = useState<string[]>([]);
    const [availableTags, setAvailableTags] = useState<string[]>([]);
    const itemsPerPage = 25;

    const startIndex = (props.page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    const paginatedIssues = filteredIssues.slice(startIndex, endIndex);

    useLayoutEffect(() => {
        setFilteredIssues(props.issues);
        const tags = Array.from(new Set(props.issues.flatMap(issue => issue.labels.map(label => label.name))));
        setAvailableTags(tags);
    }, [props.issues]);

    useEffect(() => {
        const filtered = props.issues.filter((issue) => {
            const matchesSearch =
                issue?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
                issue?.body?.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesTags =
                selectedTags.length === 0 ||
                selectedTags.every((tag) =>
                    issue.labels.some(
                        (label) => label.name.toLowerCase() === tag.toLowerCase()
                    )
                );
            return matchesSearch && matchesTags;
        });
        setFilteredIssues(filtered);
        props.setPage(1);
    }, [searchTerm, selectedTags, props.issues]);

    const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(e.target.value);
    };

    const handleTagToggle = (tag: string) => {
        setSelectedTags(prev =>
            prev.includes(tag) ? prev.filter(t => t !== tag) : [...prev, tag]
        );
    };

    const handlePageChange = (page: number) => {
        props.setPage(page);
    };

    const totalPages = Math.ceil(filteredIssues.length / itemsPerPage);

    return (
        <section id="issues" className="w-full py-12 md:py-24 lg:py-32 bg-white">
            <div className={'flex flex-col max-w-3xl mx-auto px-4 md:px-6'}>
                <div className="mb-8">
                    <input
                        type="text"
                        placeholder="Buscar por nome, localidade, ou habilidades..."
                        value={searchTerm}
                        onChange={handleSearchChange}
                        className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div className="mb-8 flex flex-wrap items-center justify-center gap-2">
                    {availableTags.map(tag => (
                        <button
                            key={tag}
                            onClick={() => handleTagToggle(tag)}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                                selectedTags.includes(tag)
                                    ? 'bg-blue-500 text-white'
                                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-gray-900">
                    Desenvolvedores Disponíveis
                </h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                    {paginatedIssues.map((issue: Issue) => (
                        <IssueCard
                            key={issue.number}
                            issue={issue}
                        />
                    ))}
                </div>
            </div>

            <Pagination
                page={props.page}
                setPage={props.setPage}
                totalPages={totalPages}
                handlePageChange={handlePageChange}
            />
        </section>
    );
};

export default IssuesSection;
