
import { useState } from "react"
import ThemeCard from "@/components/cards/ThemeCard"
import Pagination from "@/components/pagination/Pagination"
import { THEMES } from "@/data/themes"
import HeroSlider from "@/components/home/heroSlider"


const Themes = () => {
  const [currentPage, setCurrentPage] = useState(1)
  const cardsPerPage = 8

  const totalPages = Math.ceil(THEMES.length / cardsPerPage)
  const startIndex = (currentPage - 1) * cardsPerPage
  const endIndex = startIndex + cardsPerPage
  const currentCards = THEMES.slice(startIndex, endIndex)

  return (
    <div className="w-full min-h-screen flex flex-col items-center">
      <div className="relative p-4 w-full">
        {/* <Hero /> */}
        <HeroSlider />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-8 mt-8 lg:-mt-30 z-1 relative justify-items-center 
    overflow-hidden">
        {currentCards.map((theme) => (
          <ThemeCard
            key={theme.id}
            title={theme.title}
            image={theme.image}
          />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
        className="mt-8"
      />
    </div>
  )
}

export default Themes
