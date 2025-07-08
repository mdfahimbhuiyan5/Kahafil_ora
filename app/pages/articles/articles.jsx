import React, { useState, useEffect } from 'react';

const Articles = () => {
    // State for articles data
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // State for new article form
    const [newArticleTitle, setNewArticleTitle] = useState('');
    const [newArticleContent, setNewArticleContent] = useState('');
    // newArticleImage will now store the Base64 string of the uploaded image
    const [newArticleImage, setNewArticleImage] = useState(null);
    const [imagePreview, setImagePreview] = useState(null); // To show a preview of the selected image

    // Unique ID for local storage key
    const localStorageKey = 'kahafil_ora_articles';

    // Load articles from Local Storage on component mount
    useEffect(() => {
        try {
            const storedArticles = localStorage.getItem(localStorageKey);
            if (storedArticles) {
                setArticles(JSON.parse(storedArticles));
            }
            setLoading(false);
        } catch (err) {
            console.error("Failed to load articles from local storage:", err);
            setError("Failed to load articles. Your browser might be blocking local storage.");
            setLoading(false);
        }
    }, []); // Empty dependency array means this runs once on mount

    // Save articles to Local Storage whenever the 'articles' state changes
    useEffect(() => {
        // Only save after initial load (when loading is false) or if articles state changes and it's not the very first load
        if (articles.length > 0 || !loading) {
            try {
                localStorage.setItem(localStorageKey, JSON.stringify(articles));
            } catch (err) {
                console.error("Failed to save articles to local storage:", err);
                // Provide user feedback if local storage is full
                setError("Failed to save article. Local storage might be full. Please try reducing image sizes or content.");
            }
        }
    }, [articles, loading]); // Rerun when articles or loading state changes

    // Handle image file selection and convert to Base64
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewArticleImage(reader.result); // Stores the Base64 string
                setImagePreview(reader.result); // For immediate visual feedback
            };
            reader.onerror = () => {
                console.error("Error reading file.");
                setError("Could not read image file.");
                setNewArticleImage(null);
                setImagePreview(null);
            };
            reader.readAsDataURL(file); // Read file as Base64 Data URL
        } else {
            setNewArticleImage(null);
            setImagePreview(null);
        }
    };

    // Function to add a new article
    const handleAddArticle = async (e) => {
        e.preventDefault();

        if (!newArticleTitle.trim() || !newArticleContent.trim()) {
            setError("Title and Content cannot be empty.");
            return;
        }

        setLoading(true);
        setError(null);

        const newArticle = {
            id: Date.now().toString(), // Simple unique ID for local articles
            title: newArticleTitle,
            content: newArticleContent,
            imageUrl: newArticleImage, // This will be the Base64 string or null
            createdAt: new Date().toISOString(), // ISO string for local date
        };

        try {
            // Update state, which will trigger the useEffect to save to localStorage
            setArticles(prevArticles => [newArticle, ...prevArticles]); // Add new article to the top

            // Reset form fields
            setNewArticleTitle('');
            setNewArticleContent('');
            setNewArticleImage(null);
            setImagePreview(null);
            e.target.reset(); // Resets file input

            setLoading(false);
        } catch (err) {
            console.error("Error adding article to local storage state:", err);
            setError("Failed to add article. Please try again.");
            setLoading(false);
        }
    };

    return (
        <section className="bg-[#EFEAE4] py-20 px-8 md:px-20 text-gray-800 font-sans">
            <h2 className="text-4xl md:text-5xl font-normal text-center text-gray-900 mb-16">
                Our Articles
            </h2>

            {error && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
                    <strong className="font-bold">Error!</strong>
                    <span className="block sm:inline ml-2">{error}</span>
                </div>
            )}

            {/* Form to Add New Article */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-16 max-w-2xl mx-auto">
                <h3 className="text-2xl font-semibold mb-6 text-gray-900">Add New Article</h3>
                <form onSubmit={handleAddArticle} className="space-y-4">
                    <div>
                        <label htmlFor="articleTitle" className="block text-sm font-medium text-gray-700">Title</label>
                        <input
                            type="text"
                            id="articleTitle"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-2 border"
                            value={newArticleTitle}
                            onChange={(e) => setNewArticleTitle(e.target.value)}
                            placeholder="Enter article title"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="articleContent" className="block text-sm font-medium text-gray-700">Content</label>
                        <textarea
                            id="articleContent"
                            rows="5"
                            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500 sm:text-sm p-2 border"
                            value={newArticleContent}
                            onChange={(e) => setNewArticleContent(e.target.value)}
                            placeholder="Write your article content here..."
                            required
                        ></textarea>
                    </div>
                    <div>
                        <label htmlFor="articleImage" className="block text-sm font-medium text-gray-700">Upload Image (Optional)</label>
                        <input
                            type="file"
                            id="articleImage"
                            accept="image/*" // Accept only image files
                            className="mt-1 block w-full text-sm text-gray-900 border border-gray-300 rounded-md cursor-pointer bg-gray-50 focus:outline-none file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-purple-50 file:text-purple-700 hover:file:bg-purple-100"
                            onChange={handleImageChange}
                        />
                        {imagePreview && (
                            <div className="mt-2">
                                <p className="text-xs text-gray-500 mb-1">Image Preview:</p>
                                <img src={imagePreview} alt="Image Preview" className="max-w-[150px] h-auto rounded-md border border-gray-200" />
                            </div>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="w-full inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 disabled:cursor-not-allowed"
                        disabled={loading}
                    >
                        {loading ? 'Adding...' : 'Add Article'}
                    </button>
                </form>
            </div>

            {/* Display Articles */}
            {loading && articles.length === 0 && <p className="text-center text-gray-600">Loading articles...</p>}
            {!loading && articles.length === 0 && !error && <p className="text-center text-gray-600">No articles yet. Be the first to add one!</p>}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {articles.map((article) => (
                    <div key={article.id} className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200">
                        {article.imageUrl && (
                            <img
                                src={article.imageUrl} // This will now render the Base64 string
                                alt={article.title}
                                className="w-full h-48 object-cover"
                                onError={(e) => { e.currentTarget.onerror = null; e.currentTarget.src = 'https://placehold.co/480x280/e0e0e0/555?text=Image+Missing'; }}
                            />
                        )}
                        <div className="p-6">
                            <h3 className="text-xl font-semibold mb-2 text-gray-900">{article.title}</h3>
                            <p className="text-sm text-gray-600 mb-4">
                                {article.createdAt ? new Date(article.createdAt).toLocaleDateString() : 'Date N/A'}
                            </p>
                            <p className="text-base text-gray-700 line-clamp-4">{article.content}</p>
                            <a href="#" className="mt-4 inline-block text-purple-600 text-sm font-medium hover:underline">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Articles;
