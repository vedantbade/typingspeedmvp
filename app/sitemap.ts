import { MetadataRoute } from "next";

const BASE_URL = "https://typesprints.com";

// Static top-level routes
const staticRoutes = ["/", "/test", "/practice", "/lessons", "/improve-speed"];

// Nested routes under /lessons
const lessonRoutes = [
  "/lessons/lesson-1",
  "/lessons/lesson-2",
  "/lessons/lesson-3",
  "/lessons/lesson-4",
];

// Nested routes under /improve-speed
const improveSpeedRoutes = [
  "/improve-speed/how-to-increase-typing-speed",
  "/improve-speed/how-to-type-80-wpm",
  "/improve-speed/how-to-type-100-wpm",
];

const allRoutes = [...staticRoutes, ...lessonRoutes, ...improveSpeedRoutes];

export default function sitemap(): MetadataRoute.Sitemap {
  return allRoutes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }));
}
