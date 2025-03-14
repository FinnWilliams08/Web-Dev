export const Row = ({children, style}) => {
    return( 
        <div
            style={{
                display: "flex",
                flexDirection: "row",
                gap: "8px",
                justifyContent: "center",
                alignItems: "center",
                ...style,
            }}
            >
                {children}
        </div>
    );
};