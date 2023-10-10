import Image, { StaticImageData } from 'next/image';

interface PostImageProps {
  alt: string;
  caption?: string;
  align?: string;
  src: StaticImageData;
}

export default function PostImage({
  alt,
  caption,
  align,
  ...props
}: PostImageProps) {
  const classes =
    align === 'left'
      ? 'md:float-left md:max-w-sm md:mr-8 md:mt-0 lg:max-w-none lg:-ml-32'
      : '';

  return (
    <figure className={classes}>
      <Image className="w-full" {...props} alt={alt} />
      {caption && (
        <figcaption className="mt-3 text-center text-sm text-gray-500">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
