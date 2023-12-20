import * as LocationApi from "../../network/location-api";
import useSWR from "swr";
import { useEffect } from "react";
import useLocationGeoStore from "../../store/useLocationGeoStore";
import { useSearchParams } from "react-router-dom";
import { SearchIcon } from "../Icons/Icons";
import SearchForm from "./SearchForm";
import { useState } from "react";
import ModalWithBackdrop from "../modals/ModalWithBackdrop";

export default function SearchComponent() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsModalOpen(true)}>
                <SearchIcon sizeHeight={25} sizeWidth={48} color={"#e9fae5"} className="px-2 cursor-pointer transition-all ease-in hover:scale-125" />
            </button>
            <ModalWithBackdrop isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} size="lg">
                <SearchForm setIsModalOpen={setIsModalOpen} />
            </ModalWithBackdrop>
        </div>
    )
}
