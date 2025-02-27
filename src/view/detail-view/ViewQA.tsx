import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { GoPlus } from "react-icons/go";
import QAForm from "../form/QAForm.tsx";

function ViewQA() {
    const [isFormOpen, setIsFormOpen] = useState(false);

    const questions = [
        {
            id: 1,
            question: "How often should I feed my dog?",
            answer: "Feed adult dogs twice a day, while puppies may require three to four meals a day. Adjust portions based on your dog's size, age, and activity level."
        },
        {
            id: 2,
            question: "What are common signs of a sick pet?",
            answer: "Signs include loss of appetite, vomiting, diarrhea, lethargy, difficulty breathing, excessive scratching, and behavioral changes. Consult a vet if symptoms persist."
        },
        {
            id: 3,
            question: "How do I train my cat to use a litter box?",
            answer: "Place the litter box in a quiet, accessible area. Encourage your cat by placing them in the box after meals and naps. Keep the litter clean to reinforce good habits."
        },
        {
            id: 4,
            question: "What vaccinations does my puppy need?",
            answer: "Core vaccines include distemper, parvovirus, adenovirus, and rabies. Your vet may recommend additional vaccines based on your location and lifestyle."
        },
        {
            id: 5,
            question: "How can I keep my pet safe during the summer?",
            answer: "Ensure they have access to shade and fresh water, avoid hot pavement, and never leave them in a parked car. Watch for signs of heatstroke like excessive panting."
        }
    ];
    return (
        <div className="w-2/3 mx-auto p-6">
            <div className="flex justify-between items-center">
                <p className="text-[28px] font-semibold text-[#071722]">Questions & Answers</p>

                <button
                    onClick={() => {
                        console.log("Opening QAForm...");
                        setIsFormOpen(true);
                    }}
                    className="bg-[#071722] text-white p-2 rounded-full hover:bg-gray-800 transition"
                >
                    <GoPlus size={24} />
                </button>
            </div>

            <br />

            <Accordion variant="splitted">
                {questions.map((item) => (
                    <AccordionItem key={item.id} aria-label={`Question ${item.id}`} title={`Q${item.id}: ${item.question}`}>
                        {item.answer}
                    </AccordionItem>
                ))}
            </Accordion>

            {/* QA Form Modal */}
            <AnimatePresence>
                {isFormOpen && <QAForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />}
            </AnimatePresence>
        </div>
    );
}

export default ViewQA;
