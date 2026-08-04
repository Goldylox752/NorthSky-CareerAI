import Link from "next/link";


export const metadata = {

  title:
    "Careers | Join Our Team",

  description:
    "Explore career opportunities, open positions, and join a team building innovative technology solutions.",

};



export default function CareersPage(){

return (

<main className="min-h-screen bg-slate-950 text-white">


{/* HERO */}

<section className="max-w-6xl mx-auto px-6 py-24 text-center">


<h1 className="text-5xl md:text-7xl font-bold">

Build The Future
<span className="text-blue-400">
{" "}With Us
</span>

</h1>


<p className="mt-6 text-xl text-gray-300 max-w-3xl mx-auto">

Join a team of creators, engineers, designers, and problem solvers
working on innovative technology, AI, software, and digital products.

</p>


<Link

href="/careers/jobs"

className="inline-block mt-10 bg-blue-600 px-8 py-4 rounded-xl hover:bg-blue-700"

>

View Open Positions

</Link>


</section>





{/* WHY JOIN */}

<section className="bg-slate-900 py-20">


<div className="max-w-6xl mx-auto px-6">


<h2 className="text-4xl font-bold text-center mb-12">

Why Join Us?

</h2>



<div className="grid md:grid-cols-3 gap-8">


<Card

title="Innovation"

text="Work on modern technology, AI solutions, and products that impact real businesses."

/>


<Card

title="Growth"

text="Develop your skills through challenging projects, mentorship, and collaboration."

/>


<Card

title="Remote Friendly"

text="Work with talented people from anywhere while building meaningful products."

/>


</div>


</div>


</section>






{/* DEPARTMENTS */}


<section className="max-w-6xl mx-auto px-6 py-20">


<h2 className="text-4xl font-bold mb-10">

Teams Hiring

</h2>



<div className="grid md:grid-cols-2 gap-6">


<Job

title="Software Engineering"

description="Frontend, backend, cloud, AI, and full-stack development roles."

/>


<Job

title="Design"

description="Create beautiful user experiences, interfaces, and product designs."

/>


<Job

title="Marketing"

description="Grow our brand through content, SEO, partnerships, and campaigns."

/>


<Job

title="Operations"

description="Help manage projects, customers, and business operations."

/>


</div>


</section>






{/* OPEN APPLICATION */}


<section className="bg-blue-600 py-20 text-center">


<h2 className="text-4xl font-bold">

Don't See Your Role?

</h2>


<p className="mt-4 text-lg">

Send us your resume. We are always looking for talented people.

</p>



<Link

href="/careers/apply"

className="inline-block mt-8 bg-white text-black px-8 py-3 rounded-xl"

>

Submit Application

</Link>


</section>



</main>

);

}







function Card({title,text}){

return (

<div className="bg-slate-950 border border-slate-800 p-8 rounded-2xl">

<h3 className="text-2xl font-bold">

{title}

</h3>


<p className="text-gray-400 mt-4">

{text}

</p>


</div>

)

}







function Job({title,description}){

return (

<div className="bg-slate-900 border border-slate-800 p-6 rounded-xl">


<h3 className="text-xl font-bold">

{title}

</h3>


<p className="text-gray-400 mt-2">

{description}

</p>


<Link

href="/careers/jobs"

className="inline-block mt-4 text-blue-400"

>

Explore Roles →

</Link>


</div>

)

}
