import type { CarouselImage } from "@/types";

const CLOUDINARY_URL = "https://res.cloudinary.com/dl5ptl1zm/image/upload/v1774958962";
const CLOUDINARY_400_URL = "https://res.cloudinary.com/dl5ptl1zm/image/upload/f_auto,q_auto,w_400,h_400,c_fill/v1774958962";

export const carouselImages: CarouselImage[] = [
  { src: `${CLOUDINARY_URL}/Udyam_Certificate_1_blinky.jpg`, alt: "Certificate 1" },
  { src: `${CLOUDINARY_URL}/Vikamshi_Fabrics_Pvt_Ltd.jpg_ok1wha.jpg`, alt: "Certificate 2" }
];

const conveyorImageBase: CarouselImage[] = [
  { src: `${CLOUDINARY_URL}/A1_mfpx7v.jpg`, alt: "A1" },
  { src: `${CLOUDINARY_URL}/A2_w7xbxl.jpg`, alt: "A2" },
  { src: `${CLOUDINARY_URL}/A3_mpnhre.jpg`, alt: "A3" },
  { src: `${CLOUDINARY_URL}/A4_fk3ib5.jpg`, alt: "A4" },
  { src: `${CLOUDINARY_URL}/A5_dkkakn.jpg`, alt: "A5" },
  { src: `${CLOUDINARY_URL}/A6_acl7oi.jpg`, alt: "A6" },
  { src: `${CLOUDINARY_URL}/A7_ekbmfv.jpg`, alt: "A7" },
  { src: `${CLOUDINARY_URL}/A8_ee0q9n.jpg`, alt: "A8" },
  { src: `${CLOUDINARY_URL}/A9_jxjzca.jpg`, alt: "A9" },
  { src: `${CLOUDINARY_URL}/A10_vmscn6.jpg`, alt: "A10" },
  { src: `${CLOUDINARY_URL}/A11_y79t97.jpg`, alt: "A11" },
  { src: `${CLOUDINARY_URL}/A12_wulpgi.jpg`, alt: "A12" },
  { src: `${CLOUDINARY_URL}/A13_xsbl5d.jpg`, alt: "A13" },
];

export const conveyorImages: CarouselImage[] = [...conveyorImageBase, ...conveyorImageBase];

export const primaryImages = {
  logo: {
    src: `https://res.cloudinary.com/dl5ptl1zm/image/upload/e_vibrance/v1774958962/the_logo_azmbat.jpg`,
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

export const homeImages: Record<string, string> = {
  "audio": `${CLOUDINARY_400_URL}/Audio_sfkl5g.avif`,
  "video": `${CLOUDINARY_400_URL}/Video_iv1uqo.png`,
  "upload": `${CLOUDINARY_400_URL}/Upload_zzr6ms.jpg`,
  "downloads": `${CLOUDINARY_400_URL}/Donwloads_gatvzt.jpg`,
  "camera": `${CLOUDINARY_400_URL}/Camera_j5dp1t.png`,
  "speaker": `${CLOUDINARY_400_URL}/Audio_lgod54.webp`,
};
