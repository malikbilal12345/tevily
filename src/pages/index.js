import AboutTwo from "@/components/AboutTwo/AboutTwo";
import AboutOne from "@/components/AboutOne/AboutOne";
import BookNow from "@/components/BookNow/BookNow";
import PopularToursTwo from "@/components/PopularTours/PopularToursTwo";
import DestinationsOne from "@/components/DestinationsOne/DestinationsOne";
import GalleryOne from "@/components/GalleryOne/GalleryOne";
import Layout from "@/components/Layout/Layout";
import MainSlider from "@/components/MainSlider/MainSlider";
import NewsOne from "@/components/NewsOne/NewsOne";
import PopularTours from "@/components/PopularTours/PopularTours";
import TestimonialOne from "@/components/TestimonialOne/TestimonialOne";
import TourSearch from "@/components/TourSearch/TourSearch";
import VideoOne from "@/components/VideoOne/VideoOne";
import MarkerCountries from "@/components/WhyChoose/MarkerCountries";
import WhyChoose from "@/components/WhyChoose/WhyChoose";
import ThreeIconBox from "@/components/ThreeIconBox/ThreeIconBox";
import React from "react";

const Home = () => {
  return (
    <Layout pageTitle="Home One">
      <MainSlider />
      <TourSearch />
      <AboutTwo />
      <DestinationsOne /> 
      <PopularTours />
      <AboutOne />
      <PopularToursTwo />
      <ThreeIconBox />
      <VideoOne />
      <MarkerCountries />
      <WhyChoose />
      <NewsOne />
      <BookNow />
    </Layout>
  );
};

export default Home;
