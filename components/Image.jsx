import React from 'react';
import NextImage from 'next/image';
import Zoom from 'react-medium-image-zoom';

function Image({ url }) {
  return (
    <div className="border border-gray-200 rounded-xl width-[300px] flex items-center justify-center">
      <Zoom>
        <NextImage
          src={url}
          width={300}
          height={500}
          className="object-contain"
        />
      </Zoom>
    </div>
  );
}

export default Image;
