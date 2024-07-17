import React from "react";
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function getUserDetails() {
    const user = await client.user.findFirst();
    return { name: user?.username, password: user?.password };
}

const Home = async () => {
    const userDetails = await getUserDetails();
    return (
        <div className="flex flex-col justify-center h-screen">
            <div className="flex justify-center">
                <div className="border p-8 rounded">
                    <div>Name: {userDetails?.name}</div>

                    <div>Password: {userDetails?.password}</div>
                </div>
            </div>
        </div>
    );
};

export default Home;
