import './PostStyle.css';
import { useContext } from "react";
import { MyContext } from "../../../context/PostsContext";

export default function CategoryNav() {
  const { selectedCategory, setSelectedCategory } = useContext(MyContext);
    return (
        <>
            <ul className="category-section">
                <li className="category-item">
                    <button className={`category-link animate__animated animate__zoomIn ${selectedCategory === 'All' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('All')}>
                        All
                    </button>
                </li>
                <li className="category-item">
                    <button className={`category-link animate__animated animate__zoomIn ${selectedCategory === 'Lifestyle' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('Lifestyle')}>
                        Lifestyle
                    </button>
                </li>
                <li className="category-item">
                    <button className={`category-link animate__animated animate__zoomIn ${selectedCategory === 'Fashion' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('Fashion')}>
                        Fashion
                    </button>
                </li>
                <li className="category-item">
                    <button className={`category-link animate__animated animate__zoomIn ${selectedCategory === 'Technology' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('Technology')}>
                        Technology
                    </button>
                </li>
                <li className="category-item">
                    <button className={`category-link animate__animated animate__zoomIn ${selectedCategory === 'Travel' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('Travel')}>
                        Travel
                    </button>
                </li>
                <li className="category-item">
                    <button className={`category-link animate__animated animate__zoomIn ${selectedCategory === 'Health' ? 'category-active' : ''}`} onClick={() => setSelectedCategory('Health')}>
                        Health
                    </button>
                </li>
            </ul>
        </>
    );
}