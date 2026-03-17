import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsSection() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-7 px-4 pt-16 pb-10">
      <div className="space-y-2 text-center">
        <h2 className="font-semibold text-3xl md:text-4xl">
          Frequently Asked Questions
        </h2>
        <p className="max-w-2xl text-muted-foreground">
          Find answers to common questions about our internship program.
        </p>
      </div>
      <Accordion
        className=" w-full rounded-lg  dark:bg-card/50 space-y-5"
        collapsible
        defaultValue="item-1"
        type="single"
      >
        {questions.map((item) => (
          <AccordionItem
            className="relative border-x first:rounded-t-lg first:border-t last:rounded-b-lg last:border-b bg-white rounded-xl shadow-md border border-gray-100"
            key={item.id}
            value={item.id}
          >
            <AccordionTrigger className="px-4 py-4 text-[15px] leading-6 hover:no-underline font-bold">
              {item.question}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 text-gray-600">
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

const questions = [
  {
    id: "item-1",
    question: "Who can apply?",
    answer:
      "Students, recent grads, early career creatives and anyone learning tech or digital skills. We welcome learners who are active and ready to commit to project deadlines.",
  },
  {
    id: "item-2",
    question: "Do I need previous experience?",
    answer:
      "No. We accept beginners and intermediate learners. Each track has beginner friendly briefs and optional stretch tasks.",
  },
  {
    id: "item-3",
    question: "How much time will this take?",
    answer:
      "Expect 5–8 hours per week for individual tasks; team sprint weeks may require more time. We build with flexibility in mind.",
  },
  {
    id: "item-4",
    question: "Are there costs?",
    answer:
      "No, current cycles are free. In future, there may be paid or sponsored tracks, members will be informed ahead of time.",
  },
  {
    id: "item-5",
    question: "Will I get a certificate?",
    answer:
      "Yes, participants who complete the final capstone and post required milestones receive a completion certificate and a showcase entry.",
  },
  {
    id: "item-6",
    question: "How are teams formed?",
    answer:
      "Teams for the capstone are cross-functional and formed based on skills and project needs. You’ll work individually first, then join a team for the final project.",
  },
  {
    id: "item-7",
    question: "What should I post on LinkedIn?",
    answer:
      "Short, honest updates: acceptance announcement, a snapshot of your project, lessons learned, or the final project link.",
  },
  {
    id: "item-8",
    question: "Who runs the program?",
    answer:
      "The BuildLabs Internship is organized by Nexus Fellowship, under its Build Initiative, which focuses on practical skill development and career growth.",
  },
];

// const questions = [
//   {
//     id: "item-1",
//     title: "What is Efferd?",
//     content:
//       "Efferd is a collection of beautifully crafted Shadcn UI blocks and components, designed to help developers build modern websites with ease.",
//   },
//   {
//     id: "item-2",
//     title: "Who can benefit from Efferd?",
//     content:
//       "Efferd is built for founders, product teams, and agencies that want to accelerate idea validation and delivery.",
//   },
//   {
//     id: "item-3",
//     title: "What features does Efferd include?",
//     content:
//       "Efferd offers a collaborative workspace where you can design and build beautiful web applications, with reusable UI blocks, deployment automation, and comprehensive analytics all in one place. With Efferd, you can streamline your team’s workflow and deliver high-quality websites quickly and efficiently.",
//   },
//   {
//     id: "item-4",
//     title: "Can I customize components in Efferd?",
//     content:
//       "Yes. Efferd offers editable design systems and code scaffolding so you can tailor blocks to your brand and workflow.",
//   },
//   {
//     id: "item-5",
//     title: "Does Efferd integrate with my existing tools?",
//     content:
//       "Efferd connects with popular source control, design tools, and cloud providers to fit into your current stack.",
//   },
//   {
//     id: "item-6",
//     title: "How do I get support while using Efferd?",
//     content:
//       "You can access detailed docs, community forums, and dedicated customer success channels for help at any time.",
//   },
//   {
//     id: "item-7",
//     title: "How do I get started with Efferd?",
//     content:
//       "You can access detailed docs, community forums, and dedicated customer success channels for help at any time.",
//   },
// ];
