import React from 'react';
import Layout from '../components/Layout';
import { register } from 'swiper/element/bundle';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '../assets/styles/Swiper.css';
import ImgBanner1 from '../assets/images/banner2.png';
import ImgBanner2 from '../assets/images/banner1.jpg';

register();

function Home() {
    const images = [
        { type: 'banner1', image: ImgBanner1 },
        { type: 'banner2', image: ImgBanner2 },
    ];

    return (
        <Layout>
            <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                navigation
                className="w-full"
            >
                {images.map((item) => (
                    <SwiperSlide key={item.type} className="w-full">
                        <img
                            className="w-full h-full object-cover"
                            src={item.image}
                            alt={`Imagem do ${item.type}`}
                        />
                        <div className="absolute inset-0 bg-black opacity-50"></div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Layout>
    );
}

export default Home;
