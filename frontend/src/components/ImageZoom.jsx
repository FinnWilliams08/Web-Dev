import { Modal } from "./Modal";

export const ImageZoom = ({ src, title, isVisible, setVisibility }) => {
    return (
        <>
            {isVisible && (
                <Modal setVisibility={setVisibility}>
                    <div style={{ backgroundColor: "black" }}>
                        <img 
                            src={src} 
                            title={title} 
                            alt={title || "Image"} 
                            style={{
                                height: "800vh",
                                maxWidth: "90vw",
                            }} 
                        />
                    </div>
                </Modal>
            )}
        </>
    );
};
