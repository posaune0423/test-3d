import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

const FAQ = [
  {
    q: 'Question 1',
    a: 'Each visit is securely recorded on the blockchain, providing an unalterable and permanent proof of your presence, ensuring your experiences are preserved forever.',
  },
  {
    q: 'Question 2',
    a: 'Transform every visit into a one-of-a-kind digital collectible. Own a piece of your journey, authenticated and immortalized as NFTs.',
  },
  {
    q: 'Question 3',
    a: 'Engage with locations and brands on a deeper level through exclusive rewards and experiences, accessible only through our NFT-based verification system.',
  },
]

const FAQSection = () => {
  return (
    <section className='w-full py-12'>
      <h2 className='mb-4 text-center text-4xl font-extrabold text-slate-900'>
        Frequently asked questions
      </h2>
      <Accordion type='single' collapsible className='mx-auto w-full px-3 md:px-10'>
        {FAQ.map((faq, i) => (
          <AccordionItem value={`item-${i}`} key={i}>
            <AccordionTrigger>{faq.q}</AccordionTrigger>
            <AccordionContent>{faq.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}

export default FAQSection
