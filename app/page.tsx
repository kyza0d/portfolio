"use client"

import Head from "next/head";

import { Text } from "@/components/ui/text";

import { concat } from "utils";

import ContactForm from 'components/Contact';
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Console } from "console";

export default function Home() {
  function Line({ className }: { className?: string }) {
    return <div className={concat("my-14 h-[1px] bg-shaded", className)} />;
  }

  function Skill({ lang: language, last }: { lang: string, to?: string, last?: boolean }) {
    return (
      <Text size="sm">
        {language} {!last && <span className="leading-5 text-md px-[0.1em] align-bottom mx-0.5">{"/"}</span>}
      </Text>
    );
  }

  return (
    <div>
      <Head>
        <title>Evan Smith | Software Engineer</title>
        <meta
          name="description"
          content="Evan Smith is a web developer with 4 years of experience who is dedicated to creating high-quality websites and web applications. He is always striving to improve his skills and stay current with the latest trends and technologies in the industry. He is committed to providing his clients with websites that not only look great but also function smoothly, and takes pride in delivering projects on-time and within budget."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* -- [ Home ] -------------------------------------------------- */}

      <div className="z-10 flex items-center py-8 md:hidden">
        <Text size="md" variant="header">
          Evan Smith
        </Text>
        <Separator className="mx-4 h-5 bg-shaded" orientation="vertical" />
        <Text size='sm' className="mb-0">
          Software Engineer
        </Text>
      </div>

      <div className="my-2 h-[1px] bg-shaded md:hidden" />


      <section id="Home" className="mx-auto min-h-[70vh] md:flex md:justify-center md:pt-24">
        <Button variant="default" size="sm" className="w-fit mb-2">
          Available for work
        </Button>
        <Text variant="header" size="2xl" className="max-w-[25ch]">
          Creative problem solver specializing in developing sleek, user-friendly websites.
        </Text>

        <div className="md:flex-col-reverse flex md:items-start items-center gap-6 mt-4">

          <div className="space-x-4 flex md:w-full sm:flex-wrap sm:space-x-0 sm:space-y-4">
            <Button variant="outline" size="lg" className="sm:w-full">
              <a href="#Projects"> Projects </a>
            </Button>
            <Button variant="outline" size="lg" className="sm:w-full">
              <a href="https://github.com/kyza0d/">Github</a>
            </Button>
          </div>

          <Text size="sm" className="md:pt-4 max-w-[52ch]">
            With over four years of web development experience, I excel in React, TypeScript, and Next.js, focusing on creating optimized, responsive, and user-friendly websites.
          </Text>
        </div>

      </section>

      {/* -- [ About ] ------------------------------------------------- */}

      <section id="About" className="mx-auto">
        <div className="mb-20 flex items-center justify-center">
          <Text variant="header" size="xl">
            About
          </Text>
          <div className="ml-16 mr-0 h-[1px] w-full bg-[#394760]">
          </div>
        </div>
        <div className="flex flex-col justify-center space-y-8">
          <Text size="sm" className="max-w-[60ch]">
            Hello and welcome to my web development portfolio. I started in this field out of a genuine interest in bringing together clean, user-friendly design with robust functionality. Here, you&apos;ll find a variety of projects I&apos;ve worked on, each reflecting a commitment to creating practical and attractive websites that perform well across different devices.
          </Text>
          <Text size="sm" className="max-w-[60ch]">
            Discover a variety of projects in my collection, from sleek, professional corporate sites to dynamic, user-engaging e-commerce platforms. My approach combines client vision, meticulous attention to detail, and a commitment to exceeding expectations. Web development for me is an art, creating experiences that resonate and engage.
          </Text>
          <Text size="sm" className="max-w-[60ch]">
            Thank you for exploring my work. I am eager to hear about your web development needs and collaborate to craft a website that truly represents your vision and purpose. Let&apos;s work together to create a digital presence that stands out and effectively communicates your message.
          </Text>
        </div>
      </section>

      {/* -- [ Skills ] ------------------------------------------------ */}

      <section id="Skills">
        <div className="mb-20 flex items-center justify-center ">
          <Text variant="header" size="xl">
            Skills
          </Text>
          <div className="ml-16 mr-0 h-[1px] w-full bg-[#394760]">
          </div>
        </div>

        <div className="grid-cols-custom grid w-full md:grid-cols-2 ">
          <Text variant="subtitle">Front-end:</Text>
          <div className="flex flex-wrap h-fit gap-y-2">
            <Skill lang="React" />
            <Skill lang="Next.js" />
            <Skill lang="TypeScript" />
            <Skill lang="Shadcn + Radix UI" />
            <Skill lang="Google Devtools" />
            <Skill lang="Tailwind CSS" last={true} />
          </div>

          <Text size="sm" className="md:col-span-2 md:mt-4">
            Expert in building visually appealing and user-friendly websites using a variety of
            tools and techniques. Skilled in creating responsive and dynamic web experiences.
          </Text>
        </div>

        <Line />

        <div className="grid-cols-custom grid w-full md:grid-cols-2">
          <Text variant="subtitle">Back-end:</Text>

          <div className="flex flex-wrap h-fit gap-y-2">
            <Skill lang="Python" />
            <Skill lang="Docker" />
            <Skill lang="Railway" />
            <Skill lang="Supabase" />
            <Skill lang="Prisma DB" />
            <Skill lang="Next API Routes" />
            <Skill lang="Next Auth" />
            <Skill lang="PlanetScale" />
            <Skill lang="Strapi" last={true} />
          </div>

          <Text size="sm" className="md:col-span-2 md:mt-4">
            My skills include working with server-side languages, databases, and APIs to build
            robust and functional back-end systems. I am skilled in integrating the front-end and
            back-end of a web application to create a seamless user experience.
          </Text>
        </div>

        <Line />

        <div className="grid-cols-custom grid w-full md:grid-cols-2">
          <Text variant="subtitle">Design:</Text>
          <div className="flex flex-wrap h-fit gap-y-2">
            <Skill lang="Figma" />
            <Skill lang="Design Resources" last={true} />
          </div>
          <Text size="sm" className="md:col-span-2 md:mt-4">
            I have experience in web design, utilizing tools such as Figma to create visually
            appealing and user-friendly websites that meet the needs of the project. I am skilled
            in using design principles and techniques to create cohesive and effective designs
            that enhance the user experience.
          </Text>
        </div>
        <Line />
        <div className="grid-cols-custom grid w-full md:grid-cols-2">
          <Text variant="subtitle">Utilites:</Text>
          <div className="flex flex-wrap h-fit gap-y-2">
            <Skill lang="Git" />
            <Skill lang="Github" />
            <Skill lang="ChatGPT" />
            <Skill lang="VS Code" />
            <Skill lang="Neovim" last={true} />
          </div>
          <Text size="sm" className="md:col-span-2 md:mt-4">
            Proficient in essential tools like Git, GitHub, and ChatGPT for streamlined development and collaboration. Experienced with VS Code and Neovim for efficient coding—each utility enhances workflow and code quality, ensuring maintainable and collaborative project success.
          </Text>
        </div>
      </section>

      {/* -- Projects ---------------------------------------------- */}

      <section id="Projects">

        <div className="mb-20 flex items-center justify-center">
          <Text variant="header" size="xl">
            Projects
          </Text>
          <div className="ml-16 mr-0 h-[1px] w-full bg-[#394760]">
          </div>
        </div>

        <div className="mb-24 md:flex-col-reverse flex justify-center gap-12 md:mb-16 ">
          <div className="my-auto flex flex-col">
            <div className="flex items-start flex-col mb-6">
              <Text variant="header" size="lg">Pomotea</Text>
              <Text variant="default" size="sm">Pomodoro Timer App</Text>
            </div>

            <Text variant="subtitle" size="sm" className="mb-2">Description:</Text>
            <Text size="sm" className="mb-6 max-w-[60ch]">
              Pomotea is a feature-rich Pomodoro timer application designed to enhance productivity through structured focus and break sessions. It allows users to create and manage custom sessions, adjust appearance settings, and receive notifications for focus and break times. The app's interface is intuitive and customizable, making it suitable for various productivity needs.
            </Text>

            <Text variant="subtitle" size="sm" className="my-2">Key Features:</Text>

            <dl className="mb-5 list-disc text-lightgray pl-4 space-y-3">
              <div>
                <dt>
                  <Text size='sm' variant="subtitle">Persistent Session Management.</Text>
                </dt>
                <dd>
                  <Text size='sm' className="text-gray-600">Pomotea saves user session data, ensuring that current sessions and durations are remembered even when the page is closed and reopened. This persistence allows users to maintain their workflow without losing track of their progress.</Text>
                </dd>
              </div>
              <div>
                <dt>
                  <Text size='sm' variant="subtitle">Customizable Focus and Break Sessions.</Text>
                </dt>
                <dd>
                  <Text size='sm' className="text-gray-600">Users can create custom focus and break sessions tailored to their specific needs. The app offers flexibility in session length, titles, and types, supporting a personalized approach to time management.</Text>
                </dd>
              </div>
              <div>
                <dt>
                  <Text size='sm' variant="subtitle">Appearance and Notification Settings.</Text>
                </dt>
                <dd>
                  <Text size='sm' className="text-gray-600">Pomotea includes extensive customization options for appearance, such as font selection, background settings, and theme adjustments. Users can also configure notifications to stay informed about session changes, enhancing their productivity routine.</Text>
                </dd>
              </div>
              <div>
                <dt>
                  <Text size='sm' variant="subtitle">User-friendly Interface.</Text>
                </dt>
                <dd>
                  <Text size='sm' className="text-gray-600">The app features a clean and intuitive interface, making it easy to navigate and use. Its simplicity ensures a smooth user experience, helping users focus on their tasks without distraction.</Text>
                </dd>
              </div>
            </dl>

            <Text variant="subtitle" size="sm" className="my-2">Technologies:</Text>

            <Text variant='subtitle' className="mr-2" size="sm">Front-end:</Text>
            <div className="flex items-center mb-2">
              <Skill lang="React" />
              <Skill lang="Next.js" />
              <Skill lang="Tailwind CSS" last={true} />
            </div>

            <Text variant="subtitle" className="mr-2" size="sm">Back-end:</Text>
            <div className="mb-6 flex items-center">
              <Skill lang="IndexedDB" />
            </div>

            <Text variant="subtitle" size="sm" className="my-2">Links:</Text>

            <div>
              <Text size="sm" variant="subtitle">
                Website:
              </Text>
              <Text size="sm" className="underline mb-2">https://pomotea.com</Text>
            </div>
            <div>
              <Text size="sm" variant="subtitle">
                Github:
              </Text>
              <Text size="sm" className="underline">https://github.com/username/repo</Text>
            </div>
          </div>

          <div className="md:w-full my-auto h-[400px] w-[60%] bg-[#000000]/20 rounded-[9px]">
            <div className="flex items-center relative h-full w-full">
              <Text className="gradient mx-auto after:opacity-[0.7]">Coming soon</Text>
            </div>
          </div>
        </div>

        <div className="mb-24 md:flex-col-reverse flex justify-center gap-12 md:mb-16">
          <div className="my-auto flex flex-col">
            <div className="flex items-start flex-col mb-6">
              <Text variant="header" size="lg">Indexr</Text>
              <Text variant="default" size="sm">Extensive Data Search</Text>
            </div>

            <Text variant="subtitle" size="sm" className="mb-2">Description:</Text>
            <Text size="sm" className="mb-6 max-w-[60ch]">
              Indexr is a versatile web application designed for efficient data management and searching. It empowers users with optimized search capabilities using Fuse.js, allowing seamless exploration of custom datasets. The clean interface ensures a user-friendly experience, while the app's login feature enables access to and viewing of uploaded datasets.
            </Text>

            <Text variant="subtitle" size="sm" className="my-2">Key Features:</Text>

            <dl className="mb-5 list-disc text-lightgray pl-4 space-y-3">
              <div>
                <dt>
                  <Text size='sm' variant="subtitle">Optimized searching with Fuse.js integration.</Text>
                </dt>
                <dd>
                  <Text size='sm' className="text-gray-600">Indexr integrates Fuse.js for optimized search functionality, allowing users to quickly find relevant information within extensive datasets. This feature enhances productivity by reducing the time spent searching for specific data points.</Text>
                </dd>
              </div>
              <div>
                <dt>
                  <Text size='sm' variant="subtitle">Secure login and dataset access.</Text>
                </dt>
                <dd>
                  <Text size='sm' className="text-gray-600">The application includes a secure login system, enabling users to access and view datasets uploaded by others. This fosters a collaborative environment where data can be shared and analyzed collectively, enhancing teamwork and resource sharing.</Text>
                </dd>
              </div>
              <div>
                <dt>
                  <Text size='sm' variant="subtitle">Custom dataset management.</Text>
                </dt>
                <dd>
                  <Text size='sm' className="text-gray-600">Users can upload their custom datasets to Indexr, making it easier to manage and search through personalized data collections. This feature is particularly useful for projects requiring specific datasets, offering a tailored data management experience.</Text>
                </dd>
              </div>
              <div>
                <dt>
                  <Text size='sm' variant="subtitle">User-friendly interface.</Text>
                </dt>
                <dd>
                  <Text size='sm' className="text-gray-600">Indexr boasts a clean and intuitive interface, ensuring a smooth user experience. The simplicity of the design reduces the learning curve, allowing users to navigate the application effortlessly and focus on their data analysis tasks.</Text>
                </dd>
              </div>
            </dl>

            <Text variant="subtitle" size="sm" className="my-2">Technologies:</Text>

            <Text variant='subtitle' className="mr-2" size="sm">Front-end:</Text>
            <div className="flex items-center mb-2">
              <Skill lang="React" />
              <Skill lang="Next.js" />
              <Skill lang="Tailwind CSS" last={true} />
            </div>

            <Text variant="subtitle" className="mr-2" size="sm">Back-end:</Text>
            <div className="mb-6 flex items-center">
              <Skill lang="PlanetScale" />
              <Skill lang="Prisma" last={true} />
            </div>

            <Text variant="subtitle" size="sm" className="my-2">Links:</Text>

            <div>
              <Text size="sm" variant="subtitle">Website:</Text>
              <Text size="sm" className="underline mb-2">https://example.com</Text>
            </div>
            <div>
              <Text size="sm" variant="subtitle">Github:</Text>
              <Text size="sm" className="underline">https://github.com/username/repo</Text>
            </div>
          </div>

          <div className="md:w-full my-auto h-[400px] w-[60%] bg-[#000000]/20 rounded-[9px]">
            <div className="flex items-center relative h-full w-full">
              <Text className="gradient mx-auto after:opacity-[0.7]">Coming soon</Text>
            </div>
          </div>
        </div>

      </section >

      {/* -- Contact ----------------------------------------------- */}
      < section id="Contact" >

        <div className="mb-[2em]">
          <Text variant="header" size="xl">
            Contact
          </Text>
          <Text size="sm" className="text-gray max-w-[30ch]">
            I'm seeking new oppurtunities and collaborations, feel free to reach out.
          </Text>
        </div>

        <ContactForm />
      </section >
    </div >
  );
}
