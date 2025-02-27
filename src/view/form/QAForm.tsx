import { motion } from "framer-motion";
import Input from "../../component/input/input.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import TextArea from "../../component/input/text-area.tsx";
import { IoCloseOutline } from "react-icons/io5";



function QAForm({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
            <motion.div
                initial={{opacity: 0, scale: 0.9}}
                animate={{opacity: 1, scale: 1}}
                exit={{opacity: 0, scale: 0.9}}
                className="bg-white rounded-xl p-6 shadow-lg w-full max-w-md"
            >
                {/* Title & Description */}
                <div className="text-center mt-4">
                    <p className="text-[22px] font-bold text-[#071722]">Ask a Question</p>
                </div>

                <div className="flex justify-between items-center border-b pb-2">
                    <button onClick={onClose} className="text-[#071722] text-[30px] cursor-pointer">
                        <IoCloseOutline/>
                    </button>
                </div>

                {/* Form Fields */}
                <div className="flex flex-col gap-3 mt-4">
                    <Input label="Question ID:" name="id" type="text" optional={false} placeholder="Q-0001"/>
                    <TextArea name="text" label="Question:" optional={false} rows={5}
                              placeholder="Enter your question here..."/>
                </div>

                {/* Buttons */}
                <div className="flex justify-center gap-3 mt-4">
                    <CustomButton borderColor="blue" bgColor="white" hoverColor="blue"
                                  textColor="blue" textHoverColor="white" text="Save"/>
                    <CustomButton borderColor="#D75555" bgColor="white" hoverColor="#D75555"
                                  textColor="#D75555" textHoverColor="white" text="Cancel" onClick={onClose}/>
                </div>
            </motion.div>
        </div>
    );
}

export default QAForm;
