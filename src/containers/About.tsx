import ContactInfo from "@/components/ContactInfo";

const AboutMe = () => (
  <section
    className="min-h-screen w-full py-20 px-4 sm:px-8 md:px-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
    id="about"
  >
    <div className="col-span-2">
      <h2 className="text-4xl font-bold mb-8">About Me</h2>

      <div className="space-y-6 text-neutral-300 leading-relaxed">
        <p className="text-lg">
          I&apos;m a versatile software engineer specializing in full-stack
          development with a passion for crafting efficient, user-focused
          applications. My expertise spans both frontend and backend, combining
          a rich stack of technologies including
          <span className="text-emerald-400"> Next.js</span>,
          <span className="text-emerald-400"> Java Spring Boot</span>, and
          <span className="text-emerald-400"> Tailwind CSS</span>. I&apos;m
          dedicated to designing robust architectures, implementing
          Domain-Driven Design (DDD), and building scalable microservices
          solutions.
        </p>

        <p className="text-lg">
          On the frontend, I love working with
          <span className="text-emerald-400"> React</span> and
          <span className="text-emerald-400"> TypeScript</span>, focusing on
          component-driven development to create seamless user experiences. I
          bring projects to life with frameworks like Storybook and prioritize
          maintainability through test-driven development using Jest. For the
          backend, I leverage Java Spring Boot, but I&apos;m also exploring
          Fastify and Go Fiber to diversify my approach and adapt to new
          challenges.
        </p>

        <p className="text-lg">
          With a growing focus on cloud solutions, I enjoy working with
          <span className="text-emerald-400"> AWS</span> services to deliver
          efficient and scalable applications. I also bring a pragmatic approach
          to cost optimization, such as implementing offline-first data storage
          to reduce server load.
        </p>

        <p className="text-lg">
          Outside of my technical skills, I&apos;m committed to improving
          teamwork and communication, collaborating with others to achieve
          ambitious project goals. Whether working on SaaS apps, payment
          integrations, or building my portfolio, I&apos;m driven to innovate
          and deliver quality at every stage.
        </p>
      </div>
    </div>
    <ContactInfo />
  </section>
);

export default AboutMe;
