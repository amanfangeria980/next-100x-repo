import axios from "axios";
import React from "react";

async function getUserDetails() {
    const response = await axios.get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
    );
    return response.data;
}

const Home = async () => {
    const userDetails = await getUserDetails();
    return (
        <div>
            {userDetails.name}
            {userDetails.email}
        </div>
    );
};

export default Home;
