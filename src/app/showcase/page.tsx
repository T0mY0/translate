import Head from 'next/head';
import Image from 'next/image';
import Container from '../components/container';
import Header from '../components/header';

const Showcase = () => {
  const showcases = [
    {
      name: 'Мэдээний портал',
      description: 'Гаднын эх сурвалжийн мэдээллийг цаг алдалгүй хэрэглэгчдэдээ эх хэлээрээ хүргэх боломжтой',
      imageUrl: '/usecase/newsfeed.png',
      link: 'https://newsfeed.tomyo.mn'
    },
    {
      name: 'Чатбот',
      description: 'ChatGPT (GPT4, Claude 3, Mistral) зэрэг LLM -г эх хэл дээрээ ашиглах боломжтой',
      imageUrl: '/usecase/chatbot.png',
      link: 'https://chatbot.tomyo.mn/'
    },
    {
      name: 'Онлайн худалдаа (dropshipping)',
      description: 'Гадаад онлайн худалдааны веб сайтуудын мэдээллийг хэл рүүгээ автоматаар хөрвүүлэх боломжтой',
      imageUrl: '/usecase/commerce.svg',
      link: '#'
    },
    {
      name: 'Таны бизнес хэрэгцээнд',
      description: 'Та өөрийн бизнес хэрэгцээнд нэвтрүүлэх сонирхолтой байгаа бол бидэнтэй холбогдоно уу',
      imageUrl: '/usecase/business.jpg',
      link: 'mailto:hello@tomyo.mn'
    },
  ];

  return (
    <>
      <Head>
        <title>Showcase</title>
      </Head>
      <Header />
      <Container>
        <main className="flex min-h-screen flex-col items-center justify-between">
          <div className="sm:px-6 lg:px-8 mt-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {showcases.map((showcase, index) => (
                <a href={showcase.link} target="_blank" key={index} className="block p-4 shadow-lg rounded-lg hover:shadow-xl transition-shadow duration-300">
                  <Image src={showcase.imageUrl} alt={showcase.name} width={400} height={250} className="rounded-md" />
                  <div className="mt-4">
                    <h3 className="text-lg font-semibold">{showcase.name}</h3>
                    <p className="mt-1 text-sm text-gray-600">{showcase.description}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </main>
      </Container>
    </>
  );
};

export default Showcase;