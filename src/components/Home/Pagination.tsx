interface PaginationProps {
    page: number;
    setPage: (page: number) => void;
    totalPages: number;
    handlePageChange: (page: number) => void;
}

export const Pagination = (props: PaginationProps) => {
    return props.totalPages > 1 && (
        <div className="mt-8 flex justify-center items-center gap-2">
            {/* Botão para ir à primeira página */}
            {props.page > 1 && (
                <button
                    onClick={() => props.handlePageChange(1)}
                    className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                    Primeira
                </button>
            )}

            {/* Botão para página anterior */}
            {props.page > 1 && (
                <button
                    onClick={() => props.handlePageChange(props.page - 1)}
                    className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                    Anterior
                </button>
            )}

            {/* Páginas intermediárias */}
            {Array.from({length: props.totalPages}, (_, index) => index + 1)
                .filter(
                    (page) =>
                        page === 1 || // Sempre mostrar a primeira página
                        page === props.totalPages || // Sempre mostrar a última página
                        (page >= props.page - 2 && page <= props.page + 2) // Mostrar páginas próximas à atual
                )
                .map((page) => (
                    <button
                        key={page}
                        onClick={() => props.handlePageChange(page)}
                        className={`px-3 py-1 rounded-md ${
                            props.page === page
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                        }`}
                    >
                        {page}
                    </button>
                ))}

            {/* Botão para próxima página */}
            {props.page < props.totalPages && (
                <button
                    onClick={() => props.handlePageChange(props.page + 1)}
                    className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                    Próxima
                </button>
            )}

            {/* Botão para ir à última página */}
            {props.page < props.totalPages && (
                <button
                    onClick={() => props.handlePageChange(props.totalPages)}
                    className="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300"
                >
                    Última
                </button>
            )}
        </div>
    )
}
