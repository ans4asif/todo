import React, { useState, useEffect } from 'react';

function ClipBoardBanner({ showBanner, text, setShow }: any) {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        if (showBanner) {
            setIsVisible(true);

            const timeout = setTimeout(() => {
                setIsVisible(false);
                setShow(false)
            }, 3000); // Hide the banner after 3 seconds

            return () => {
                clearTimeout(timeout);
                setShow(false);
                setIsVisible(false)
            }
        }
    }, [showBanner]);

    return isVisible ? (
        <div className="clipboard-banner">
            <p>{`copied: ${text?.length > 40 ? text?.slice(0, 25)?.concat(' ...') : text}`}</p>
        </div>
    ) : null;
}

export default ClipBoardBanner;
