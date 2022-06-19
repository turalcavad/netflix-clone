import React from "react";
import {
	Container,
	Inner,
	Pane,
	SubTitle,
	Image,
	Title,
	Item,
} from "./styles/jumbotron";

export default function Jumbotron({
	children,
	direction = "row",
	...restProps
}) {
	return (
		<Item>
			<Inner direction={direction}>{children}</Inner>
		</Item>
	);
}

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
	return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronContainer({ children, ...restProps }) {
	return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Image = function JumbotronContainer({ ...restProps }) {
	return <Image {...restProps} />;
};

Jumbotron.Title = function JumbotronContainer({ children, ...restProps }) {
	return <Title {...restProps}>{children}</Title>;
};
Jumbotron.SubTitle = function JumbotronContainer({ children, ...restProps }) {
	return <SubTitle {...restProps}>{children}</SubTitle>;
};
