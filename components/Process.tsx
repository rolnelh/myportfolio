import { ArrowRight, MessageSquare, Palette, Code2, CheckCircle2 } from 'lucide-react';

const steps = [
  { id: 1, icon: MessageSquare, title: 'Reach Out', desc: 'Book a call to discuss your ideas, goals, and vision.' },
  { id: 2, icon: Palette, title: 'Grab Your Designs', desc: 'Tell me your unique vision, and I will create stunning designs.' },
  { id: 3, icon: Code2, title: 'Kickstart Development', desc: 'I expertly transform your designs into a scalable solution.' },
  { id: 4, icon: CheckCircle2, title: 'And Hand Over', desc: 'Receive a fully tested product with ongoing support.' },
];

export default function Process() {
  return (
    <section className="bg-[#09090B] py-24 px-6" id="process">
      <div className="max-w-6xl mx-auto">

        <div className="flex flex-col items-center text-center mb-16 space-y-4">
          <div className="flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900 w-fit">
            <span className="text-zinc-400 text-xs font-medium tracking-wide">How it works</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Process Is Everything</h2>
          <p className="text-zinc-500 text-lg">Simple, streamlined process is what gets you results</p>
        </div>


        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div key={step.id} className="group relative bg-zinc-900 p-8 rounded-3xl border border-zinc-800 hover:border-zinc-700 transition-all">
              <div className="flex justify-between items-start mb-6">
                <step.icon className="w-8 h-8 text-white" />
                <span className="text-zinc-600 font-bold text-lg">{step.id}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-zinc-400 text-sm leading-relaxed mb-6">{step.desc}</p>
              <div className="absolute bottom-6 left-8 bg-zinc-800 px-3 py-1 rounded-md text-xs font-medium text-zinc-300">
                Step {step.id}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="bg-zinc-800 p-3 rounded-full">
              <span className="text-xl">😊</span>
            </div>
            <div>
              <h4 className="text-white font-bold">I am with you in every step</h4>
              <p className="text-zinc-500 text-sm">Alongside you at each step for seamless experience</p>
            </div>
          </div>
          <div className="flex gap-3">
            <button className="px-4 py-2 rounded-full text-white font-medium bg-zinc-800 hover:bg-zinc-600 transition-colors">See All Projects</button>
            <button className="px-4 py-2 rounded-full bg-white text-black font-bold hover:bg-zinc-200 transition-all">Contact Now</button>
          </div>
        </div>
      </div>
    </section>
  );
}