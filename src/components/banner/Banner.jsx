// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import slide1 from '../../assets/slider1.jpg'
import slide2 from '../../assets/slider2.jpg'
import slide3 from '../../assets/slider3.jpg'
import slide4 from '../../assets/slider4.jpg'
import Slide from './Slide'
const Banner = () => {
    return (
        <div className='pb-10'>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                loop={true}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className='mySwiper'
            >
                <SwiperSlide>
                    <Slide image={slide1}>
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={slide2}>
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={slide3}>
                    </Slide>
                </SwiperSlide>
                <SwiperSlide>
                    <Slide image={slide4}>
                    </Slide>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Banner;