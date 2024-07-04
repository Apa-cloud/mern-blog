//functions need default export so that App.jsx can import them

export default function About() {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='max-w-2xl mx-auto p-3 text-center'>
        <div>
          <h1 className='text-3xl font font-semibold text-center my-7'>
            About Apa's Blog
          </h1>
          <div className='text-md text-gray-500 flex flex-col gap-6'>
            <p>
              Welcome to Apa's Blog! This blog was created by Aparajita Sircar
              as a personal project to showcase her creativity and skills. Aparajita is a passionate engineering student, always excited to learn about new  
              software technologies. 
            </p>

            <p>
              On this blog, you'll find articles on topics
              such as web development, software engineering, and programming
              languages. Stay tuned!
            </p>

            <p>
              I encourage you to leave comments on my posts and engage with
              other readers. You can like other people's comments and reply to
              them as well. Together, let's make this blog a big success!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
