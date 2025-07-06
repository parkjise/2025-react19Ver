import { createRoot } from "react-dom/client";
import Header from "./components/header/header";
import StatePlayground from "./components/playground/state";
import NewsList from "./news_list";
import { newsData } from "./utils/data";
import "./styles/styles.css";
import { useState } from "react";
const App = () => {
	const [news, setNews] = useState(newsData);

	const getKeyword = (e) => {
		const keywords = e.target.value;
		const filtered = newsData.filter((item) => {
			return item.title.indexOf(keywords) > -1;
		});
		setNews(filtered);
	};
	return (
		<>
			<Header getKeyword={getKeyword} />
			<div className="container">
				<NewsList news={news}>
					<h1>I am Children</h1>
					<h3>I am Children</h3>
				</NewsList>
				{/* <StatePlayground /> */}
			</div>
		</>
	);
};

createRoot(document.getElementById("root")).render(<App />);
