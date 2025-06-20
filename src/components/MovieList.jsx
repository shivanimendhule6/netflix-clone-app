
import { API_IMAGE_URL } from '../utils/constants';
import MoviesCard from './MoviesCard';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const MovieList = ({movies , title}) => {
  return (
    <div>
        <div className='flex flex-col items-center justify-center px-8 mb-5'>
            <h1 className='text-xl font-bold text-white mb-4 text-left w-[100%]'>{title}</h1>
              <Swiper
                loop={true}
                spaceBetween={10}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={false}
                breakpoints={{
                  450: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  1024: {
                    slidesPerView: 6,
                  },
                  1400: {
                    slidesPerView: 9,
                  },}}
                navigation={false}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                >
                { movies?.map((movie) => (<SwiperSlide><MoviesCard moviescard={movie} key={movie.id}></MoviesCard></SwiperSlide> ))}
              </Swiper>
        </div>  
    </div>
  )
}

export default MovieList