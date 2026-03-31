import type { CarouselImage } from "@/types";

const CLOUDINARY_URL = "https://res.cloudinary.com/dl5ptl1zm/image/upload/v1774958962";

export const carouselImages: CarouselImage[] = [
  { src: `${CLOUDINARY_URL}/Certificate_kvmnfu.jpg`, alt: "Certificate 1" },
  { src: `${CLOUDINARY_URL}/Certificate_2_dsvgzo.jpg`, alt: "Certificate 2" }
]

export const conveyorImages: CarouselImage[] = [
  { src: `${CLOUDINARY_URL}/A1_mfpx7v.jpg`, alt: "A1" },
  { src: `${CLOUDINARY_URL}/A2_w7xbxl.jpg`, alt: "A2" },
  { src: `${CLOUDINARY_URL}/A3_mpnhre.jpg`, alt: "A3" },
  { src: `${CLOUDINARY_URL}/A1_mfpx7v.jpg`, alt: "A1" },
  { src: `${CLOUDINARY_URL}/A2_w7xbxl.jpg`, alt: "A2" },
  { src: `${CLOUDINARY_URL}/A3_mpnhre.jpg`, alt: "A3" },
  { src: `${CLOUDINARY_URL}/A1_mfpx7v.jpg`, alt: "A1" },
  { src: `${CLOUDINARY_URL}/A2_w7xbxl.jpg`, alt: "A2" },
  { src: `${CLOUDINARY_URL}/A3_mpnhre.jpg`, alt: "A3" },
];

export const primaryImages = {
  logo: {
    src: `${CLOUDINARY_URL}/Logo_rntzxp.jpg`,
    alt: "Al Nasir Logo"
  },
  nasir: {
    src: `${CLOUDINARY_URL}/Nasir_Khan_lkfjwv.jpg`,
    alt: "Nasir Khan"
  },
}

export const projectImages = {
  siteProgress: {
    src: `${CLOUDINARY_URL}/Site_Progress_o2whxj.jpg`,
    alt: "Current Site Progress",
  },
  construction: {
    src: `${CLOUDINARY_URL}/Construction_ydbcsw.jpeg`,
    alt: "Future Construction Project",
  },
  progress: {
    src: `${CLOUDINARY_URL}/Progress_ruweh3`,
    alt: "Project Progress",
  },
};

