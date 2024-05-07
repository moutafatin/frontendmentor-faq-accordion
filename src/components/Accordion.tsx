import IconMinus from "../assets/images/icon-minus.svg";
import IconPlus from "../assets/images/icon-plus.svg";
import { cn } from "../utils.ts";
import React, { useEffect, useRef } from "react";

export function Accordion() {}

type AccordionContentProps = {
  children: React.ReactNode;
  open: boolean;
};

Accordion.Content = ({ children, open }: AccordionContentProps) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const ref = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useEffect(() => {
    document.documentElement.style.setProperty(
      "--accordion-height",
      `${ref.current?.scrollHeight}px`,
    );
  }, [open]);

  return (
    <div
      className={cn(
        "overflow-hidden text-sm text-grayish-purple transition-opacity delay-300",
        open
          ? `slideDown opacity-100`
          : "slideUp pointer-events-none -my-2 opacity-0",
      )}
      style={open ? { height: ref.current?.scrollHeight } : { height: 0 }}
      ref={ref}
    >
      <p className="md:text-[0.95rem]">{children}</p>
    </div>
  );
};

type AccordionTrigger = {
  onSelect: () => void;
  children: React.ReactNode;
  open: boolean;
};

Accordion.Trigger = ({ onSelect, children, open }: AccordionTrigger) => {
  return (
    <div className="flex items-center justify-between font-semibold text-dark-purple">
      <span
        onClick={onSelect}
        className="cursor-pointer transition-colors hover:text-purple-500 md:text-[1.05rem]"
      >
        {children}
      </span>
      <button
        className="flex-shrink-0 cursor-pointer p-2 transition-opacity hover:opacity-50"
        onClick={onSelect}
      >
        <img
          src={open ? IconMinus : IconPlus}
          alt="Plus icon"
          className="size-7"
        />
      </button>
    </div>
  );
};
