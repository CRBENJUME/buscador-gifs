import React, {useState} from "react";
import useUser from "hooks/useUser";
import { useLocation } from "wouter";
import Modal from "components/Modal";
import './Fav.css'

export default function Fav({ id }) {
    const { isLogged, favs, addFav } = useUser();
    const [, navigate] = useLocation();
    const [ showModal, setShowModal] = useState(false);

    const isFaved = favs.some(favId => favId === id);

    const handleClick = () => {
     if (!isLogged) return setShowModal(true)
     addFav({ id })
    }
    
    const handleClose = () => {
        setShowModal(false)
    }
    const [ label, emoji ] = isFaved ? ['Remove from favs', '❌'] : ['Add to favs', '❤️']

    return (
        <>
            <button className="gf-fav" onClick={handleClick}>
                <span role='img' aria-label={label}>
                    {emoji}
                </span>
            </button>
            {showModal && <Modal onClose={handleClose}>Hola</Modal>}
        </>
    )
}