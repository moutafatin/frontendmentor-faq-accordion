import IconStar from "./assets/images/icon-star.svg";
import IconPlus from "./assets/images/icon-plus.svg";
import IconMinus from "./assets/images/icon-minus.svg";
import { useEffect, useRef, useState } from "react";
import { cn } from "./utils.ts";

const faqs = [
  {
    id: 1,
    question: "What is Frontend Mentor, and how will it help me?",
    answer:
      "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. It's suitable for all levels and ideal for portfolio building.",
  },
  {
    id: 2,
    question: "Is Frontend Mentor free?",
    answer:
      "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
  },
  {
    id: 3,
    question: "Can I use Frontend Mentor projects in my portfolio?",
    answer:
      "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
  },
  {
    id: 4,
    question: "How can I get help if I'm stuck on a Frontend Mentor challenge?",
    answer:
      "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
  },
];

export default function App() {
  const [open, setOpen] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const setCurrent = (id: number) =>
    setOpen((current) => (current === id ? 0 : id));
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accordion-height",
      `${ref.current?.scrollHeight}px`,
    );
  }, [open]);
  return (
    <main className="bg-pattern-mobile font-work md:bg-pattern-desktop relative min-h-screen bg-light-pink bg-contain bg-no-repeat p-5">
      <div className="mx-auto mt-24 rounded-lg bg-white p-5 md:max-w-lg xl:mt-48 2xl:mt-60">
        <h1 className="flex items-center gap-x-4">
          <img src={IconStar} alt="Star icon" className="size-7" />
          <span className="text-3xl font-bold md:text-4xl 2xl:text-5xl">
            FAQs
          </span>
        </h1>

        <ul className="mt-5 divide-y divide-light-pink">
          {faqs.map((faq) => (
            <li className="b flex flex-col gap-y-3 py-4" key={faq.id}>
              <div className="flex items-center justify-between font-semibold text-dark-purple">
                <span
                  onClick={() => setCurrent(faq.id)}
                  className="cursor-pointer transition-colors hover:text-purple-500 md:text-[1.05rem]"
                >
                  {faq.question}
                </span>
                <button
                  className="flex-shrink-0 cursor-pointer p-2 transition-opacity hover:opacity-50"
                  onClick={() => setCurrent(faq.id)}
                >
                  <img
                    src={open === faq.id ? IconMinus : IconPlus}
                    alt="Plus icon"
                    className="size-7"
                  />
                </button>
              </div>
              <div
                className={cn(
                  "overflow-hidden text-sm text-grayish-purple transition-opacity delay-300",
                  open === faq.id
                    ? `slideDown opacity-100`
                    : "slideUp pointer-events-none -my-2 opacity-0",
                )}
                style={
                  open === faq.id
                    ? { height: ref.current?.scrollHeight }
                    : { height: 0 }
                }
                ref={ref}
              >
                <p className="md:text-[0.95rem]">{faq.answer}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
