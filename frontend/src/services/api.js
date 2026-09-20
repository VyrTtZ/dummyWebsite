const API_URL = "http://localhost:5000/api";

async function api(endpoint, options = {}) {
    const res = await fetch(`${API_URL}${endpoint}`, {
        headers: {
            "Content-Type": "application/json",
            ...options.headers,
        },
        ...options,
    });
    return res.json();
}

export const getProducts = () => api("/products");
export const getProductById = (id) => api("/products/${id}");
export const createProduct = (productData) =>
    api("/products", {
        method: "POST",
        body: JSON.stringify(productData),
    });
export const updateProduct = (id, productData) =>
    api("/users/${id}", {
        method: "PUT",
        body: JSON.stringify(productData),
    });
export const deleteProduct = (id) =>
    api("/users/${id}", {
        method: "DELETE",
    });

export const getDashboardStats = () => api("dashboard/stats");

export default api;