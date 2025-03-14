export const Column = ({children, style, className}) => {
    return( 
        <div
            className={className}
            style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                justifyContent: "flex-start",
                height: "auto", // Ensure full height
                ...style,
            }}
            >
                {children}
        </div>
    )
}