import Image from 'next/image';

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center flex-wrap
    my-10 w-full'>
      <h1 className='text-3xl text-black mb-6  '>About RecipeHaven</h1>
      <Image 
        src="/recipeHaven.jpeg" 
        alt="Recipe Haven"
        height={300}
        width={400}
        className='object-cover rounded-lg mb-7 max-w-[60%]' 
      />
      <h2 className='max-w-[60%] text-2xl text-black mb-8'>RecipeHaven was born out of the idea that finding and cooking easy, elegant recipes should be a delightful experience.</h2>
      <p className='max-w-[60%] text-base mb-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu ante nec turpis rutrum vehicula. Sed non purus eu tortor tristique varius. Maecenas gravida massa quis elit cursus elementum. Duis aliquet non velit non interdum. In hac habitasse platea dictumst. Proin ut lacinia lorem, ut ultricies metus. Vivamus sed commodo turpis, et interdum mi.</p>
      <p className='max-w-[60%] text-base'>Proin aliquam at tortor tincidunt venenatis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce egestas tortor nec mattis dapibus. Phasellus interdum mi sit amet urna finibus, et ullamcorper massa mollis. Curabitur ac leo libero. Nunc rhoncus augue non arcu tincidunt, tincidunt blandit ipsum finibus. Quisque ac dictum augue, sollicitudin dictum neque.</p>
    </div>
  );
};

export default Home;
