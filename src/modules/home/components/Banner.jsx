import { useState, useEffect } from "react";
import { getBannerAPI } from "../../../apis/movieAPI";

const trailers = [
  "youtube.com/video1",
  "youtube.com/video2",
  "youtube.com/video3",
];

export default function Banner() {
  const [banners, setBanners] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getBanners = async () => {
      try {
        let banners = await getBannerAPI();
        banners = banners.map((banner, index) => {
          return { ...banner, trailer: trailers[index] };
        });

        console.log(banners);

        setBanners(banners);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    getBanners();
  }, []);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div>
      {banners.map((banner) => (
        <img
          key={banner.maBanner}
          width={100}
          height={100}
          src={banner.hinhAnh}
          alt="banner"
        />
      ))}
    </div>
  );
}
