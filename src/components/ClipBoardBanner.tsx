/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

interface ClipBoardBannerProps {
    showBanner: boolean;
    text: string;
    setShow: (show: boolean) => void;
  }

function ClipBoardBanner({ showBanner, text, setShow }: ClipBoardBannerProps) {
    const [isVisible, setIsVisible] = useState<boolean>(false);

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
