import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        /*
         * TEMP: placehold.co is used for placeholder images throughout the site.
         * Once real brand photography is available, replace placeholder <Image> srcs
         * and remove this entry if placehold.co is no longer referenced.
         */
        protocol: "https",
        hostname: "placehold.co",
      },
      {
        // TEMP: loremflickr.com serves topic-relevant stock photos for missing imagery.
        // Remove once all placeholder <Image> srcs are replaced with real photography.
        protocol: "https",
        hostname: "loremflickr.com",
      },
    ],
  },
};

export default nextConfig;
