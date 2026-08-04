import Link from "next/link";

export const metadata = {
  title: "Byron Sanche | Career Portfolio & Professional Journey",
  description:
    "Explore Byron Sanche's career journey across telecommunications, fiber optics, AI software development, SaaS products, and technology entrepreneurship.",
};


export default function CareerPage() {

  return (

    <main className="min-h-screen bg-slate-950 text-white">


      {/* HERO */}

      <section className="px-6 py-24 text-center max-w-5xl mx-auto">

        <h1 className="text-5xl md:text-7xl font-bold">
          Building The Future Through
          <span className="text-blue-400">
            {" "}Technology & Innovation
          </span>
        </h1>


        <p className="mt-8 text-xl text-gray-300">

          I'm Byron Sanche — a telecommunications technician,
          fiber optic specialist, and software developer building
          AI-powered platforms, automation systems, and digital products.

        </p>


        <div className="mt-10 flex justify-center gap-5 flex-wrap">


          <Link
            href="/projects"
            className="bg-blue-600 px-8 py-3 rounded-xl hover:bg-blue-700"
          >
            View Projects
          </Link>


          <Link
            href="/contact"
            className="border border-gray-600 px-8 py-3 rounded-xl hover:bg-white hover:text-black"
          >
            Contact Me
          </Link>


        </div>


      </section>




      {/* ABOUT */}

      <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">


        <div>

          <h2 className="text-3xl font-bold mb-5">
            My Journey
          </h2>


          <p className="text-gray-300 leading-relaxed">

            My career began in telecommunications and fiber optics,
            working on FTTH installations, underground utilities,
            splicing, testing, and network infrastructure projects.

            <br /><br />

            Today I combine my technical field experience with
            software development to create AI tools, SaaS platforms,
            and automation systems that solve real business problems.

          </p>

        </div>



        <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800">


          <h3 className="text-2xl font-semibold mb-6">
            Core Skills
          </h3>


          <ul className="space-y-3 text-gray-300">

            <li>✓ Fiber Optics & Telecommunications</li>

            <li>✓ FTTH Installation & OTDR Testing</li>

            <li>✓ Next.js / React Development</li>

            <li>✓ AI Application Development</li>

            <li>✓ SaaS Architecture</li>

            <li>✓ Supabase & Cloud Platforms</li>

            <li>✓ Automation Systems</li>

          </ul>


        </div>


      </section>





      {/* EXPERIENCE */}


      <section className="px-6 py-20 bg-slate-900">


        <div className="max-w-6xl mx-auto">


          <h2 className="text-4xl font-bold mb-12">
            Professional Experience
          </h2>



          <div className="grid md:grid-cols-3 gap-8">



            <CareerCard
              title="Telecommunications Technician"
              company="Fiber Optics & Network Infrastructure"
              description="
              FTTH deployments, fiber termination,
              testing, troubleshooting, and underground
              utility support.
              "
            />



            <CareerCard
              title="AI Software Developer"
              company="SaaS & Automation Platforms"
              description="
              Building AI-powered applications,
              business automation tools, and modern
              web platforms.
              "
            />



            <CareerCard
              title="Technology Entrepreneur"
              company="Sanche Solutions"
              description="
              Creating digital products that help
              businesses generate leads, automate
              workflows, and grow online.
              "
            />


          </div>


        </div>


      </section>






      {/* PROJECTS */}


      <section className="max-w-6xl mx-auto px-6 py-20">


        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>



        <div className="grid md:grid-cols-3 gap-8">



          <ProjectCard
            name="RoofFlow OS"
            description="AI-powered roofing lead generation and automation platform."
          />



          <ProjectCard
            name="Halo Marketplace"
            description="Modern marketplace platform powered by Next.js and Supabase."
          />



          <ProjectCard
            name="NorthSky Reviews"
            description="AI software reviews and technology discovery platform."
          />


        </div>


      </section>





      {/* CTA */}

      <section className="text-center px-6 py-20 bg-blue-600">


        <h2 className="text-4xl font-bold">
          Looking For Collaboration?
        </h2>


        <p className="mt-4 text-lg">
          Let's build innovative technology solutions together.
        </p>


        <Link
          href="/contact"
          className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-xl"
        >
          Start A Conversation
        </Link>


      </section>



    </main>

  );

}





function CareerCard({
  title,
  company,
  description
}) {

return (

<div className="bg-slate-950 p-6 rounded-2xl border border-slate-800">


<h3 className="text-xl font-bold">
{title}
</h3>


<p className="text-blue-400 mt-2">
{company}
</p>


<p className="text-gray-400 mt-4">
{description}
</p>


</div>

)

}





function ProjectCard({
name,
description
}) {


return (

<div className="bg-slate-900 border border-slate-800 p-6 rounded-2xl">


<h3 className="text-2xl font-bold">
{name}
</h3>


<p className="text-gray-400 mt-4">
{description}
</p>


</div>

)


}
