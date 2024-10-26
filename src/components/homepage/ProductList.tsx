import Image from "next/image";
import vitraChair1 from "../../../public/images/vitra/vitra-chair-1.avif";
import nendoChair1 from "../../../public/images/nendo/nendo-chair-1.avif";
import knollTable from "../../../public/images/knoll/knoll-table.avif";
import uchidaChair1 from "../../../public/images/uchida/uchida-chair-1.avif";
import hayChair from "../../../public/images/hay/hay-chair.avif";

const galleryImages = [
    {
        src: vitraChair1,
        alt: "vitra-chair",
        alignRight: false
    },
    {
        src: nendoChair1,
        alt: "nendo-chair",
        alignRight: true
    },
    {
        src: knollTable,
        alt: "knoll-table",
        alignRight: false
    },
    {
        src: uchidaChair1,
        alt: "uchida-chair",
        alignRight: true
    },
    {
        src: hayChair,
        alt: "hay-chair",
        alignRight: false
    }
];

export default function ProductList() {

    return (
        <div className="flex flex-col gap-16 sm:gap-6 pt-[60px] px-5 pb-16">
            {galleryImages.map((image, index) => (
                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 h-[355px] xl:h-[620px]">
                    {image.alignRight && <div className="hidden md:block md:col-span-1" />}
                    <div className="relative">
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            quality={100}
                            className="object-cover md:object-scale-down rounded-lg"
                        />
                    </div>
                    {!image.alignRight && <div className="hidden md:block md:col-span-1" />}
                </div>
            ))}
        </div>
    )
}