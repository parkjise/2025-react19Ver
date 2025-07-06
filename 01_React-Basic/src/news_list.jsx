import React from "react";
import NewsItem from "./news_list_item";
const news_list = (props) => {
	const news = props.news.map((item) => <NewsItem item={item} key={item.id} />);
	return (
		<>
			{props.children}
			{news}
			{props.children}
		</>
	);
};

export default news_list;
