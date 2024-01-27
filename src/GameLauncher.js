import React, { useEffect } from 'react';
import { appWindow } from '@tauri-apps/api/window';

function GameLauncher() {

    useEffect(() => {
        // Adjust window size or go full screen
        appWindow.maximize(); // Or use appWindow.setFullscreen(true);

        // Optionally, when leaving this component, reset the window size
        return () => {
            appWindow.unmaximize(); // Or use appWindow.setFullscreen(false);
        };
    }, []);

    return (
        <div>
            {/* Game launcher content */}
        </div>
    );
}

export default GameLauncher;
