/* ============================================
   BLOG JAVASCRIPT - Blog Listing & Details
   ============================================ */

let blogPostsData = [];
const postsPerPage = 5;
let currentPage = 1;

// Load Blog Posts from JSON
const loadBlogPosts = async () => {
    try {
        const response = await fetch('assets/data/blog-posts.json');
        blogPostsData = await response.json();

        // Check if we're on blog listing page or blog post detail page
        const urlParams = new URLSearchParams(window.location.search);
        const postId = urlParams.get('id');

        if (postId) {
            showBlogPost(postId);
        } else {
            showBlogList();
        }

        // Load blog grid on index page
        const blogGrid = document.getElementById('blogGrid');
        if (blogGrid) {
            loadRecentBlogPosts();
        }
    } catch (error) {
        console.error('Error loading blog posts:', error);
    }
};

// Load Recent Blog Posts for Index Page
const loadRecentBlogPosts = () => {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    blogGrid.innerHTML = '';

    // Get first 3 posts
    const recentPosts = blogPostsData.slice(0, 3);

    recentPosts.forEach((post, index) => {
        const delay = index * 0.1;
        const card = document.createElement('div');
        card.className = 'blog-card';
        card.style.animationDelay = `${delay}s`;

        const postLink = `blog.html?id=${post.id}`;

        card.innerHTML = `
            <img src="${post.thumbnail}" alt="${post.title}" class="blog-thumbnail">
            <div class="blog-content">
                <span class="blog-category">${post.category}</span>
                <h3 class="blog-title"><a href="${postLink}">${post.title}</a></h3>
                <div class="blog-meta">
                    <span>${formatDate(post.date)}</span>
                    <span>${post.readTime}</span>
                </div>
                <p class="blog-excerpt">${post.excerpt}</p>
                <a href="${postLink}" class="blog-read-more">Devamını Oku →</a>
            </div>
        `;

        blogGrid.appendChild(card);
    });
};

// Show Blog Listing Page
const showBlogList = () => {
    const blogListContainer = document.getElementById('blogListContainer');
    if (!blogListContainer) return;

    const totalPages = Math.ceil(blogPostsData.length / postsPerPage);
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    const postsToShow = blogPostsData.slice(startIndex, endIndex);

    // Render blog list
    const blogList = document.getElementById('blogList');
    blogList.innerHTML = '';

    postsToShow.forEach(post => {
        const listItem = document.createElement('article');
        listItem.className = 'blog-list-item';

        const postLink = `blog.html?id=${post.id}`;

        listItem.innerHTML = `
            <img src="${post.thumbnail}" alt="${post.title}" class="blog-list-thumbnail">
            <div class="blog-list-content">
                <span class="blog-category-badge">${post.category}</span>
                <h2 class="blog-list-title"><a href="${postLink}">${post.title}</a></h2>
                <div class="blog-list-meta">
                    <span class="blog-date">${formatDate(post.date)}</span>
                    <span class="blog-author">${post.author}</span>
                    <span class="blog-read-time">${post.readTime}</span>
                </div>
                <p class="blog-list-excerpt">${post.excerpt}</p>
                <a href="${postLink}" class="blog-read-more">Devamını Oku →</a>
            </div>
        `;

        blogList.appendChild(listItem);
    });

    // Render pagination
    renderPagination(totalPages);

    // Render sidebar
    renderCategories();
    renderRecentPosts();
};

// Show Blog Post Detail
const showBlogPost = (postId) => {
    const blogPostContainer = document.getElementById('blogPost');
    const blogListContainer = document.getElementById('blogListContainer');

    if (blogListContainer) {
        blogListContainer.style.display = 'none';
    }

    if (!blogPostContainer) return;

    const post = blogPostsData.find(p => p.id === parseInt(postId));

    if (!post) {
        blogPostContainer.innerHTML = '<p>Yazı bulunamadı.</p>';
        return;
    }

    // Find previous and next posts
    const currentIndex = blogPostsData.findIndex(p => p.id === parseInt(postId));
    const previousPost = currentIndex > 0 ? blogPostsData[currentIndex - 1] : null;
    const nextPost = currentIndex < blogPostsData.length - 1 ? blogPostsData[currentIndex + 1] : null;

    blogPostContainer.innerHTML = `
        <div class="post-header">
            <span class="post-category">${post.category}</span>
            <h1 class="post-title">${post.title}</h1>
            <div class="post-meta">
                <span class="blog-date">${formatDate(post.date)}</span>
                <span class="blog-author">${post.author}</span>
                <span class="blog-read-time">${post.readTime}</span>
            </div>
        </div>
        ${post.image ? `<img src="${post.image}" alt="${post.title}" class="post-featured-image">` : ''}
        <div class="post-body">
            ${post.content}
        </div>
        <div class="post-footer">
            ${post.tags ? `
                <div class="post-tags">
                    ${post.tags.map(tag => `<span class="post-tag">${tag}</span>`).join('')}
                </div>
            ` : ''}
            <div class="post-navigation">
                ${previousPost ? `
                    <a href="blog.html?id=${previousPost.id}" class="nav-post">
                        <div class="nav-label">← Önceki Yazı</div>
                        <div class="nav-title">${previousPost.title}</div>
                    </a>
                ` : '<div></div>'}
                ${nextPost ? `
                    <a href="blog.html?id=${nextPost.id}" class="nav-post">
                        <div class="nav-label">Sonraki Yazı →</div>
                        <div class="nav-title">${nextPost.title}</div>
                    </a>
                ` : '<div></div>'}
            </div>
        </div>
    `;

    renderCategories();
    renderRecentPosts();
};

// Render Categories
const renderCategories = () => {
    const categoriesList = document.getElementById('categoriesList');
    if (!categoriesList) return;

    const categories = [...new Set(blogPostsData.map(post => post.category))];

    categoriesList.innerHTML = '';
    categories.forEach(category => {
        const link = document.createElement('a');
        link.href = '#';
        link.className = 'category-link';
        link.textContent = category;

        link.addEventListener('click', (e) => {
            e.preventDefault();
            // Filter functionality can be added here
        });

        categoriesList.appendChild(link);
    });
};

// Render Recent Posts
const renderRecentPosts = () => {
    const recentPostsList = document.getElementById('recentPosts');
    if (!recentPostsList) return;

    const recentPosts = blogPostsData.slice(0, 5);

    recentPostsList.innerHTML = '';
    recentPosts.forEach(post => {
        const item = document.createElement('a');
        item.href = `blog.html?id=${post.id}`;
        item.className = 'recent-post-item';

        item.innerHTML = `
            <div class="recent-post-title">${post.title}</div>
            <div class="recent-post-date">${formatDate(post.date)}</div>
        `;

        recentPostsList.appendChild(item);
    });
};

// Render Pagination
const renderPagination = (totalPages) => {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;

    pagination.innerHTML = '';

    // Previous button
    if (currentPage > 1) {
        const prevBtn = document.createElement('a');
        prevBtn.href = '#';
        prevBtn.className = 'page-link';
        prevBtn.textContent = '← Önceki';
        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage--;
            showBlogList();
            window.scrollTo(0, 0);
        });
        pagination.appendChild(prevBtn);
    }

    // Page numbers
    for (let i = 1; i <= totalPages; i++) {
        const pageBtn = document.createElement('a');
        pageBtn.href = '#';
        pageBtn.className = `page-link ${i === currentPage ? 'active' : ''}`;
        pageBtn.textContent = i;

        pageBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage = i;
            showBlogList();
            window.scrollTo(0, 0);
        });

        pagination.appendChild(pageBtn);
    }

    // Next button
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('a');
        nextBtn.href = '#';
        nextBtn.className = 'page-link';
        nextBtn.textContent = 'Sonraki →';
        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentPage++;
            showBlogList();
            window.scrollTo(0, 0);
        });
        pagination.appendChild(nextBtn);
    }
};

// Format Date
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('tr-TR', options);
};

// Initialize Blog on Page Load
document.addEventListener('DOMContentLoaded', () => {
    loadBlogPosts();
});

// Search Functionality (Optional)
const searchBlogPosts = () => {
    const searchInput = document.getElementById('searchInput');
    if (!searchInput) return;

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filtered = blogPostsData.filter(post =>
            post.title.toLowerCase().includes(searchTerm) ||
            post.excerpt.toLowerCase().includes(searchTerm) ||
            post.category.toLowerCase().includes(searchTerm)
        );

        // Optionally render filtered results
        // This is a placeholder implementation
    });
};

console.log('Blog JavaScript loaded successfully!');
