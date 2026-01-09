import { ArrowLeft, ArrowRight } from "@/assets/icons";
import type { PaginationProps } from "@/type/types"

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = ""
}) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = []; 
    const maxVisible = 5;

    if (totalPages <= maxVisible) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(totalPages - 1, currentPage + 1);

      if (currentPage <= 2) {
        endPage = 4;
      } else if (currentPage >= totalPages - 1) {
        startPage = totalPages - 3;
      }

      if (startPage > 2) {
        pages.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < totalPages - 1) {
        pages.push("...");
      }

      pages.push(totalPages);
    }

    return pages;
  };

  return (
    <div className={`flex items-center justify-center gap-2 mt-8 ${className}`}>
      {/* Previous Page */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Previous page"
      >
        <img src={ArrowLeft} alt="Arrow-Left" />
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1">
        {getPageNumbers().map((page, idx) => {
          if (page === "...") {
            return (
              <span key={`ellipsis-${idx}`} className="px-2 py-2 text-text-blue">
                ...
              </span>
            );
          }

          const isCurrentPage = page === currentPage;

          return (
            <button
              key={page}
              onClick={() => onPageChange(Number(page))}
              className={`px-3 py-2 font-medium ${
                isCurrentPage ? "text-light-blue" : "text-text-blue"
              }`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Page */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
        aria-label="Next page"
      >
        <img src={ArrowRight} alt="Arrow-Right" />
      </button>
    </div>
  );
};

export default Pagination;
