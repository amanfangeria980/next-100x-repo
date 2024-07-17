import axios from "axios";
import React from "react";

async function getUserDetails() {
    // await new Promise((resolve) => setTimeout(resolve, 5000)).then(() => {
    //     console.log("5 seconds passed");
    // });
    const response = await axios.get("http://localhost:3000/api/user");
    return response.data;
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
