import React from 'react';

const MultipleLayerGradientBackground = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#1a2345] via-[#443478] to-[#533682]">
            {/* Optional: Center content container */}
            <div className="text-center text-white">
                <h1 className="text-4xl font-bold mb-4">Welcome</h1>
                <p className="text-xl">This is a gradient background made with Tailwind CSS and React.</p>
            </div>
        </div>
    );
};

export default MultipleLayerGradientBackground;
