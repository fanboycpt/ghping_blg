import GalleryGrid from '../GalleryGrid';
import stadium1 from '@assets/generated_images/Glückauf_Kampfbahn_stadium_540adcba.png';
import stadium2 from '@assets/generated_images/Stadion_Niederrhein_7f358c95.png';
import stadium3 from '@assets/generated_images/Parkstadion_Gelsenkirchen_3195c597.png';
import sticker from '@assets/generated_images/Groundhopping_sticker_collection_126c1d11.png';

export default function GalleryGridExample() {
  const images = [
    { id: '1', src: stadium1, alt: 'Glückauf Kampfbahn', caption: 'Glückauf Kampfbahn - Gelsenkirchen' },
    { id: '2', src: stadium2, alt: 'Stadion Niederrhein', caption: 'Stadion Niederrhein - Oberhausen' },
    { id: '3', src: stadium3, alt: 'Parkstadion', caption: 'Parkstadion - Gelsenkirchen' },
    { id: '4', src: sticker, alt: 'Sticker Collection', caption: 'Groundhopping Sticker & Street Art' },
  ];

  return (
    <div className="p-4 bg-background">
      <GalleryGrid images={images} />
    </div>
  );
}
