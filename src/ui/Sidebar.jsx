import React from "react";
import Styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = Styled.aside`
    background-color: var(--color-grey-0);
    padding:1.2rem 4.8rem;
    border-bottom:1px solid var(--color-grey-100);

    grid-row:1/-1;
    display:flex;
    flex-direction:column;
    gap:3.2rem;
`;

export const Sidebar = () => {
	return (
		<StyledSidebar>
			<Logo />
			<MainNav />
		</StyledSidebar>
	);
};
