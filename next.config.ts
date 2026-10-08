import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // City pages for places we never served (pickups are refused outside
      // Riyadh, Jeddah, the Eastern Province and Al-Ahsa). They promised a
      // service the app then rejected, so they are folded into the cities
      // index. Re-add a city in content/cities.ts once the backend opens it.
      {
        source: "/:lang(ar|en)/cities/:city(makkah|madinah|taif|abha|buraidah)",
        destination: "/:lang/cities",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
