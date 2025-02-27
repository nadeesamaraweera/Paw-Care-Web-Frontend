import { Card, CardBody, CardFooter, Image } from "@nextui-org/react";

// Define an interface for the item prop
interface OrgItem {
    Name: string;
    Img: string;
    Id: string;
    Contact: string;
    Location: string;
}

// Use the interface in the component
function OrganizationCard({ item }: { item: OrgItem }) {
    return (
        <div className="flex justify-center py-4">
            <p className="text-[24px] mx-auto py-3 text-center px-3">{item.Name}</p>

            <Card
                shadow="md"
                isPressable
                onPress={() => console.log("item pressed")}
                className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] bg-blue-100 rounded-2xl"
            >
                <CardBody className="overflow-visible p-0">
                    <Image
                        shadow="lg"
                        width="100%"
                        alt={item.Id}
                        className="w-full object-cover h-[220px]"
                        src={item.Img}
                    />
                </CardBody>

                <CardFooter className="text-[19px] justify-center text-[#071722]">
                    <p>Organization ID : {item.Id}</p>
                </CardFooter>

                <CardFooter className="flex-col text-[17px] justify-center pt-0 px-3 pb-3 text-[#004371]">
                    <p>
                        Location : {item.Location}
                        <br />
                        Contact : {item.Contact}
                    </p>
                </CardFooter>
            </Card>
        </div>
    );
}

export default OrganizationCard;
