import Image from "next/image"

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 dark:text-white mb-16">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="neumorphic-glass rounded-3xl p-4">
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden">
              <Image src="/placeholder.svg?height=800&width=600" alt="Profile" fill className="object-cover" />
            </div>
          </div>
          <div className="neumorphic-glass rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Who I Am</h3>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              I'm a passionate full-stack developer with over 5 years of experience building web applications. I
              specialize in creating intuitive, responsive, and accessible user interfaces that deliver exceptional user
              experiences.
            </p>
            <p className="text-slate-700 dark:text-slate-300 mb-4">
              My journey in web development began when I built my first website at 15. Since then, I've worked with
              startups and established companies to bring their digital visions to life.
            </p>
            <p className="text-slate-700 dark:text-slate-300">
              When I'm not coding, you can find me hiking, reading science fiction, or experimenting with new
              technologies.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

