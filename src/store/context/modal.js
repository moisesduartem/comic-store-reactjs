import React, { createContext, useContext, useEffect, useState } from "react";
import Popup from 'reactjs-popup';

function useModal() {
    let [isOpen, setIsOpen] = useState(false);
    let [content, setContent] = useState("I'm the Modal Content");

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    function handle(content = '') {
        setIsOpen(!isOpen);
        if (!!content) {
            setContent(content);
        }
    }

    return { isOpen, open, close, setContent, content, handle };
};

const ModalContext = createContext();

function ModalProvider({ children }) {

    const { isOpen, open, close, setContent, content, handle } = useModal();

    return (
        <ModalContext.Provider value={{ isOpen, open, close, setContent, content, handle }}>
            <Popup
                open={isOpen}
                closeOnDocumentClick
                onClose={(e) => {
                    close(e);
                }}>
                <div className="context-modal">
                    {content}
                </div>
            </Popup>
            {children}
        </ModalContext.Provider >
    );
};

function useModalContext() {
    const context = useContext(ModalContext);
    return context;
}

export { ModalContext, ModalProvider, useModalContext, useModal };
