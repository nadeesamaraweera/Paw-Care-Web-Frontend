import Input from "../../component/input/input.tsx";
import CustomButton from "../../component/input/custom-button.tsx";
import TextArea from "../../component/input/text-area.tsx";
import { IoCloseOutline } from "react-icons/io5";

const userId: string = `U-0001`;
const date: string = `06/01/2024`;

function AnswerForm() {
    const handleInputs = (e: React.ChangeEvent<HTMLInputElement>, type: string) => {
        e.preventDefault();
        console.log(type);
    };

    return (
        <form
            className="max-w-4xl w-full m-auto mt-5 flex flex-col gap-4 text-[#071722] text-[18px] pr-6 pb-6 pl-6 bg-white border-[#071722] border-l-[35px] border-r-[35px] rounded-xl"
        >
            <div className="flex flex-row justify-between items-center mt-2">
                <label className="text-[18px]">{`User ID : ${userId}`}</label>
                <IoCloseOutline className="text-[#071722] text-[35px] cursor-pointer" />
            </div>

            <label className="text-[18px]">{`Date : ${date}`}</label>

            <div className="flex flex-col justify-center items-center py-4">
                <p className="text-[35px] text-[#071722]">Answer</p>
                <p className="text-[18px] text-[#071722] pb-3 text-center">
                    "Explore our Q&A section for expert insights and helpful tips, ensuring
                    <br />
                    you have all the information for optimal pet care."
                </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row">
                <Input
                    label={"Answer ID : "}
                    name={'id'}
                    type={'text'}
                    optional={false}
                    placeholder={'A-0001'}
                    callBack={handleInputs}
                />
            </div>

            <TextArea name={'text'} label={'Answer : '} optional={false} rows={5} placeholder={'Ex:Note'} />

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-8 mt-8 justify-between items-center">
                <div className="flex justify-center sm:justify-start">
                    <img className="w-32 h-32 mt-4" src={'src/assets/logo-pet-care.png'} alt="Logo" />
                </div>

                <div className="flex gap-4 justify-center sm:justify-start mt-6 sm:mt-0">
                    <CustomButton
                        borderColor={'#071722'}
                        bgColor={'white'}
                        hoverColor={'#071722'}
                        textColor={'#071722'}
                        textHoverColor={'white'}
                        text={'Save'}
                    />
                    <CustomButton
                        borderColor={'#D75555'}
                        bgColor={'white'}
                        hoverColor={'#D75555'}
                        textColor={'#D75555'}
                        textHoverColor={'white'}
                        text={'Delete'}
                    />
                </div>
            </div>
        </form>
    );
}

export default AnswerForm;
