import IconStar from "./assets/images/icon-star.svg";
import { useState } from "react";
import { Accordion } from "./components/Accordion.tsx";
import { faqs } from "./faqs.ts";

export default function App() {
  const [open, setOpen] = useState(0);

  const setCurrent = (id: number) =>
    setOpen((current) => (current === id ? 0 : id));

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
              <Accordion.Trigger
                onSelect={() => setCurrent(faq.id)}
                open={open === faq.id}
              >
                {faq.question}
              </Accordion.Trigger>
              <Accordion.Content open={open === faq.id}>
                {faq.answer}
              </Accordion.Content>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
