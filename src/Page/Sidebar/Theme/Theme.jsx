const Theme = ({ themeColor, setThemeColor }) => {
    const colors = ["red-100", "green-100", "pink-100"]; // Tailwind color classes

    return (
        <div className="max-w-2xl p-5">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-center font-bold text-2xl">Theme</h1>  
            </div>
            <div className="flex flex-col gap-5 text-xl">
                {colors.map((color) => (
                    <div
                        key={color}
                        onClick={() => setThemeColor(color)}
                        className={`cursor-pointer px-3 py-1 rounded hover:opacity-80 bg-${color}`}
                    >
                        {color.split("-")[0]} {/* Display Red, Green, Pink */}
                    </div>
                ))}
            </div>
        </div>
    );
};
