import BrowseCategories from "@/app/Pages/Userside/landingPage/BrowseCategories";
import About from "@/app/Pages/Userside/landingPage/About";
import Hero from "@/app/Pages/Userside/landingPage/Hero";

import Testimonials from "@/app/Pages/Userside/landingPage/Testimonials";
import ProcessFlow from "@/app/Pages/Userside/landingPage/ProcessFlow";
import Pricing from "@/app/Pages/Userside/landingPage/Pricing";
import FeaturedPublishers from "@/app/Pages/Userside/landingPage/FeaturedPublishers";
import FeaturedAuthors from "@/app/Pages/Userside/landingPage/FeaturedAuthors";
import GetStarted from "@/app/Pages/Userside/landingPage/GetStarted";
import BookCategories from "../browsecategories/page";
import CategoriesButton from "../../../components/CategoriesButton/CategoriesButton";
import Navbar from "@/app/components/Navbar/Navbar";
import NewAndNoteworthy from "@/app/Pages/Userside/landingPage/NewAndNoteworthy";
import EnoolPicks from "@/app/Pages/Userside/landingPage/EnoolPicks";
import StartSeries from "./StartSeries";
import DefaultLayout from "@/app/components/DefaultLayout/layout";
import TrendingReads from "@/app/Pages/Userside/landingPage/TrendingReads";

export default function page() {
  return (
    <div className="landing_bg  font-graphik ">
      <DefaultLayout>
        <div className="hero_bg  ">
          <Hero />
          <TrendingReads />
        </div>
        <NewAndNoteworthy />
        <BrowseCategories />
        <EnoolPicks />
        <ProcessFlow />
        <div className="start_bg">
          <StartSeries />
          <FeaturedAuthors />
        </div>
        <Testimonials />
        <FeaturedPublishers />
        <GetStarted />
        <About />
        <Pricing />
      </DefaultLayout>
    </div>
  );
}
