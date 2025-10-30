import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FaqsSection() {
  return (
    <div className="mx-auto w-full max-w-3xl space-y-7 px-4 pt-16 ">
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
        {questions.map((item,) => (
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
      question: 'Is this internship paid?',
      answer:
        'The NetworkHER internship program focuses on providing hands-on learning experience, mentorship, and skill development. While this particular program is volunteer-based, participants gain valuable portfolio work, certificates, and real-world experience that can lead to paid opportunities.',
    },
    {
       id: "item-2",
      question: 'Who can apply?',
      answer:
        'The program is open to all aspiring digital professionals, regardless of gender, background, or location. We welcome students, career switchers, and anyone passionate about learning and growing in the tech and digital space.',
    },
    {
       id: "item-3",
      question: 'How long is the program?',
      answer:
        '6 to 8 weeks.',
    },
    {
       id: "item-4",
      question: 'Do I need prior experience?',
      answer:
        "No prior professional experience is required! We're looking for motivated individuals who are eager to learn. Basic familiarity with your chosen field is helpful but not mandatory. Our mentors will guide you through the learning process.",
    },
    {
       id: "item-5",
      question: 'How long is the program?',
      answer:
        'Successful participants receive a certificate of completion, portfolio pieces from real projects, recommendation letters, and the opportunity to continue working with NetworkHER on future initiatives.',
    },
    {
      id: "item-6",
      question:  "How do i apply?",
      answer: "Click the 'Apply Now' button on this page to access our application form. You'll need to share information about yourself, your interests, and why you want to join the program. Applications are reviewed on a rolling basis."

    }
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
