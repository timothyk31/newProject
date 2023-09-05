import React, { useState } from "react";
import axios from "axios";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import PassForm from "../components/form";


export const NewListing = () => {
    return (
        <PassForm/>
    )
}