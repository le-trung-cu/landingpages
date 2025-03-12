"use client";
import { cn } from "@/lib/utils";
import { createContext, useCallback, useContext, useState } from "react";

const AccordionContext = createContext<{
  opened?: string;
  toggle?: (value?: string) => void;
}>({});

const AccordionItemContext = createContext<{ value?: string }>({
  value: undefined,
});

export const Accordion = ({className, children }: {className?: string; children?: React.ReactNode }) => {
  const [opened, setOpened] = useState<string | undefined>();
  const toggle = useCallback(
    (value?: string) => {
      setOpened((pre) => {
        return pre === value ? undefined : value;
      });
    },
    [setOpened]
  );
  return (
    <AccordionContext.Provider value={{ opened, toggle }}>
      <div className={className}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export const AccordionItem = ({
  value,
  children,
}: {
  value: string;
  children: React.ReactNode;
}) => {
  return (
    <AccordionItemContext.Provider value={{ value }}>
      {children}
    </AccordionItemContext.Provider>
  );
};

export const AccordionItemTitle = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const context = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  return (
    <div className={cn("font-bold", className)} onClick={() => context.toggle?.(itemContext.value)}>{children}</div>
  );
};

export const AccordionItemContent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const context = useContext(AccordionContext);
  const itemContext = useContext(AccordionItemContext);

  return (
    <div
      className={cn(
        context.opened !== itemContext.value && "h-0 overflow-clip"
      )}
    >
      {children}
    </div>
  );
};
