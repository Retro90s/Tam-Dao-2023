import Bridge from '@/components/Bridge';
import Gallery from '@/components/Gallery';

const title = 'KỶ NIỆM TAM ĐẢO 2023';
const time = 'Tháng 1, 2023';
const local = 'Tam Đảo, Vĩnh Phúc';
const author = 'Long Nhat Nguyen';
const authorURL = 'https://torn4dom4n.github.io';

export default function Home() {
  return (
    <>
      <main className='mx-auto max-w-[1960px] p-4'>
        <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4'>
          <div className='after:content shadow-highlight after:shadow-highlight relative col-span-1 row-span-3 flex flex-col items-center justify-end gap-4 overflow-hidden rounded-lg bg-white/10 px-6 pb-16 pt-64 text-center text-white after:pointer-events-none after:absolute after:inset-0 after:rounded-lg sm:col-span-2 lg:col-span-1 lg:row-span-2 lg:pt-0'>
            <div className='absolute inset-0 flex items-center justify-center opacity-20'>
              <span className='flex max-h-full max-w-full items-center justify-center'>
                <Bridge />
              </span>
              <span className='absolute inset-x-0 bottom-0 h-[400px] bg-gradient-to-b from-black/0 via-black to-black'></span>
            </div>
            <div className='font-display relative mt-10 uppercase'>
              <h1 className='mb-4 text-2xl font-bold'>{title}</h1>
              <div className='font-semibold text-white/75'>{time}</div>
              <div className='mt-1 font-semibold leading-6 text-white/50'>
                {local}
              </div>
            </div>
          </div>
          <Gallery />
        </div>
      </main>
      <footer className='flex flex-col justify-between space-y-4 p-6 text-center text-white/80 sm:p-12'>
        <div>
          made with love by{' '}
          <a
            href={authorURL}
            target='_blank'
            className='font-semibold hover:text-white'
            rel='noreferrer'
          >
            {author}
          </a>
        </div>
      </footer>
    </>
  );
}
