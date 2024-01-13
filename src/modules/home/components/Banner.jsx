import { useState, useEffect } from "react";
import { getBannerAPI } from "../../../apis/movieAPI";
import styles from "./Banner.module.css";
import Play from "../../../components/Play/Play";

const trailers = [
  "youtube.com/video1",
  "youtube.com/video2",
  "youtube.com/video3",
];

export default function Banner() {
  const [banners, setBanners] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBanners = async () => {
      try {
        let banners = await getBannerAPI();
        banners = banners.map((banner, index) => {
          return { ...banner, trailer: trailers[index] };
        });

        // console.log(banners);

        setBanners(banners);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getBanners();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex, banners]);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className={styles.bannerContainer}>
      {banners.map((banner, index) => (
        <img
          key={banner.maBanner}
          src={banner.hinhAnh}
          alt="banner"
          className={`${styles.banner} ${
            index === currentIndex ? styles.active : ""
          }`}
        />
      ))}
      <div className={styles.playButton}>
        {" "}
        <Play />
      </div>
    </div>
  );
}
