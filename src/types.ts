import React from "react";

export interface Video {
    id: string,
    name: string,
    handleVideoState: (e: React.SyntheticEvent) => void,
};