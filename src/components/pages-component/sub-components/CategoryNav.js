import './PostStyle.css';
import { useContext } from "react";
import { MyContext } from "../../../context/PostsContext";

export default function CategoryNav() {
  const { selectedCategory, setSelectedCategory } = useContext(MyContext);
    return (
        <>
            <ul className="category-section">
                <li className="category-item">
                    <button className={`category-link ${selectedCategory === 'All' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('All')}>
                        All
                    </button>
                </li>
                <li className="category-item">
                    <button className={`category-link ${selectedCategory === 'Lifestyle' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('Lifestyle')}>
                        Lifestyle
                    </button>
                </li>
                <li className="category-item">
                    <button className={`category-link ${selectedCategory === 'Fashion' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('Fashion')}>
                        Fashion
                    </button>
                </li>
                <li className="category-item">
                    <button className={`category-link ${selectedCategory === 'Technology' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('Technology')}>
                        Technology
                    </button>
                </li>
                <li className="category-item">
                    <button className={`category-link ${selectedCategory === 'Travel' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('Travel')}>
                        Travel
                    </button>
                </li>
                <li className="category-item">
                    <button className={`category-link ${selectedCategory === 'Health' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('Health')}>
                        Health
                    </button>
                </li>
            </ul>
        </>
    );
}