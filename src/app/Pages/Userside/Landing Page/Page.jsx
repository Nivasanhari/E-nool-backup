import BrowseCategories from "@/app/Pages/Userside/Landing Page/BrowseCategories"
import About from "@/app/Pages/Userside/Landing Page/About"
import Hero from "@/app/Pages/Userside/Landing Page/Hero"
import TrendingBooks from "@/app/Pages/Userside/Landing Page/TrendingBooks"
import Testimonials from "@/app/Pages/Userside/Landing Page/Testimonials"
import Explore from "@/app/Pages/Userside/Landing Page/Explore"
import ProcessFlow from "@/app/Pages/Userside/Landing Page/ProcessFlow"
import Pricing from "@/app/Pages/Userside/Landing Page/Pricing"

import FeaturedPublishers from "@/app/Pages/Userside/Landing Page/FeaturedPublishers"
import FeaturedAuthors from "@/app/Pages/Userside/Landing Page/FeaturedAuthors"
import GetStarted from "@/app/Pages/Userside/Landing Page/GetStarted"
export default function page() {
  return (
    // <About />

    <div className="">
      <Hero />
      <TrendingBooks />
      <TrendingBooks />
      <BrowseCategories />
      <Explore />
      <TrendingBooks />
      <ProcessFlow />
      <TrendingBooks />
      <FeaturedAuthors />
      <Testimonials />
      <FeaturedPublishers />
      <GetStarted />
      <About />
      <Pricing />
      </div>

  )
}