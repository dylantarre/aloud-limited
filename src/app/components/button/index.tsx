import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

interface IButtonProps {
    theme: "filled" | "disabled" ;
    text: string;
}

const BaseButton = styled.div`
    ${tw`
        mt-4
        rounded-md 
        shadow 
        px-5 
        py-3
        text-center
        w-max
        mr-2
    `}:
`;

const DisabledButton = styled(BaseButton)`
    ${tw` 
        border
        border-transparent
        text-gray-400
        bg-gray-200
        outline-none
    `};
`;

const FilledButton = styled(BaseButton)`
    
        --tw-shadow: inset 0 -5px 0 0 rgba(0, 0, 0, 0.15) !important;
        box-shadow: 0 0 rgba(0,0,0,0), 0 0 rgba(0,0,0,0), var(--tw-shadow) !important;
        box-shadow: var(--tw-ring-offset-shadow, 0 0 rgba(0,0,0,0)), var(--tw-ring-shadow, 0 0 rgba(0,0,0,0)), var(--tw-shadow) !important;
   
    ${tw`
        text-white
        bg-purple-500
        hover:bg-purple-400
        focus:outline-none
        focus:ring-2
        focus:ring-offset-2
        focus:ring-offset-purple-700
        focus:ring-white
    `};
`;

export function Button(props: IButtonProps) {
    const { theme, text } = props;

    if(theme === "filled")
        return <FilledButton>{text}</FilledButton> 
    else return <DisabledButton>{text}</DisabledButton>; 
};