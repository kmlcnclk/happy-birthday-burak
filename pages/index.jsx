import Head from 'next/head';
import { useState, useEffect } from 'react';
import styles from '../styles/Home.module.css';
import Confetti from 'react-confetti';
import Image from '../components/Image';
import NextImage from 'next/image';
import Zoom from 'react-medium-image-zoom';

export default function Home() {
  const [textColor, setTextColor] = useState(false);

  const images1 = ['/1.jpg', '/2.jpg', '/3.jpg'];
  const images2 = ['/4.jpg', '/5.jpg', '/6.jpg'];
  const images3 = ['/7.jpg', '/8.jpg', '/9.jpg'];

  useEffect(() => {
    if (screen) {
      setTextColor(true);
    }
  }, []);

  return (
    <>
      {textColor && (
        <div>
          <Head>
            <title>Happy Birthday Burak</title>
            <meta name="description" content="Happy Birthday Burak" />
            <link rel="icon" href="/1.jpg" />
            <meta charSet="utf-8" />
            <meta name="robots" content="follow, index" />
            <meta http-equiv="x-ua-compatible" content="ie=edge" />
            <meta
              property="og:url"
              content="https://happy-birthday-burak.vercel.app"
            />
            <meta property="og:type" content="website" />
            <meta property="og:title" content="Burak Ceyhan" />
            <meta property="og:description" content="Burak Ceyhan" />
            <meta name="twitter:card" content="summary" />
            <meta
              name="twitter:url"
              content="https://happy-birthday-burak.vercel.app"
            />
            <meta name="twitter:title" content="Burak Ceyhan" />
            <meta name="twitter:description" content="Burak Ceyhan" />
            <meta content="#ffffff" name="theme-color" />
            <meta content="#ffffff" name="msapplication-TileColor" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <meta name="next-head-count" content="3" />
          </Head>
          <Confetti width={screen.width} height={screen.height} />
          <main>
            <audio crossOrigin="anonymous" loop autoPlay hidden>
              <source src="/music.mp3" type="audio/mpeg" />
              Music <code>audio</code> Song
            </audio>
            <div
              className={`flex flex-col items-center justify-center transition-all`}
            >
              <p
                className={`flex mt-20 mb-20 items-center justify-center sm:text-2xl md:text-6xl font-semibold transition-all ${styles.textColor} italic`}
              >
                Happy Birthday Burak
              </p>
              <div className=" justify-center flex-col grid grid-cols-1 md:grid-cols-3 gap-6">
                {images1.map((image, i) => (
                  <Image url={image} key={i} />
                ))}
              </div>
              <Zoom>
                <div className="border my-20 border-gray-200 rounded-xl width-[300px] flex items-center justify-center">
                  <NextImage
                    src="/1a.jpg"
                    width={800}
                    height={500}
                    className="object-contain"
                    priority={true}
                    alt="Image"
                  />
                </div>
              </Zoom>
              <div className=" justify-center flex-col grid grid-cols-1 md:grid-cols-3 gap-6">
                {images2.map((image, i) => (
                  <Image url={image} key={i} />
                ))}
              </div>
              <Zoom>
                <div className="border my-20 border-gray-200 rounded-xl width-[300px] flex items-center justify-center">
                  <NextImage
                    src="/2a.jpg"
                    width={800}
                    height={500}
                    className="object-contain"
                    priority={true}
                    alt="Image"
                  />
                </div>
              </Zoom>
              <div className=" justify-center flex-col grid grid-cols-1 md:grid-cols-3 gap-6">
                {images3.map((image, i) => (
                  <Image url={image} key={i} />
                ))}
              </div>
              <Zoom>
                <div className="border my-20 border-gray-200 rounded-xl width-[300px] flex items-center justify-center">
                  <NextImage
                    src="/3a.jpg"
                    width={800}
                    height={500}
                    className="object-contain"
                    priority={true}
                    alt="Image"
                  />
                </div>
              </Zoom>
            </div>
            <div className="bg-gray-400 p-1 rounded-lg lg:block fixed hidden left-10 bottom-10">
              <NextImage
                src="/korean-flag.jpg"
                width={100}
                height={100}
                className="object-contain"
                priority={true}
                alt="Image"
              />
            </div>
          </main>
        </div>
      )}
    </>
  );
}
