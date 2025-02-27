import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Define an interface for the item prop
interface LostAndFoundItem {
    title: string;
    img: string;
    id: string;
    petName: string;
    location: string;
    date: string;
}

// Use the interface in the component
function LostAndFoundCard({ item }: { item: LostAndFoundItem }) {
    return (
        <div className="flex justify-center py-4">
            <p className="text-[25px] mx-auto text-center">{item.title}</p>

            <Card
                shadow="md"
                isPressable
                onPress={() => console.log("item pressed")}
                className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px]"
            >
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="lg"
                        width="100%"
                        alt={item.title}
                        className="w-full object-cover h-[220px]"
                        src={item.img}
                    />
                </CardBody>

                <CardFooter className="text-[19px] justify-center text-[#071722]">
                    <p>Notice ID : {item.id}</p>
                </CardFooter>

                <CardFooter className="flex-col text-[17px] justify-center pt-0 px-3 pb-3 text-[#004371]">
                    <p>
                        Pet ID : {item.petName}
                        <br />
                        Pet Location : {item.location}
                        <br />
                        Date : {item.date}
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default LostAndFoundCard;
