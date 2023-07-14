import { HeadingMD } from "../typography/typography";
import { cookies } from "next/headers";
import { whoAmISSR } from "@/app/lib/users";

export default async function Subheader(){
    const token = cookies().get('next-token')?.value!;
    const user = await whoAmISSR(token);
    const sirname = user?.name.split(' ')[1];

    return <>
        <div className="w-full bg-light-200">
            <div className="container mx-auto py-4 flex items-center px-8 justify-between">
                <HeadingMD className="text-gray-500">Welcome Back <span className="text-primary">{sirname? 'Mr. '+sirname : null}</span></HeadingMD>
                <div className="flex items-center gap-4">
                    {/* <Paragraph className="text-gray-500">Your last login was <span className="text-primary">24 hours ago</span></Paragraph> */}
                </div>
            </div>
        </div>
    </>
}