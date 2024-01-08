import Head from "next/head";

import { Heading, Paragraph, Small } from "layout/Typeography";

import { Button } from "components/Common/Button";
import { FaGithub } from "react-icons/fa";
import { FiBriefcase } from "react-icons/fi";

import { concat } from "utils";

import ContactForm from 'components/Contact';
import Image from "next/image";

export default function Home() {
  function Line({ className }: { className?: string }) {
    return <div className={concat("my-14 h-[1px] bg-shaded", className)} />;
  }

  function TechnologyIcon({ lang: language, img: image, to: link }: { lang: string, img?: string, to?: string }) {
    return (
      <Button className="my-0 mr-0 inline-block border-lightgray py-[0.4em]" size="small">
        <div
          className="inline-flex items-center justify-center gap-2 text-lightgray">
          {image && <Image alt="" width={18} height={18} className="mr-1 mt-0.5" src={image} />}
          <a target="_blank" rel="noreferrer" href={link}>{language}</a>
        </div>
      </Button>
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

      {/* -- Home -------------------------------------------------- */}

      <section id="Home">
        <div className="items-start pt-[10em]">
          {/* <Button size="medium" type="primary" className={mansalva.className}> */}
          {/* <Button variant="primary" size="medium">
            Let&apos;s work together
          </Button> */}
          <Heading className="text-bold max-w-[28ch] text-white" size="5xl">
            Passionate software engineer committed to crafting exceptional, user-focused web interfaces.
          </Heading>
        </div>

        <div className="flex items-center gap-6">
          <Button className="flex-row border-2 border-lightgray" size="medium">
            <FiBriefcase size={16} />
            <a href="#Projects">
              Projects
            </a>
          </Button>
          <Button className="flex-row border-2 border-lightgray" size="medium">
            <FaGithub size={16} />
            Github
          </Button>
          <Paragraph size="sm" className="max-w-[60ch] text-white md:max-w-[80ch]">
            With over four years of experience in web development, I am proficient in modern
            front-end technologies such as React, TypeScript, and Next.js. I specialize in
            building optimized, responsive, and user-friendly websites.
          </Paragraph>
        </div>
      </section>

      {/* -- About ------------------------------------------------- */}

      <section id="About">
        <div className="mb-[8em]">
          <Small size="4xl" className="text-white">
            About
          </Small>
        </div>
        <div className="flex flex-row gap-x-[2em] gap-y-2 md:flex-col">
          <div
            className={concat(
              "bg-[#000000]/20",
              "h-[26em] w-[26em]",
              "relative max-w-[26em] overflow-hidden rounded-[9px] opacity-[0.8] md:w-full"
            )}>
            <div className="gradient after:opacity-[0.7]"></div>
            {/* <Image alt="headshot" src="/headshot.jpg" fill={true} className="object-cover object-top saturate-0" /> */}
          </div>
          <div className="flex flex-col justify-center">
            <Paragraph size="sm" className="mb-6 max-w-[60ch] text-white">
              Hello and welcome to my web development portfolio. I started in this field out of a genuine interest in bringing together clean, user-friendly design with robust functionality. Here, you&apos;ll find a variety of projects I&apos;ve worked on, each reflecting a commitment to creating practical and attractive websites that perform well across different devices.
            </Paragraph>
            <Paragraph size="sm" className="mb-6 max-w-[60ch] text-white">
              Discover a variety of projects in my collection, from sleek, professional corporate sites to dynamic, user-engaging e-commerce platforms. My approach combines client vision, meticulous attention to detail, and a commitment to exceeding expectations. Web development for me is an art, creating experiences that resonate and engage.
            </Paragraph>
            <Paragraph size="sm" className="max-w-[60ch] text-white">
              Thank you for exploring my work. I am eager to hear about your web development needs and collaborate to craft a website that truly represents your vision and purpose. Let&apos;s work together to create a digital presence that stands out and effectively communicates your message.
            </Paragraph>
          </div>
        </div>
      </section>

      {/* -- Skills ------------------------------------------------ */}

      <section id="Skills">
        <div className="mb-[8em] flex items-center justify-center ">
          <Small size="4xl" className="text-white">
            Skills
          </Small>
          <div className="ml-16 mr-0 h-[1px] w-full bg-[#394760]">
          </div>
        </div>
        <div className="grid-cols-custom grid w-full md:grid-cols-2">
          <Small>Front-end:</Small>
          <div className="flex flex-wrap">
            <TechnologyIcon lang="React" img="/icons/react.svg" to="https://react.dev/" />
            <TechnologyIcon lang="Next.js" img="/icons/next.svg" to="https://nextjs.org/" />
            <TechnologyIcon lang="TypeScript" img="/icons/typescript.svg" to="https://www.typescriptlang.org/" />
            <TechnologyIcon lang="Tailwind CSS" img="/icons/tailwind.svg" to="https://tailwindcss.com/" />
          </div>

          <Paragraph size="sm" className="md:col-span-2 md:mt-4">
            Expert in building visually appealing and user-friendly websites using a variety of
            tools and techniques. Skilled in creating responsive and dynamic web experiences.
          </Paragraph>
        </div>
        <Line />
        <div className="grid-cols-custom grid w-full md:grid-cols-2 ">
          <Small>Backend-end:</Small>
          <div>
            <TechnologyIcon lang="Railway" img="/icons/railway.svg" to="https://railway.app/" />
            <TechnologyIcon lang="Supabase" img="/icons/supabase.svg" to="https://supabase.com/" />
            <TechnologyIcon lang="PlanetScale" img="/icons/planetscale.svg" to="https://planetscale.com/" />
            <TechnologyIcon lang="Python" img="/icons/python.svg" to="https://www.python.org/" />
            <TechnologyIcon lang="Node.js" img="/icons/nodejs.svg" to="https://nodejs.org/en/about" />
          </div>
          <Paragraph size="sm" className=" md:col-span-2 md:mt-4">
            My skills include working with server-side languages, databases, and APIs to build
            robust and functional back-end systems. I am skilled in integrating the front-end and
            back-end of a web application to create a seamless user experience.
          </Paragraph>
        </div>
        <Line />
        <div className="grid-cols-custom grid w-full md:grid-cols-2">
          <Small>Content Managment:</Small>
          <div className="flex flex-wrap">
            <TechnologyIcon lang="Strapi" img="/icons/strapi.svg" to="https://strapi.io/" />
          </div>
          <Paragraph size="sm" className="md:col-span-2 md:mt-4">
            I am skilled in identifying the most cost-effective and performant solution for a
            given project. I am always eager to learn and stay up-to-date with the latest best
            practices and technologies in content management.
          </Paragraph>
        </div>
        <Line />
        <div className="grid-cols-custom grid w-full md:grid-cols-2">
          <Small>Design:</Small>
          <Small size="xs" className="md:ml-auto md:text-right">
            Figma / Gimp <br />
            Design Fundamentals
          </Small>
          <Paragraph size="sm" className=" md:col-span-2 md:mt-4">
            I have experience in web design, utilizing tools such as Figma to create visually
            appealing and user-friendly websites that meet the needs of the project. I am skilled
            in using design principles and techniques to create cohesive and effective designs
            that enhance the user experience.
          </Paragraph>
        </div>
        <Line />
        <div className="grid-cols-custom grid w-full md:grid-cols-2">
          <Small>Utilites:</Small>
          <Small className="md:ml-auto md:text-right">
            Git / Stack Overflow <br />
            VS Code / Framer Motion
          </Small>
          <Paragraph size="sm" className="md:col-span-2 md:mt-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit at enim elit, viverra
            sagittis fermentum ac lectus — porta tellus elementum feugiat aliquam. Rhoncus ut amet
            vitae at eu tincidunt. Sagittis tortor, orci
          </Paragraph>
        </div>
      </section>

      {/* -- Projects ---------------------------------------------- */}

      <section id="Projects">

        <div className="mb-[8em] flex items-center justify-center">
          <Small size="4xl" className="text-white">
            Projects
          </Small>
          <div className="ml-16 mr-0 h-[1px] w-full bg-[#394760]">
          </div>
        </div>

        <div className="mb-[4em] flex justify-center gap-12 md:mb-8 ">
          <div className="my-auto flex flex-col">

            <Heading className="mb-3 text-white" size="3xl">
              Indexr <Small className="text-gray"> Extensive Data Search</Small>
            </Heading>

            <Small size="sm" className="flex items-center font-bold leading-6 text-white">
              Description:
            </Small>

            <Paragraph size="sm" className="mb-6 max-w-[60ch]">
              Indexr is a versatile web application designed for efficient data management and searching. It empowers users with optimized search capabilities using Fuse.js, allowing seamless exploration of custom datasets. The clean interface ensures a user-friendly experience, while the app's login feature enables access to and viewing of uploaded datasets.
            </Paragraph>

            <Small size="sm" className="flex items-center font-bold leading-6 text-white">
              Key Features:
            </Small>

            <ul className="mb-6 list-inside list-disc text-white">
              <li><Small>Optimized searching with Fuse.js integration.</Small></li>
              <li><Small>Login to access and view other uploaded datasets.</Small></li>
              <li><Small>Upload and search through custom datasets.</Small></li>
              <li><Small>Clean and user-friendly interface.</Small></li>
            </ul>

            <Small size="sm" className="flex items-center font-bold leading-6 text-white">
              Technologies:
            </Small>

            <div className="flex items-center">
              <Small size="sm">Front-end:</Small>
              <TechnologyIcon lang="React" img="/icons/react.svg" to="https://react.dev/" />
              <TechnologyIcon lang="Next.js" img="/icons/next.svg" to="https://nextjs.org/" />
              <TechnologyIcon lang="Tailwind CSS" img="/icons/tailwind.svg" to="https://tailwindcss.com/" />
            </div>

            <div className="mb-6 flex items-center">
              <Small size="sm">Back-end:</Small>
              <TechnologyIcon lang="PlanetScale" img="/icons/planetscale.svg" to="https://planetscale.com/" />
              <TechnologyIcon lang="Prisma" img="/icons/prismadb.svg" to="https://www.prisma.io/" />
            </div>

            <Small size="sm" className="flex items-center leading-6">
              Website: <span className="pl-3 underline">https://example.com</span>
            </Small>

            <Small size="sm" className="flex items-center leading-6">
              Github: <span className="pl-3 underline">https://github.com/username/repo</span>
            </Small>
          </div>


          <div className="my-auto h-[450px] w-[40%] bg-[#000000]/20">
            <div className="relative h-full w-full rounded-[9px]">
              <div className="gradient after:opacity-[0.7]"></div>
            </div>
          </div>
        </div>

        <div className="mb-[4em] flex justify-center gap-12 md:mb-8">

          <div className="my-auto h-[450px] w-[40%] bg-[#000000]/20">
            <div className="relative h-full w-full rounded-[9px]">
              <div className="gradient after:opacity-[0.7]"></div>
            </div>
          </div>
          <div className="my-auto flex flex-col">

            <Heading className="mb-3 text-white" size="3xl">
              Git.me <Small className="text-gray"> GitHub Readme Generator</Small>
            </Heading>

            <Small size="sm" className="flex items-center font-bold leading-6 text-white">
              Description:
            </Small>

            <Paragraph size="sm" className="mb-6 max-w-[60ch]">
              git.me is a powerful web application that simplifies the creation of GitHub Readmes. With an intuitive interface, users can effortlessly generate Readmes based on a configuration. Enjoy the flexibility to update your Readme easily, ensuring your project documentation stays up-to-date.
            </Paragraph>

            <Small size="sm" className="flex items-center font-bold leading-6 text-white">
              Key Features:
            </Small>

            <ul className="mb-6 list-inside list-disc text-white">
              <li><Small>Easily create GitHub Readmes based on a configuration.</Small></li>
              <li><Small>Clean and user-friendly interface.</Small></li>
              <li><Small>Ability to easily update the Readme.</Small></li>
            </ul>

            <Small size="sm" className="flex items-center font-bold leading-6 text-white">
              Technologies:
            </Small>

            <div className="flex items-center">
              <Small size="sm">Scripting:</Small>
              <TechnologyIcon lang="Node.js" img="/icons/nodejs.svg" to="https://nodejs.org/" />
              <TechnologyIcon lang="Fetch API" img="/icons/fetchapi.svg" />
              <TechnologyIcon lang="GitHub API" img="/icons/github.svg" />
            </div>

            <Small size="sm" className="flex items-center leading-6">
              Script Location: <span className="pl-3 text-gray underline">/git.me/scripts/update.js</span>
            </Small>

            <Small size="sm" className="flex items-center leading-6">
              Repository: <span className="pl-3 text-gray underline">https://github.com/username/git.me</span>
            </Small>
          </div>

        </div>


      </section>

      {/* -- Contact ----------------------------------------------- */}
      <section id="Contact">
        <ContactForm />
      </section>
    </div>
  );
}
